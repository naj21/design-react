/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const  {site}  = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const metaKeywords = site.siteMetadata.keywords

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `keywords`,
          content: metaKeywords,
        },
      ].concat(meta)}
    />
  )
}

export const site  = 
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author
            keywords
          }
        }
        allContentfulLink {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    `

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  keywords: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
}

export default SEO
