//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'


import Header from "./components/Header";
import Body from "./components/Body";
import React from "react"


export default function App() {
  const [count, setCount] = React.useState(0)
  



  return (
    <>
    <Header />
    <Body />
    </>
  )
}
