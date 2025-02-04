export interface ApiData {
  logos: Logos;
  dataGeneral: DataGeneral;
  valuesContent: ValuesContent;
  widgets: Widgets;
  reviews: Reviews;
  colors: Colors;
  _id: string;
  nameCustomers: string;
  name: string;
  businessAddress: string;
  accountAddress: string;
  domain: string;
  businessLicense: string;
  yearsExperience: string;
  milesCover: string;
  estimateFree: string;
  languages: string;
  methodsPayment: string;
  existingWebsite: string;
  services: Service[];
  landingLocations?: LandingLocation[];
  gallery: string[];
  landingsGallery: LandingsGallery[];
  redesSociales: SocialMedia[];
  directorios: SocialMedia[];
  gmb: string;
  slogan: string[];
  sectionsHomeAbout: SectionsHomeAbout[];
  videoAnimado: any[];
  beforeAfter: any[];
  createdAt: Date;
  updatedAt: Date;
}


export interface LandingsGallery {
  _id: string;
  nameLanding: string;
  imgLanding: string[];
}
export interface SectionsHomeAbout {
  _id: string;
  additionalImages: string[];
  list: any[];
  section: string;
  text: string;
  tipos: string;
  title: string;
}


export interface Widgets {
  btnWhatsapp: boolean;
  counterVisit: boolean;
  weatherViewer: boolean;
  onePages: boolean;
  btnCallUs: boolean;
  colorPalette: boolean;
  landingGallery: boolean;
  landingServices: boolean;
  landingVideos: boolean;
  formReviews: boolean;
  beforeAfter: boolean;
  underConstrution: boolean;
  siteDown: boolean;
  popup: boolean;
  blog: boolean;
  areasweserve: boolean;
}
export type Colors = {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
  fourthColor: string;
  titleColor: string;
  textColor: string;
  btnColor: string;
  btnHoverColor: string;
}

export type DataGeneral = {
  location: Location[];
  phones: Phone[];
  emails: Email[];
  openingHours: OpeningHour[];
}

export type Email = {
  title: string;
  email: string;
  _id: string;
}

export type Location = {
  city: string;
  urlCity: string;
  _id: string;
}

export type OpeningHour = {
  days: string;
  hours: string;
  _id: string;
}

export type Phone = {
  title: string;
  number: string;
  _id: string;
}

export type SocialMedia = {
  _id: string;
  name: string;
  icon: string;
  logo: string;
  link: string;
}

export type Logos = {
  primary: string;
  favicon: string;
  secondary: string;
}

export type Reviews = {
  stateReviews: boolean;
  viewHome: boolean;
  viewAll: boolean;
  urlReviews: string;
}

export interface Service {
  _id: string;
  description: Description[];
  showtitletext: boolean;
  subtitle: string;
  title: string;
}

export interface Description {
  _id: string;
  image: string;
  text: string;
  precio: string;
  tipoImages: string;
}

export interface ValuesContent {
  mission: string;
  vision: string;
  whychooseUs: string;
  additionalImages: string[];
}

interface DescriptionLocations {
  title: string;
  subtitle: string;
  image: string;
  text: string;
  textbutton: string;
}

export interface LandingLocation {
  title: string;
  subtitle: string;
  keywords: string;
  seoTitle: string;
  slug: string;
  metadescription: string;
  feactureimage: string;
  date?: Date | string; // Use string if the date is in ISO format
  category: string;
  autor: string;
  description: DescriptionLocations[];
}