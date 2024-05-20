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
[];

const menu_data: MenuItem[] = [
  {
    id: 1,
    has_dropdown: true,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    has_dropdown: true,
    title: "Causes",
    link: "/causes",
    // sub_menus: [
    //   { link: "/causes", title: "Causes" },
    //   { link: "/causes-slider", title: "Causes Slider" },
    //   { link: "/causes-details", title: "Causes Details" },
    // ],
  },

  {
    id: 4,
    has_dropdown: true,
    title: "Portfolio",
    link: "/portfolio",
    // sub_menus: [
    //   { link: "/portfolio", title: "Portfolio" },
    //   // { link: "/portfolio-details", title: "Portfolio Details" },
    //   // { link: "/donate", title: "Donate" },
    // ],
  },
  {
    id: 5,
    has_dropdown: true,
    title: "other",
    link: "#",
    sub_menus: [
      // { link: "/about", title: "About Us" },
      { link: "/contact", title: "Contact Us" },
      { link: "/volunteers", title: "Volunteers" },
      { link: "/become-volunteers", title: "Become Volunteer" },
      { link: "/faqs", title: "FAQ Page" },
      // { link: "/not-found", title: "404 Error" },
    ],
  },

  // {
  //   id: 6,
  //   has_dropdown: true,
  //   title: "Blog",
  //   link: "#",
  //   sub_menus: [
  //     { link: "/blog", title: "Blog" },
  //     { link: "/blog-clasic", title: "Blog Clasic" },
  //     { link: "/blog-slider", title: "Blog Slider" },
  //     { link: "/blog-details", title: "Blog Details" },
  //   ],
  // },
];
export default menu_data;
