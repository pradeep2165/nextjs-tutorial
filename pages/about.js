import React from "react";
import style from "../styles/about.module.scss";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <h1 className={style.highlightscss}>About page</h1>
      <h2>hello Pradeep</h2>
      <button className="btn btn-primary">button</button>
    </div>
  );
};

export default About;

About.getLayout = function PageLayout(page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
