interface MenuItem {
  id: number;
  title: string;
  link: string;
  has_dropdown: boolean;
  sub_menus?: {
    link: string;
    title: string;
  }[];
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: false,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: false,
    title: "Causes",
    link: "/causes",
  },
  {
    id: 4,
    has_dropdown: false,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 5,
    has_dropdown: true,
    title: "Volunteers",
    link: "#",
    sub_menus: [
      { link: "/volunteers", title: "Volunteers" },
      { link: "/become-volunteers", title: "Become Volunteer" },
    ],
  },
  {
    id: 7,
    has_dropdown: false,
    title: "FAQ Page",
    link: "/faqs",
  },
];

export default menu_data;
