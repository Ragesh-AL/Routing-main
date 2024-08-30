import { useState } from "react";
import NavbarFilter from "./component/NavbarFilter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllImage from "./component/AllImage";
import FullStackDevelopment from "./component/FullStackDevelopment";
import DataScience from "./component/DataScience";
import CyberSecurity from "./component/CyberSecurity";
import Carrer from "./component/Carrer";

import {
  bestFullStackDevelopment,
  fullStackDevelopment2,
  fullStackDevelopment3,
  fullStackDevelopment4,
  fullStackDevelopment5,
  fullStackDevelopment6,
  dataScience1,
  dataScience2,
  dataScience3,
  dataScience4,
  dataScience5,
  dataScience6,
  cyberSecurity1,
  cybersecuity2,
  cybersecuity3,
  cybersecuity4,
  cybersecuity5,
  cybersecuity6,
  deveops1,
  deveops2,
  deveops3,
  deveops4,
  deveops5,
  deveops6,
} from "../public/assets/image";

function App() {
  const AllData = [
    {
      id: 2,
      title: "How Long Would It Take to Be a Full Stack Developer? ",
      image: fullStackDevelopment2,
    },
    {
      id: 7,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      image: dataScience1,
    },

    {
      id: 8,
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      image: dataScience2,
    },

    {
      id: 10,
      title: "Top Product-Based Companies for Data Scientists in 2024",
      image: dataScience4,
    },
    {
      id: 14,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      image: cybersecuity2,
    },
    {
      id: 15,
      title: "What Is Hacking? Types of Hacking",
      image: cybersecuity3,
    },
    {
      id: 19,
      title: "10 Best DevOps Project Ideas for 2024",
      image: deveops1,
    },


    {
      id: 22,
      title: "Top 16 Product-Based Companies for DevOps Engineers in India",
      image: deveops4,
    },
  ];
  const fullStackDevelopment = [


    {
      id: 2,
      title: "How Long Would It Take to Be a Full Stack Developer? ",
      image: fullStackDevelopment2,
    },

  ];

  const dataScience = [
    {
      id: 1,
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      image: dataScience1,
    },

    {
      id: 2,
      title: "12 Real-World Data Science Examples: Power Of Data Science",
      image: dataScience2,
    },

    {
      id: 4,
      title: "Top Product-Based Companies for Data Scientists in 2024",
      image: dataScience4,
    },

  ];

  const cyberSecurity = [

    {
      id: 2,
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      image: cybersecuity2,
    },
    {
      id: 3,
      title: "What Is Hacking? Types of Hacking",
      image: cybersecuity3,
    },

  ];

  const deveops = [
    {
      id: 1,
      title: "10 Best DevOps Project Ideas for 2024",
      image: deveops1,
    },
    {
      id: 3,
      title: "How Long Will It Take to Learn DevOps?",
      image: deveops3,
    },

  ];
  return (
    <>
      <BrowserRouter>
        <NavbarFilter></NavbarFilter>
        <Routes>
          <Route
            exact
            path="/"
            element={<AllImage AllData={AllData}></AllImage>}
          ></Route>
          <Route
            path="fullStackDevelopment"
            element={
              <FullStackDevelopment
                fullStackDevelopment={fullStackDevelopment}
              ></FullStackDevelopment>
            }
          ></Route>
          <Route
            path="dataScience"
            element={<DataScience dataScienceData={dataScience}></DataScience>}
          ></Route>
          <Route
            path="cyberSecurity"
            element={
              <CyberSecurity cyberSecurityData={cyberSecurity}></CyberSecurity>
            }
          ></Route>
          <Route
            path="carrer"
            element={<Carrer deveops={deveops}></Carrer>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
