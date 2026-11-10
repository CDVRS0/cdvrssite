export const enquiryTypes = {
  bookings: { label: "Artist bookings", email: "itscdvrs@gmail.com" },
  production: { label: "Production", email: "itscdvrs@gmail.com" },
  engineering: { label: "Mixing & mastering", email: "itscdvrs@gmail.com" },
  collaboration: { label: "Music collaborations & press", email: "itscdvrs@gmail.com" },
  "no-pressure": { label: "No Pressure submissions", email: "npglobalmusic@gmail.com" },
  cd4q: { label: "CD4Q runs & scrimmages", email: "cdvrssports@gmail.com" },
  sports: { label: "Sports partnerships", email: "cdvrssports@gmail.com" },
  takeover: { label: "Takeover 3x3", email: "takeover3x3basketball@gmail.com" },
} as const;
export type EnquiryType = keyof typeof enquiryTypes;
