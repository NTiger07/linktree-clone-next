export interface SocialsType {
  platform: string;
  url: string;
}

export interface LinksType {
  id?: string;
  imageUrl: string;
  title: string;
  url: string;
  position?: number;
}

export interface UserDataType {
  id: string;
  username: string;
  name: string;
  email: string;
  profilePic: string;
  about: string;
  socials: SocialsType[];
  links: LinksType[];
}
