import React, { useEffect } from "react";
import Menu from "../components/menu/Menu";
import Main from "../components/Main/Main";
import Popular from "../components/popular/Popular";
import HowToUse from "../components/howToUse/HowToUse";
import FreeSection from "../components/freeSection/FreeSection";
import ChildrenSection from "../components/ChildrenSection/ChildrenSection";
import OnlineCinema from "../components/onlineCinema/OnlineCinema";
import Footer from "../components/footer/Footer";
import './mainApp.css'
export default function MainApp() {

  return (
    <div style={{backgroundColor:'rgb(21, 21, 21)',color:'white'}}>
      <Menu />
      <Main />
      <Popular />
      <HowToUse />
      <FreeSection />
      <ChildrenSection />
      <OnlineCinema />
      <Footer />
    </div>
  );
}
