import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./About.css";

import profileImage from "../images/AboutUs_profile_Image.png";
import AboutHeroImage from "../images/AboutUs_Hero_Image2.png";
import AboutUsGlobe from "../images/AboutUs_globe.png";
import AboutUsLinkdin from "../images/AboutUS_linkedin.png";
import AboutUsGithub from "../images/AboutUs_github.png";
// import { linkedIn } from ''

let About = (props) => {
  let [emailNews, setEmailNews] = useState("");
  return (
    <>
      {/* header component fetched */}
      <header className="header">
        <Header />
      </header>

      <main className="about-us">
        <section className="landing-about-us">
          <div className="about-description">
            <img src={AboutHeroImage} alt="" />
            <div className="Our-impact">
              <h1>Our Impact</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                facilis molestias necessitatibus nemo exercitationem repellat
                magnam ipsam earum a! Doloremque adipisci suscipit voluptatibus
                eum commodi? Porro at delectus quidem adipisci? Lorem ipsum
                dolor sit, amet consectetur adipisicing elit. Iusto perferendis
                officia cum quod. Facere nihil quod sequi tenetur doloremque
                alias ab vel, provident aliquid nostrum, dolores quam, et
                excepturi corrupti.
              </p>
            </div>
          </div>
          <div className="image-container"></div>
        </section>

        <section>
          <div className="team-intro">
            <h3>Meet Our Team</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur
              et facilis magni vero nulla ad error in quam possimus quod
              molestias similique velit fuga provident id, nesciunt culpa
              distinctio suscipit.
            </p>
          </div>
        </section>

        <section className="our-team">
          <div className="team-member" id="team-member1">
            <img src={profileImage} alt="AnmolDeep Kaur" />
            <div className="profile-details" id="profile1">
              <div className="member-title">
                <p>AnmolDeep Kaur</p>
                <p>Lead UI Designer</p>
              </div>
              <div className="social-links">
                <img src={AboutUsLinkdin} alt="linkedin" />

                <img src={AboutUsGithub} alt="github profile" />

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>
          <div className="team-member" id="team-member2">
            <img src={profileImage} alt="Manpreet Kaur" />

            <div className="profile-details" id="profile2">
              <div className="member-title">
                <p>Manpreet Kaur</p>
                <p>Lead UX Designer</p>
              </div>
              <div className="social-links">
                <img src={AboutUsLinkdin} alt="linkedin" />

                <img src={AboutUsGithub} alt="github profile" />

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>

          <div className="team-member" id="team-member5">
            <img src={profileImage} alt="Tejaswini Kalyan" />

            <div className="profile-details" id="profile3">
              <div className="member-title">
                <p>Tejaswini Kalyan Kumar</p>
                <p>Front End Developer</p>
              </div>
              <div className="social-links">
                <img src={AboutUsLinkdin} alt="linkedin" />

                <img src={AboutUsGithub} alt="github profile" />

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>

          <div className="team-member" id="team-member3">
            <img src={profileImage} alt="Shubham Verma" />

            <div className="profile-details" id="profile4">
              <div className="member-title">
                <p>Shubham Verma</p>
                <p>Full Stack Developer</p>
              </div>
              <div className="social-links">
                <img src={AboutUsLinkdin} alt="linkedin" />

                <img src={AboutUsGithub} alt="github profile" />

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>

          <div className="team-member" id="team-member4">
            <img src={profileImage} alt="Paraminder Singh" />

            <div className="profile-details" id="profile5">
              <div className="member-title">
                <p>Paraminder Singh</p>
                <p>Full Stack Developer</p>
              </div>
              <div className="social-links">
                <img src={AboutUsLinkdin} alt="linkedin" />

                <img src={AboutUsGithub} alt="github profile" />

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>

          <div className="team-member" id="team-member6">
            <img src={profileImage} alt="Jaskaranvir Deogan" />
            <div className="profile-details" id="profile6">
              <div className="member-title">
                <p>Jaskaranvir Deogan</p>
                <p>Front End Developer</p>
              </div>
              <div className="social-links">
                <img src={AboutUsLinkdin} alt="linkedin" />

                <img src={AboutUsGithub} alt="github profile" />

                <img src={AboutUsGlobe} alt="globe" />
              </div>
            </div>
          </div>
        </section>
        <section className="newsletter">
          <div className="newsletter-wrapper">
            <h4>Join Our Newsletter</h4>
            <p>
              Keep yourself updated with latest event and affairs. Subscribe our
              news letter by providing your
            </p>
            <div>
              <input
                type="email"
                name="newsletter-email"
                id="newsletterEmail"
                value={emailNews}
                onChange={(e) => {
                  setEmailNews(e.target.value);
                }}
                placeholder="Enter your email"
              />
              <button
                type="submit"
                onClick={(e) => {
                  alert("You are subscribed for the news letter");
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer component fetched */}
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default About;
