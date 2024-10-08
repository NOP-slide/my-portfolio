/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"

import Header from "./header"

const Layout = ({ children }) => {
  return (
    <>
      <div className="relative flex flex-col min-h-screen antialiased fill-available">
        <Header />
        <div>
          <main className="flex flex-col flex-1 bg-brand-blue">
            {children}
          </main>
        </div>
      </div>
    </>
  )
}

export default Layout
