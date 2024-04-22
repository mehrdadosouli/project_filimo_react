import React from 'react'
import Menu from './menu/Menu'
import Main from "./Main/Main"
import Popular from './popular/Popular'
import HowToUse from './howToUse/HowToUse'
import FreeSection from './freeSection/FreeSection'
import ChildrenSection from './ChildrenSection/ChildrenSection'
import OnlineCinema from './onlineCinema/OnlineCinema'
export default function MainApp() {
  return (
    <>
        <Menu />
        <Main />
        <Popular />
        <HowToUse />
        <FreeSection />
        <ChildrenSection />
        <OnlineCinema />
    </>
  )
}
