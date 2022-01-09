import React from "react";
import "./blog.css";
import Herochallenge from "./heroChallenge/Herochallenge";

export default function Blog() {
  return (
    <>
      <Herochallenge />
      <div>
        <div className="blogsection">
          <div className="textsectionheading">
            {/* <h3>Read the health related blogs here.</h3> */}
          </div>
          <div className="blogs">
            <div class="grid-container">
              <div class="item1">
                <div className="textsection">
                  <div className="blogheading">
                    Wake up and smell the coffee.
                  </div>
                  <div className="blogsubheading">Healthy Food</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
              <div class="item2">
                <div className="textsection">
                  <div className="blogheading">The Art of Healthy Living</div>
                  <div className="blogsubheading">Life</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
              <div class="item3">
                <div className="textsection">
                  <div className="blogheading">Nerd Fitness</div>
                  <div className="blogsubheading"> Fitness</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
              <div class="item4">
                <div className="textsection">
                  <div className="blogheading">MyFitnessPal Blog</div>
                  <div className="blogsubheading">Health</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
              <div class="item5">
                <div className="textsection">
                  <div className="blogheading">Shape</div>
                  <div className="blogsubheading">Body</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
            </div>
            <div class="grid-container">
              <div class="item1">
                <div className="textsection">
                  <div className="blogheading">Well + Good</div>
                  <div className="blogsubheading">Mental health</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
              <div class="item2">
                <div className="textsection">
                  <div className="blogheading">Bites of Wellness</div>
                  <div className="blogsubheading">Healthy Food</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
              <div class="item3">
                <div className="textsection">
                  <div className="blogheading">Health Magazine</div>
                  <div className="blogsubheading"> Book</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
              <div class="item4">
                <div className="textsection">
                  <div className="blogheading">Healthline Nutrition</div>
                  <div className="blogsubheading">Healthy Food</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
              <div class="item5">
                <div className="textsection">
                  <div className="blogheading">HealthyPlace</div>
                  <div className="blogsubheading">Healthy Living</div>
                  <div className="blogbutton">Read More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
