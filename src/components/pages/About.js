import React from "react";
import '../../styles/About.css';
import Me from "../../utils/images/me.png"

function About() {
  return (
    <div className="section-name-format">
      <h2>About Me</h2>
      <img className="image-format" src={Me} alt="Matthew Kaye" />
      <div className="text-container">
        <p className="body-content-format">My name is Matthew Kaye. I was born in 1997 and grew up in the town of Cortlandt Manor, New York. From a young age, I was always very interested in computers and electronics. Although I knew that I had such an interest, it wouldn't be until a later age that I determined to strive to begin a career in coding and software development.</p>
        <p className="body-content-format">In my young adult life, I had two main hobbies that I had prioritized in my life. The first, was my commitment to the Boy Scouts of America. Scouting provided me so many tools to succeed, including my ability to see a project through from start to end, survival, and life skills. It also prepared me for the real world and exercised my ability to think flexibly and problem solve. My scouting experience spanned approximately eleven years before I earned the rank of Eagle Scout in 2014.</p>
        <p className="body-content-format">My second passion was for martial arts. In 2007, I began training in Tae-Kwon-Do. The instructors at my school were always so supportive and played a major part in my maturing from a child to a young adult. After training for approximately five years, I attained the rank of black belt and soon after became an assistant instructor for the school. Two years later, I became a second-degree black belt as well. Unfortunately, after a few more years, the school was forced to shut down, however, this did not stop my curiosity about what I was capable of. I continued training on my own and eventually branched out to other styles of martial arts, including boxing, muay thai, and jiu-jitsu.</p>
        <p className="body-content-format">In 2015, I graduated from Walter Panas High School, and decided to attend Binghamton University. In my time there, I had considered focusing my studies in a number of areas, from Chemistry to Actuarial Science, having a particular interest in phyical sciences. In taking many classes in different fields, a passion for statistics and data science was sparked. It was then I decided to pursue a major of Economics with a specialization in Financial Analysis. After graduating from Bingahtmon in the winter of 2019, I began working for RXR Realty in New York City as a Tenant Services Coordinator.</p>
        <p className="body-content-format">Over the next few years I debated taking a different path in my career and enhancing my knowledge of technology. After some time I came to my decision, and enrolled in Columbia's Coding Bootcamp for Full Stack developers. Since the day I made this decision I have never looked back, and feel as though I truly have something to contribute to this community.</p>
      </div>
    </div>
  )
};

export default About;