import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { FaRedhat } from "react-icons/fa"

const IndexPage = () => {
  const [isBorderAnimating, setIsBorderAnimating] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => setIsBorderAnimating(true), 3000)
  }, [])

  return (
    <Layout>
      <div className="w-full h-full max-w-5xl min-h-screen px-6 mx-auto">
        <h2 className="mt-12 text-2xl font-bold text-center text-white md:text-3xl">
          If You Can Dream It, I Can Build It.
        </h2>
        <h3 className="mt-4 text-xl text-center text-white md:text-2xl">
          Simply Put: I Create Business Assets That{" "}
          <span className="italic underline">Increase Your Bottom Line.</span>
        </h3>
        <div className="relative mt-12 rounded-lg image-glow">
          <StaticImage
            quality={95}
            src="../images/truthinyourstars.jpg"
            placeholder="blurred"
            alt={"truthinyourstars screenshot"}
            imgStyle={{ objectFit: "fill" }}
            className={`rounded-lg`}
          />
          {isBorderAnimating && (
            <>
              <div className="top-edge" />
              <div className="right-edge" />
              <div className="bottom-edge" />
              <div className="left-edge" />
            </>
          )}
          <a
            className="absolute px-4 py-2 text-sm text-white duration-200 ease-in-out rounded-lg hover:scale-110 bg-brand-pink md:text-base bottom-3 right-3 button-glow"
            href="https://www.thetruthinyourstars.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Site
          </a>
        </div>
        <div className="relative mt-12 rounded-lg image-glow">
          <StaticImage
            quality={95}
            src="../images/phelpsiemusic.jpg"
            placeholder="blurred"
            alt={"phelpsiemusic screenshot"}
            imgStyle={{ objectFit: "fill" }}
            className={`rounded-lg`}
          />
          {isBorderAnimating && (
            <>
              <div className="top-edge" />
              <div className="right-edge" />
              <div className="bottom-edge" />
              <div className="left-edge" />
            </>
          )}
          <a
            className="absolute px-4 py-2 text-sm text-white duration-200 ease-in-out rounded-lg hover:scale-110 bg-brand-pink md:text-base bottom-3 right-3 button-glow"
            href="https://www.phelpsiemusic.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Live Site
          </a>
        </div>
        <div className="w-1/2 h-[1px] mx-auto mt-12 md:mt-24 bg-white" />
        <p className="mt-4 text-lg text-center text-white md:mt-12 md:text-2xl">
          The 2 projects above were both designed and developed by me.
          <br />
          They are{" "}
          <span className="italic">
            fully automated, profitable businesses.
          </span>
        </p>
        <div className="w-1/2 h-[1px] mx-auto mt-4 md:mt-12 bg-white" />
        <p className="mt-4 text-base text-center text-white md:mt-12">
          Of course, I also have no trouble building websites designed by
          others. The following sites were built with React + Gatsby, based on
          Figma designs provided by PD Digital, an Australian web agency where I
          worked for over 4 years.
        </p>
        <div className="grid grid-cols-1 grid-rows-1 gap-6 mt-12 md:grid-cols-2 md:grid-rows-2">
          <div className="relative rounded-lg image-glow">
            <StaticImage
              quality={95}
              src="../images/hallidays.jpg"
              placeholder="blurred"
              alt={"hallidays screenshot"}
              imgStyle={{ objectFit: "fill" }}
              className={`rounded-lg`}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25" />
            <a
              className="absolute px-4 py-2 text-sm text-white duration-200 ease-in-out rounded-lg hover:scale-110 bg-brand-pink md:text-base bottom-3 right-3 button-glow"
              href="https://www.hallidayspointtavern.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Site
            </a>
          </div>
          <div className="relative rounded-lg image-glow">
            <StaticImage
              quality={95}
              src="../images/portcity.jpg"
              placeholder="blurred"
              alt={"portcity screenshot"}
              imgStyle={{ objectFit: "fill" }}
              className={`rounded-lg`}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25" />
            <a
              className="absolute px-4 py-2 text-sm text-white duration-200 ease-in-out rounded-lg hover:scale-110 bg-brand-pink md:text-base bottom-3 right-3 button-glow"
              href="https://www.portcity.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Site
            </a>
          </div>
          <div className="relative rounded-lg image-glow">
            {" "}
            <StaticImage
              quality={95}
              src="../images/nxtlvlfit.jpg"
              placeholder="blurred"
              alt={"nxtlvlfit screenshot"}
              imgStyle={{ objectFit: "fill" }}
              className={`rounded-lg`}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25" />
            <a
              className="absolute px-4 py-2 text-sm text-white duration-200 ease-in-out rounded-lg hover:scale-110 bg-brand-pink md:text-base bottom-3 right-3 button-glow"
              href="https://www.nxtlvlfit.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Site
            </a>
          </div>
          <div className="relative rounded-lg image-glow">
            <StaticImage
              quality={95}
              src="../images/frontline.jpg"
              placeholder="blurred"
              alt={"frontline screenshot"}
              imgStyle={{ objectFit: "fill" }}
              className={`rounded-lg`}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25" />
            <a
              className="absolute px-4 py-2 text-sm text-white duration-200 ease-in-out rounded-lg hover:scale-110 bg-brand-pink md:text-base bottom-3 right-3 button-glow"
              href="https://www.frontlineremovals.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live Site
            </a>
          </div>
        </div>
        <div className="w-1/2 h-[1px] mx-auto mt-12 md:mt-24 bg-white" />
        <div className="mt-6 text-xl font-bold text-center text-white md:mt-12 md:text-2xl">
          The (Many) Other Hats I Wear{" "}
          <FaRedhat className="inline-block w-8 h-8 text-brand-pink" />
        </div>
        <div className="mt-6 text-center text-white">
          You know how it is with startups - a web developer has to do so much
          more than just write code. Here are a few of the extra roles I took on
          during my time with PD Digital:
        </div>
        <p className="text-xl text-center text-white mt-96">
          Impressed? Arrange an interview, and in the first 30 seconds I will
          prove I'm worth your time.
          <br />
          Nothing to lose - everything to gain. I'll see you there :)
        </p>
      </div>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
