import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Testimonial from "./Testimonial";
import Contact from "./Contact";

const Layout = () => {
  return (
    <div className="app">
      <Home />
      <Categories />
      <About />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Layout;
