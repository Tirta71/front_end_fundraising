import Image from "next/image"

import portfolioDetailsThumb from "@/assets/img/portfolio/portfolio-details.jpg"

interface ContentData {
   title_1: string;
   desc_1: JSX.Element;
   desc_2: JSX.Element;
   desc_3: JSX.Element;
   blockquote: JSX.Element;
   list: string[];
}

const details_content: ContentData = {
   title_1: "Helping Homeless People",
   desc_1: (<>Suscipit nibh hendrerit vel. Mauris sapien neque, placerat ut dolor nec, egestas tincidunt felis. Sed in ornare quam, finibus aliquam justo. Duis eros quam, semper at libero sed, vehicula consequat arcu. In ornare, enim at egestas bibendum, ligula ante congue arcu, sed ornare sem nulla nec magna. Morbi faucibus sed ante eu bibendum. Phasellus posuere mauris risus, pharetra pellentesque turpis porta vel. Suspendisse aculis tempor. Quisque ullamcorper feugiat elit, ut mollis diam finibus quis. Praesent fringilla urna eu purus laoreet, ac faucibus dolor vehicula. Ut consectetur maximus cursus. Proin eu purus lectus. Mauris cursus elit eget mi sagittis volutpat. Duis fermentum a urna finibus malesuada. Quisque at lacus id dolor commodo rutrum. Nulla odio lacus, rhoncus vitae ultrices et, mattis ac nunc. Praesent venenatis dui in nibh interdum</>),
   desc_2: (<>luctus feugiat. Mauris vitae turpis eu ante blandit rutrum ut at lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer congue feugiat ligula varius vestibulum. Donec volutpat leo dui, in sodales dui euismod non. Praesent id libero at ligula</>),
   desc_3: (<>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model words which don&apos;t look even slightly believable. If you are going to use a passage vitae turpis eu ante blandit</>),
   blockquote: (<>The UK’s largest campain groarequired to cringrequirefromJanuary Find out mabout our approac From shares hoppin centres and term deposits gravida porttitor. Donec scelerisque, tortor ut mollis mollis, tortor ante mattis model sentence structures, to generate Lorem Ipsum which looks reasonable.</>),
   list: ["Kam adipiscin estibulum", "Food help for african people", "Kam adipiscin estibulum", "Suport Homeless people", "Volenteer", "Donation"],
}

const { title_1, desc_1, desc_2, blockquote, desc_3, list } = details_content;

const PortfolioDetailsArea = () => {
   return (
      <div className="portfolio-details-area pt-120 pb-105">
         <div className="container">
            <div className="portfolio-details-content">
               <div className="details-image mb-50">
                  <Image src={portfolioDetailsThumb} alt="Portfolio details" />
               </div>
               <h3 className="title mb-20">{title_1}</h3>
               <p>{desc_1}</p>
               <p>{desc_2}</p>
               <blockquote className="mt-70">
                  <div className="quote-icon"><i className="flaticon-quote"></i></div>
                  {blockquote}
               </blockquote>
            </div>
         </div>
      </div>
   )
}

export default PortfolioDetailsArea
