import github from "../images/github.PNG";
const About = () => {
  return (
    <section>
      <div className="about-container">
        <h1 className="title">About</h1>
        <p className="about">
          This is my Second semester exam for Altschool Africa, School of
          Engineering. The project entails fetching my Github repositories and
          linking each of them using nested routes.
        </p>
      </div>
      <img src={github} alt="github" className="git" />
    </section>
  );
};

export default About;
