import Image from "next/image";
import Link from "next/link";
import { journalPhotos } from "../data/journal";
export default function ArtistJournal({ full=false }: {full?:boolean}) {
 const photos=full?journalPhotos:journalPhotos.slice(1,4);
 return <section id="bio" className="artist-journal"><div className="journal-heading"><div><p className="eyebrow">THE PERSON BEHIND THE RECORDS</p><h2>A work<br/><em>in progress.</em></h2></div><div><p>The studio. The streets. The moments in between. A few frames from my world, and the story I’m still writing.</p>{!full&&<Link href="/cdvrswrld" className="text-link">Step into my world ↗</Link>}</div></div><div className={`journal-photos ${full?'journal-full':''}`}>{photos.map((photo,i)=><figure key={photo.src} className={`journal-photo photo-${i}`}><div className="journal-image"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 700px) 90vw, 33vw" className="object-cover" style={{objectPosition:photo.position}}/></div><figcaption><span>{String(i+1).padStart(2,'0')} / {photo.note}</span><strong>{photo.caption}</strong></figcaption></figure>)}</div></section>;
}
