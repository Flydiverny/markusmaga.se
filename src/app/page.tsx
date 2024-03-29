"use client"

import React, { useEffect, useState } from "react"
import { a, useTrail } from "@react-spring/web"
import { Pixelify_Sans } from "next/font/google"
// import { Alfa_Slab_One } from 'next/font/google'
// import { Patua_One } from 'next/font/google'
import { Mate } from "next/font/google"
import "./globals.css"
import { useTimeout } from "usehooks-ts"

const inter = Pixelify_Sans({ subsets: ["latin"], weight: ["400", "700"] })
const mateIt = Mate({ subsets: ["latin"], style: "normal", weight: ["400"] })

const items = ["M", "a", "r", "k", "u", "s", "\u00a0", "M", "a", "g", "a"]

const Name = () => {
  const [open, set] = useState(false)
  const trails = useTrail(items.length, {
    from: { opacity: 0, x: 20, y: 40},
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    y: open ? 0 : 80,
    config: { mass: open ? 8 : 4, tension: 3500, friction: open ? 200 : 200},
  })

  useEffect(() => {
    set(true)
  }, [])

  useTimeout(() => {
    set(true)
  }, open ? null : 400)

  return (
    <h1 className={inter.className} onClick={() => set(!open)}>
      {trails.map((style, index) => (
        <a.span key={index} style={{ ...style, transform: style.y.to(y => `translate3d(0,${y}px,0)`)}}>
          {items[index]}
        </a.span>
      ))}
    </h1>
  )
}

const Header = () => {

  return (
    <div className={"wrapper"}>
      <Name />
      <div className={`links ${mateIt.className}`}>
        <div className="link">
          <a href="https://github.com/Flydiverny">github</a>
        </div>
        <div className="link">
          <a href="https://linkedin.com/in/markusmaga">linkedin</a>
        </div>
        <div className="link">
          <a href="https://stackoverflow.com/users/598962/markus-maga">
            stackoverflow
          </a>
        </div>
        <div className="link">
          <a href="mailto:contact@markusmaga.se">email</a>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return <Header />
}
