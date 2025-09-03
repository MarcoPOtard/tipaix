export interface Show {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  address: string;
  image: string;
  description: string;
}

export interface TroupeMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}