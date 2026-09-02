export interface MenuItem {
  id: string;
  title: string;
  href?: string;
  children?: MenuItem[];
}
