import React from "react";
import { Link } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AsSeenOn from "./assets/AsSeenOn.png";
import first from "./assets/1.png";
import second from "./assets/2.png";
import third from "./assets/3.jpg";
import fourth from "./assets/4.png";
import fifth from "./assets/5.jpg";
import sixth from "./assets/6.jpg";
import seventh from "./assets/7.jpg";
import eight from "./assets/8.jpg";
import p1 from "./assets/person1.png";
import p2 from "./assets/person2.png";
import p3 from "./assets/person3.png";
import { useHistory } from "react-router";
export default function LandingPage() {
  const History = useHistory();
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="navbar">
          <h1 className="navheading">
            FIRST LIVE VIRTUAL CLASS - <ins>Register NOW </ins>
          </h1>
        </div>
      </div>
      <img src={AsSeenOn} className="rounded mx-auto d-block asseenon" />
      <div>
        <div className="d-flex justify-content-center">
          <h1 className="justify-content-center howto">
            How To Extract{" "}
            <span class="gold">Returns Consistently From The Financial</span>
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <h1 className="likethe">
            <span class="gold">Markets</span> Like The Big Financial
            Institutions Using
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <h1 className="the">
            The{" "}
            <u>
              <em className="sametrading">Same Trading System </em>
            </u>
            They Use
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <p className="display6 evenif">
            … Even If You Do Not Have Any Prior Trading Knowledge, A Huge
            Capital To Start With Or Time To
          </p>
        </div>
        <div className="d-flex justify-content-center">
          <p className="display6 follow">Follow The News & Markets</p>
        </div>
      </div>
      <div className="container">
        <div className="container-fluid shadow p-3 mb-5 inputbox">
          <div className="d-flex flex-row">
            <div className="col">Video Here</div>{" "}
            <div className="inputtype">
              <div className="col securediv justify-content-center bluebar">
                <p className="text-white justify-content-center securetxt">
                  <strong>SECURE YOUR LIVE TICKET RIGHT NOW!</strong>
                </p>
              </div>
              <div>
                <p className="hereis">Here's what you'll discover:</p>
                <div class="d-flex flex-column bd-highlight ">
                  <div class=" bd-highlight">
                    <DoneIcon fontSize="medium" className="icon" />
                    How You Can Generate Consistent Returns From The
                    <p class="textmargin">
                      Market In Any Market Condition (... Yes, Even In A Crisis
                    </p>
                    <p class="textmargin2">Like This!)</p>
                  </div>
                  <div class=" bd-highlight">
                    <DoneIcon fontSize="medium" className="icon" />
                    How You Can Start Trading Like The Pros, With As Little
                    <p class="textmargin3">
                      As $500 And Just Spending 15 Minutes A Day (I’m
                    </p>
                    <p class="textmargin2">
                      Revealing What Institutional Traders Don't Want You To
                    </p>
                    <p class="textmargin2">Know!)</p>
                  </div>
                  <div class="bd-highlight">
                    <DoneIcon fontSize="medium" className="icon" />
                    Copy and Paste One of My Most Closely Guarded
                    <p class="textmargin3">
                      Strategies (....That Has Been Responsible for Making Me
                    </p>
                    <p class="textmargin2">
                      7-Figures in the Currency Markets)
                    </p>
                  </div>
                </div>
              </div>
              <div class="d-grid gap-2 col-8 mx-auto">
                <button className="btn1" type="button">
                  <b>
                    <p fontSize="medium" className="reserve">
                      {" "}
                      > RESERVE YOUR LIVE TICKET
                    </p>
                  </b>
                  <p class="capped">**CAPPED TO KEEP WEBCLASS INTERACTIVE**</p>
                </button>
              </div>
              <div className="termsandconditions">
                <p className="terms">
                  By providing Vincero Investment Academy with my personal data:{" "}
                </p>
                <p className="terms">
                  * I agree to Vincero Investments Academy's Terms & Conditions
                  / Service Level Agreement
                </p>
                <p className="terms">
                  * I agree that Vincero Investment Academy may collect, use and
                  disclose my personal data for purposes in accordance with its
                  Privacy Policy and the Personal Data Protection Act 2012. I
                  understand that my personal data may be used for marketing
                  purposes by Vincero Investment Academy or its partners; and I
                  hereby consent to receive marketing and promotional materials
                  by telephone, SMS or e-mail and through other channels as
                  determined by Vincero Investment Academy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <p class="just">
          <strong>JUST SOME OF OUR STUDENT'S RESULTS</strong>
        </p>
      </div>
      <div class="container-sm ss">
        <div class="row justify-content-evenly">
          <div class="col-4">
            <img src={first} class="sspic1" />
          </div>
          <div class="col-4">
            <img src={second} class="sspic1" />
          </div>
        </div>
        <div class="row justify-content-evenly">
          <div class="col-2">
            <img src={third} class="sspic2" />
          </div>
          <div class="col-2">
            <img src={fourth} class="sspic2" />
          </div>
          <div class="col-2">
            <img src={fifth} class="sspic2" />
          </div>
        </div>
        <div class="row justify-content-evenly">
          <div class="col-2">
            <img src={sixth} class="sspic3" />
          </div>
          <div class="col-2">
            <img src={seventh} class="sspic3" />
          </div>
          <div class="col-2">
            <img src={eight} class="sspic3" />
          </div>
        </div>
      </div>
      <div class="row justify-content-evenly">
        <div class="col-4">Video Here</div>
        <div class="col-4">
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={p1} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title tit">
                    Iris Ie - IT Manager of US Retail Firm
                  </h5>
                  <p class="card-text crdtxt">
                    Before attending the course, I thought that there were so
                    many currency pairs and it was difficult to decide which one
                    to trade at a certain time. But Justin is a very good
                    teacher and he made the content very simple. I now have the
                    confidence to decide which currency pair to trade.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={p2} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title tit">
                    Nai Pan Ng - Architectural Designer
                  </h5>
                  <p class="card-text crdtxt">
                    I have very little experience and struggled to make money
                    with all the information in the internet, it's very
                    confusing! Justin makes the concept simple and easy to
                    understand and follow for someone like me who has no
                    financial background.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" style={{ maxWidth: "540px" }}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={p3} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title tit">Anthony Liu - Business Analyst</h5>
                  <p class="card-text crdtxt">
                    It was Justin who told me that by understanding the
                    fundamentals and market sentiments, it can help make better
                    judgements, which make trading a lot less stressful. I
                    learnt how professionals look at the market, what trades to
                    take and what to avoid.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn1" type="button">
          <b>
            <p fontSize="medium"> > RESERVE YOUR LIVE TICKET</p>
          </b>
          <p class="capped">**CAPPED TO KEEP WEBCLASS INTERACTIVE**</p>
        </button>
      </div>
      <div className="container">
        <p class="text-center">Important Earnings Disclaimer</p>
        <p class="text-center">
          This site is not a part of the Facebook website or Facebook Inc.
          Additionally, this site is NOT endorsed by Facebook in any way.
          FACEBOOK is a trademark of FACEBOOK, Inc. This site is not a part of
          the YouTube website or Google LLC. This site is also NOT endorsed by
          Google in any way.{" "}
        </p>
        <p class="text-center">
          Disclaimer: Results may vary and testimonials are not claimed to
          represent typical results. All testimonials are real. These results
          are meant as a showcase of some of the positive results that we and
          our clients have achieved and should not be taken as guaranteed,
          average or typical results. Earnings and income representations made
          by Justin Ho, JH Capital Limited, its parent company, subsidiaries and
          affiliates, and their respective members, officers, directors,
          shareholders, employees, agents, co-branders, advertisers, sponsors
          and/or other partners are aspirational statements only. We can in NO
          way guarantee you will get similar or positive results.
        </p>
        <p class="text-center">
          Your results will vary and depend on many factors... including but not
          limited to your background, experience, access to information,
          responsiveness to marker conditions and work ethic. All business
          entails risk as well as massive and consistent effort and action. If
          you're not willing to accept that, please do not attend.
        </p>
        <p class="text-center">
          Important
          <Link to="/TermsandConditions">
            {" "}
            <button
              className="btn btn-link"
              onClick={() => History.push("/TermsandConditions")}
            >
              Terms and Conditions
            </button>
          </Link>
          ,
          <button
            className="btn btn-link"
            onClick={() => History.push("/PrivacyPolicy")}
          >
            {" "}
            Privacy Policy{" "}
          </button>{" "}
          and{" "}
          <button
            className="btn btn-link"
            onClick={() => History.push("/RiskandEarning")}
          >
            {" "}
            Risk and Earning Disclaimers{" "}
          </button>{" "}
          apply to information and services provided by us. Our classes aim at
          the discussion of skills and techniques and development of interests
          and shall not be taken as educational course of any sort.
        </p>
        <p class="text-center">
          All Rights Reserved | Vincero Investment Academy | 2020
        </p>
      </div>
    </div>
  );
}
