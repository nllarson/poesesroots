import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './bootstrap.min.css'
import './navbar.css'

import logo from './pr-brand.png'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: "Poese's Roots Landscaping" },
        {
          name: 'keywords',
          content:
            'landscaping, lincoln, nebraska, omaha, retaining walls, patios, concrete, plants, decks',
        },
      ]}
    />
    <Navbar siteTitle={data.site.siteMetadata.title} logo={logo} />
    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
