/* eslint-disable react/no-unescaped-entities */
"use client";
import ChatBot from "./ChatBot";
import CommonFaq from "./CommonFaq";

const FaqStyleOne: React.FC = () => {
  return (
    <div className="faq-page-area pb-100 rel z-1 mt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10">
            <div className="section-title text-center mb-55">
              <span className="section-title__subtitle mb-10">
                Popular Question
              </span>
              <h2>
                Popular <span>Question</span> About us
              </h2>
              <p>This is the most popular question frequently asked</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <CommonFaq />
          </div>
        </div>
        <div className="row mt-5">
          <div className="section-title text-center ">
            <h2>
              <span>ChatBot</span>
            </h2>
            <p>If your question isn't answered, you can ask it here</p>
          </div>
          <div className="col-12">
            <ChatBot />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqStyleOne;
