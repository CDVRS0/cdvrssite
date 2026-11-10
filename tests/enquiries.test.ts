import assert from 'node:assert/strict';
import { test } from 'node:test';
import { GET, POST } from '../app/api/enquiries/route';

const payload = {type:'bookings',name:'Website QA',email:'qa@example.com',subject:'Validation only',message:'Test enquiry content',startedAt:Date.now()-10000,website:''};
const request = (input:unknown, origin='https://www.cdvrswrld.com') => new Request('https://www.cdvrswrld.com/api/enquiries',{method:'POST',headers:{origin,'content-type':'application/json'},body:JSON.stringify(input)});
test('configuration status does not claim sending without a key',async()=>{ delete process.env.RESEND_API_KEY; assert.deepEqual(await (await GET()).json(),{enabled:false}); });
test('rejects cross-origin submissions before delivery',async()=>{ assert.equal((await POST(request(payload,'https://other.example'))).status,403); });
test('rejects invalid addresses, arbitrary routes, traps and header injection',async()=>{ for(const edit of [{email:'bad'},{type:'attacker@example.com'},{website:'spam'},{name:'A\r\nB'},{startedAt:Date.now()+10000}]) assert.equal((await POST(request({...payload,...edit}))).status,400); });
test('unconfigured delivery returns an error rather than success',async()=>{ delete process.env.RESEND_API_KEY; assert.equal((await POST(request(payload))).status,503); });
test('sends each category only to its approved team and returns the provider reference',async()=>{
 process.env.RESEND_API_KEY='re_test_only';
 const originalFetch=globalThis.fetch;
 const calls:Array<{to:string[]|string,reply_to:string}>=[];
 globalThis.fetch=async(_url,options)=>{calls.push(JSON.parse(String(options?.body))); return Response.json({id:'qa-reference'});};
 try {
  for(const [type,to] of [['bookings','itscdvrs@gmail.com'],['engineering','itscdvrs@gmail.com'],['no-pressure','npglobalmusic@gmail.com'],['sports','cdvrssports@gmail.com'],['takeover','takeover3x3basketball@gmail.com']]) {
   const res=await POST(request({...payload,type,to:'attacker@example.com'})); assert.equal(res.status,200); assert.deepEqual(await res.json(),{success:true,reference:'qa-reference'}); assert.deepEqual(calls.at(-1)?.to,to); assert.equal(calls.at(-1)?.reply_to,payload.email);
  }
 } finally {globalThis.fetch=originalFetch;delete process.env.RESEND_API_KEY;}
});
