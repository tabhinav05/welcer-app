import React from "react";

const Mainpage = () => (
  <>
    <div className="site-blocks-cover" style={{overflow:" hidden"}}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div
            className="col-md-12"
            style={{position: "relative"}}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={"images/undraw_investing_7u74.svg"}
              
              className="img-fluid img-absolute"
              alt=""
            />

            <div className="row mb-4" data-aos="fade-up" data-aos-delay="200">
              <div className="col-lg-6 mr-auto">
                <h1>Build Your Dream</h1>
                <h5 className="mb-5">
                  हम मिडिल क्लास फॅमिली के सपनो को पूरा करने का एक सही रास्ता है
                  नेटवर्क मार्केटिंग बिज़नेस पर जिस तरह दुनिया का हर बिज़नेस
                  अपग्रेड हो रहा है ,टेक्नोलॉजी के हिसाब से परिवर्तित हो रहा है
                  ,यक़ीनन इस इंडस्ट्री को भी बदलने की जरुरत है ,इसको करने के
                  तरीको को भी बदलने की जरुरत है{" "}
                </h5>
                <div>
                  <a href="#" className="btn btn-primary mr-2 mb-2">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section" id="features-section">
      <div className="container">
        <div
          className="row mb-5 justify-content-center text-center"
          data-aos="fade-up"
        >
          <div className="col-7 text-center  mb-5">
            <h2 className="section-title">Markting</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              quos quaerat sapiente nam, id vero.
            </p>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-md-12 col-lg-12" data-aos="fade-up">
            <div className="unit-4 d-block">
              <div className="unit-4-icon mb-3">
                <span className="icon-wrap">
                  <span className="text-primary icon-autorenew"></span>
                </span>
              </div>
              <div>
                <div></div>
                <h5>
                  अपने कस्टमर तक पहुंचना और उसको अपना प्रोडक्ट प्रेजेंट करना या
                  उसके बारे में बताना या नेटवर्क मार्केटिंग की भाषा में बोले तो
                  प्रोस्पेक्टिंग करना पहले आप इस प्रोस्पेक्टिंग के लिए वहां जाते
                  थे जहा लोग रहते थे ,ज्यादा से ज्यादा लोग मिलते थे जैसे की जिम
                  ,बस स्टैंड ,माल्स ,पार्क आदि पर आज के ज़माने में आप देखे तो लोग
                  सबसे ज्यादा कहा मिलते है ? सोशल मीडिया पे, क्यों न हम वही से
                  प्रोस्पेक्टिंग कर अपनी मार्केटिंग करे लीड जनरेट करे ,यह आसान
                  है बस जरुरत है सिखने की
                </h5>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Mainpage;
