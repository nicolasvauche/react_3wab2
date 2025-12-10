import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import Footer from "../../layout/Footer";
import IconLink from "../../components/IconLink";
import Students from "../../components/Students";
import Clock from "../../components/Clock";
import studentsData from "../../data/students.json";

const Homepage = () => {
  return (
    <>
      <div className="app-top">
        <IconLink
          linkUrl="https://vite.dev"
          iconSrc={viteLogo}
          iconClass="logo"
          iconAlt="Vite logo"
        />

        <IconLink
          linkUrl="https://react.dev"
          iconSrc={reactLogo}
          iconClass="logo react"
          iconAlt="React logo"
        />
      </div>

      <Header />
      <Main>
        <Clock />
        <Students students={studentsData} />
      </Main>
      <Footer />
    </>
  );
};

export default Homepage;
