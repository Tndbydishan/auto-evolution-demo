export type PageId = 'home' | 'about' | 'services' | 'training' | 'blogs' | 'contact' | 'booking';

export type NavTheme = 'light' | 'dark';

export interface NavItem {
  id: PageId;
  href: string;
  label: string;
  subItems?: { label: string; href: string }[];
}

export interface SocialItem {
  href: string;
  iconClass: string;
}