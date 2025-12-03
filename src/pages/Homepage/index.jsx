import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "../../layout/Header";
import Main from "../../layout/Main";
import Footer from "../../layout/Footer";
import IconLink from "../../components/IconLink";

const Homepage = () => {
  const studentsData = [
    { notes: [12, 11, 10], name: "Alan" },
    { notes: [18, 10], name: "Alice" },
    { notes: [10, 9, 11], name: "Bernard" },
    { notes: [11, 17, 19], name: "Sophie" },
  ];

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
      <Main students={studentsData} />
      <Footer />
    </>
  );
};

export default Homepage;
