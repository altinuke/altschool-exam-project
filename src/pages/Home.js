import {Link} from 'react-router-dom';
import tinu from "../images/tinu.jpg";
const Home = () => {
  return (
    <>
      <section>
        <div className="title"> Welcome</div>
        <div className="home-content">
          <div className="paragraph">
            This website is my Examination project for AltSchool Africa, School
            of Engineering. In this Project, I fetch my Github repositories with
            the necessary tools of react. React hooks such as useState,
            useEffect, useNavigate and useParams were used. On the Portfolio
            page, I made use of Pagination. ErrorBoundary was created to draw
            out the errors and 404 page was built to catch an unavailable page.{" "}
            <br />
            <div>
              <button className="cta"> <Link to='about'>Learn More </Link></button>
            </div>
          </div>
          <div className="atinuke">
            <img src={tinu} alt="atinuke" />
          </div>
        </div>
      </section>
      <div className="bottom-content">
        <h3> Get in touch</h3>
        <p>
          Would be glad to hear from you! We could collaborate on a project. But
          if you would like to say hello, that's totally welcome. Drop me a line
          or two <a href="mailto:hatinukewaleawe@gmail.com" target='_blank'> <strong><em>here</em></strong>. </a>
        </p>
      </div>
      <div className="home-footer">
        <div className="footer-item">
          <strong> Altinuke </strong> © 2022, All Rights Reserved{" "}
        </div>
        <div className="footer-item">
          <strong>Contact</strong>
          <br /> hello.thetinuke@gmail.com
        </div>
        <div className="footer-item">
          <strong> Connect</strong> <br /> Instagram <br /> Linkedin <br />{" "}
          Twitter
        </div>
      </div>
    </>
  );
};

export default Home;
