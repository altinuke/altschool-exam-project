import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <section>
      <h1 className="title"> 404 </h1>
      <p className="title"> Oops...Page not found </p>
      <NavLink to="/"> Back Home </NavLink>
    </section>
  );
};

export default Error;
