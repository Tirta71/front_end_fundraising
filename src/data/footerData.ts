interface DataType {
  id: number;
  page: string;
  widget_title: string;
  footer_link: {
    link: string;
    link_title: string;
  }[];
}

const footer_data: DataType[] = [
  {
    id: 1,
    page: "home_1",
    widget_title: "About",
    footer_link: [
      { link: "/", link_title: "Home" },
      { link: "#", link_title: "Donation" },
    ],
  },

  {
    id: 3,
    page: "home_1",
    widget_title: "Explore",
    footer_link: [
      { link: "/causes", link_title: "Donate" },
      { link: "/causes", link_title: "Campaigns" },
      { link: "/volunteers", link_title: "Volunteers" },
    ],
  },
];

export default footer_data;
