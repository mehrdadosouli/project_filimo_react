import React from 'react'
import Menu from './menu/Menu'
import Main from "./Main/Main"
import Popular from './popular/Popular'
import HowToUse from './howToUse/HowToUse'
export default function MainApp() {
  return (
    <>
        <Menu />
        <Main />
        <Popular />
        <HowToUse />
    </>
  )
}
