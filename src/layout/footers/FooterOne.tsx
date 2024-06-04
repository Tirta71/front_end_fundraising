import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import SocialIcon from "@/components/common/SocialIcon";
import footer_data from "@/data/footerData";

import logo_1 from "@/assets/img/logos/logo-white.png";

import footerGallery_1 from "@/assets/img/footer/gallery1.jpg";
import footerGallery_2 from "@/assets/img/footer/gallery2.jpg";
import footerGallery_3 from "@/assets/img/footer/gallery3.jpg";
import footerGallery_4 from "@/assets/img/footer/gallery4.jpg";
import footerGallery_5 from "@/assets/img/footer/gallery5.jpg";
import footerGallery_6 from "@/assets/img/footer/gallery6.jpg";

interface ContentData {
  footer_about_text: JSX.Element;
  gallery: StaticImageData[];
}

const footer_content: ContentData = {
  footer_about_text: <>Donatur website for all fundraising</>,
  gallery: [
    footerGallery_1,
    footerGallery_2,
    footerGallery_3,
    footerGallery_4,
    footerGallery_5,
    footerGallery_6,
  ],
};

const { footer_about_text, gallery } = footer_content;

const FooterOne = () => {
  return (
    <footer
      className="footer-area overlay text-white pt-120 bgs-cover"
      style={{ backgroundImage: `url(/assets/img/footer/image_footer.jpg)` }}
    >
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-3 col-md-6 col-sm-8">
            <div className="widget widget_about">
              <div className="logo_footer mb-25">
                <Link href="/">
                  <Image src={logo_1} alt="Logo" />
                </Link>
              </div>
              <p>{footer_about_text}</p>
            </div>
          </div>

          {footer_data
            .filter((item) => item.page === "home_1")
            .map((item) => (
              <div key={item.id} className="col-lg-2 col-md-3 col-sm-4 col-6">
                <div className="widget widget_nav_menu">
                  <h5 className="widget-title">{item.widget_title}</h5>
                  <ul>
                    {item.footer_link.map((li, i) => (
                      <li key={i}>
                        <Link href={li.link}>{li.link_title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="footer-bottom mt-50 mx-auto">
        <div className="container">
          <div className="footer-bottom__inner ">
            <div className="copyright ">
              <p>Copyright 2024 All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterOne;
