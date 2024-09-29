import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { FaRedhat } from "react-icons/fa"
import { FaDiamond } from "react-icons/fa6"

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
            View Site
          </a>
        </div>

        <div className="mt-6 text-white md:mt-12">
          <p className="">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Custom affiliate and payment platform integration
          </p>
          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Automated PDF generator and order fulfillment system
          </p>
          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" /> Email
            marketing platform API integration
          </p>
          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Custom serverless event listener API for automated post-purchase
            actions
          </p>
          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" /> Meta
            pixel conversions API set up for perfect tracking accuracy
          </p>
          {/* <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Heavily optimized for conversions, with multiple iterations and
            careful analysis of user screen recordings
          </p> */}
          <p className="mt-3">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" /> Coded
            from scratch with React, Gatsby, and Tailwind. Hosted on Netlify
          </p>
          <p className="mt-3">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Currently in talks with investors
          </p>
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
          <div className="absolute flex gap-3 bottom-3 right-3">
            <a
              className="px-4 py-2 text-sm text-white duration-200 ease-in-out rounded-lg hover:scale-110 bg-brand-pink md:text-base button-glow"
              href="https://github.com/NOP-slide/phelpsiemusic.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Repo
            </a>
            <a
              className="px-4 py-2 text-sm text-white duration-200 ease-in-out rounded-lg hover:scale-110 bg-brand-pink md:text-base button-glow"
              href="https://www.phelpsiemusic.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site
            </a>
          </div>
        </div>
        <div className="mt-6 text-white md:mt-12">
          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Custom Stripe integration for monthly subscription product
          </p>

          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Credit card pre-authorization and validity checking
          </p>

          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Custom audio player, cart, and product upsell system
          </p>

          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" /> Fully
            personalized "welcome back" page for abandoned carts
          </p>

          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Connected via API to email marketing platform
          </p>

          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Custom event listener API for automated post-purchase actions
          </p>
          <p className="mt-3 ">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" /> Music
            composed and produced by me. That's my other hobby
          </p>
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
        <p className="mt-4 text-base text-white md:text-center md:mt-12">
          Of course, I also have no trouble building websites designed by
          others. The following sites were built with React, Gatsby and
          Tailwind, based on Figma designs provided by PD Digital, an Australian
          web agency where I worked for over 4 years.
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
              View Site
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
              View Site
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
              View Site
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
              View Site
            </a>
          </div>
        </div>
        <div className="w-1/2 h-[1px] mx-auto mt-12 md:mt-24 bg-white" />
        <div className="mt-6 text-xl font-bold text-center text-white md:mt-12 md:text-2xl">
          The (Many) Other Hats I've Worn{" "}
          <FaRedhat className="inline-block w-8 h-8 text-brand-pink" />
        </div>
        <div className="mt-6 text-white md:text-center">
          You know how it is with startups - a web developer has to do so much
          more than just write code. Here are a few of the extra roles I took on
          during my time with PD Digital:
        </div>
        <div className="mt-6 text-white md:mt-12">
          <p className="font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" /> CRM
            Setup and workflow automation
          </p>
          <p className="ml-5">
            Hands-on experience with Zoho CRM, Pipedrive, and Hubspot, including
            development with the Zoho API
          </p>
          <p className="mt-3 font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Hosting and domain management
          </p>
          <p className="ml-5">
            Extensive experience launching sites on Netlify and Siteground,
            transferring domains and managing DNS records
          </p>
          <p className="mt-3 font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Conversion rate optimization
          </p>
          <p className="ml-5">
            Every image, heading, and word of a site's copy has purpose, and
            this page is no exception
          </p>
          <p className="mt-3 font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Digital marketing
          </p>
          <p className="ml-5">
            Hands-on experience with Google PPC and Facebook ads, and their
            integration into websites
          </p>
          <p className="mt-3 font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" /> SEO
          </p>
          <p className="ml-5">
            Familiar with on-site search engine optimization, keyword blogging,
            and backlink outreach
          </p>
          <p className="mt-3 font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Ecommerce
          </p>
          <p className="ml-5">
            Hands-on experience developing headless Shopify applications
          </p>
          <p className="mt-3 font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" /> Team
            communications and scheduling
          </p>
          <p className="ml-5">
            Extensive experience with GitHub, Slack, Freshdesk, Asana, and
            Monday
          </p>
          <p className="mt-3 font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Customer support
          </p>
          <p className="ml-5">
            Making calls with clients and explaining technical concepts in
            simple terms, while maintaining respect and professionalism
          </p>
          <p className="mt-3 font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" />{" "}
            Self-motivation and resourcefulness
          </p>
          <p className="ml-5">
            With over 4 years of remote work experience, and plenty of creative
            solutions under my belt, you can trust me to get the job done
          </p>
          <p className="mt-3 font-bold">
            <FaDiamond className="inline-block w-3 h-3 text-brand-pink" /> Rapid
            learning
          </p>
          <p className="ml-5">
            My #1 skill as a business asset. I have no issue diving deep into
            tech I've never seen before, and quickly upskilling
          </p>
        </div>
        <div className="w-1/2 h-[1px] mx-auto mt-12 md:mt-24 bg-white" />
        <p className="my-12 text-lg text-center text-white md:text-xl">
          Impressed? Arrange an interview, and in the first 30 seconds I will
          prove I'm worth your time.
          <br />
          <br />
          Warm regards,
          <br />
          Andrew
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
export const Head = () => <Seo title="Andrew Phelps" />

export default IndexPage
