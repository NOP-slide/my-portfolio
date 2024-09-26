import * as React from "react"
import Typewriter from "./typewriter"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => (
  <header>
    <div className="w-full pt-12 text-center patternBg">
      <Typewriter />
      <div className="relative mt-6">
        <StaticImage
          quality={95}
          loading={"eager"}
          src="../images/me2.png"
          placeholder="blurred"
          alt={"Photo of me"}
          className={`w-32 h-32 md:w-48 md:h-48`}
        />
      </div>
    </div>
  </header>
)

export default Header
