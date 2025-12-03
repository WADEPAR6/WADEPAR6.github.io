export interface SkillItems {
  [key: string]: string;
}

export interface Language {
  key: number;
  nameIdiom: string;
  descriptionIdiom: string;
  percentage: number;
}

export interface Proyect {
  key: number;
  name: string;
  description: string;
  period: string;
  url: string;
  image: string;
}

export interface SocialNetwork {
  key: number;
  name: string;
  url: string;
  icon: string;
}

export interface WorkExperienceItem {
  key: number;
  position: string;
  company: string;
  period: string;
  description: string;
}

export interface CertificationItem {
  name: string;
  institution: string;
  period: string;
  description?: string;
  file?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  details?: string[];
}

export interface Dictionary {
  general: {
    title: string;
    name?: string;
    description: string;
    skills: {
      nameSkill: string;
      description: string;
      items: SkillItems;
    };
  };
  educationTitle: string;
  educationItems: EducationItem[];
  educationDescription?: string;
  nameLanguage?: string;
  descriptionLanguage?: string;
  languas: Language[];
  languagesNull?: string;
  languagesLevel?: string;
  workExperienceTitle: string;
  workExperienceItems: WorkExperienceItem[];
  workExperienceNull?: string;
  experienceDescription?: string;
  socialNetworkTitle?: string;
  socialNetworks?: SocialNetwork[];
  aboutMe?: string;
  personalNumber?: string;
  institutionalEmail?: string;
  personalEmail?: string;
  download?: string;
  portafolio?: string;
  curses?: string;
  proyects?: string;
  proyectsNull?: string;
  proyectsItems?: Proyect[];
  repository?: string;
  contacts?: string;
  contactsDescription?: string;
  contactFormTitle?: string;
  contactFormName?: string;
  contactFormNamePlaceholder?: string;
  contactFormEmail?: string;
  contactFormEmailPlaceholder?: string;
  contactFormSubject?: string;
  contactFormSubjectPlaceholder?: string;
  contactFormMessage?: string;
  contactFormMessagePlaceholder?: string;
  contactFormSubmit?: string;
  contactFormSending?: string;
  contactFormSuccess?: string;
  contactFormError?: string;
  frameworks?: string;
  tools?: string;
  databases?: string;
  operatingSystems?: string;
  certifications?: string;
  certificationsNull?: string;
  certificationsTitle?: string;
  certificationDescription?: string;
  certificationsItems?: CertificationItem[];
  personalInformation?: string;
  birthdate?: string;
  address?: string;
  fullName?: string;
  nameLabel?: string;
  firstName?: string;
  lastName?: string;
  emailLabel?: string;
  phoneLabel?: string;
  birthdateLabel?: string;
  addressLabel?: string;
  viewCertificate?: string;
} 