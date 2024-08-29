import React from "react";
import "./landing.css";
import img from "../landingpage/landing_img.png"
// import img1 from "../landingpage/landing_img.png"


const Landingpage = () => {
  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
    document.body.appendChild(css);
  };

  return (
    <div className="landing_main">
      <div className="left">
        <div className="intro_div">
          <h2 className="typewrite">Hi ,</h2>
          <h2 className="typewrite unique_color">I'm Adnan Ahmed </h2>
          <h2 className="typewrite">I'm enthusiastic about creating </h2>
          <h1 className="typewrite unique_color">
            <a
              className="typewrite"
              data-period="2000"
              data-type='[ "Responsive Design ", "Attractive Design ", "Efficient Website" ]'>
              <span className="wrap"></span>
            </a>
          </h1>
        </div>

        <p className="landing_para">
          Hello! I'm Adnan Ahmed, <u className="imp">a Web Developer with 4 months of
          experience</u>, currently focused on enhancing my skills <u className="imp">(undergraduate)</u>. My expertise spans
          <u className="imp">JavaScript, ReactJS, Next.js, TailwindCSS, Bootstrap, SQL, and more </u>,
          enabling me to create responsive and efficient web applications. With a
          passion for coding and a commitment to excellence, <u className="imp">I'm dedicated to
          turning your ideas into reality and ensuring that everything meets the
          highest standards.</u>
        </p>
        <div className="btn_div">
        <button className="landing_btn">Hire Me</button>
        <button className="landing_btn">See My Work</button>
        </div>
        
      </div>

      <div className="cover">
        <img className="cover_img" src={img} alt="Landing" />
      </div>
    </div>
  );
};

export default Landingpage;
