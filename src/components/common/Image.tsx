import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React, { useMemo } from "react"

interface IProps {
  path: string;
  alt: string;
}

const Image = ({ path, alt }: IProps) => {
  const data = useStaticQuery(graphql`
    query {
      allFile( filter: { internal: { mediaType: { regex: "images/" } } } ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const match = useMemo(() => (
    data.allFile.edges.find(({ node }: any) => path === node.relativePath)
  ), [data, path])

  return (
    <Img
      fluid={match.node.childImageSharp.fluid}
      alt={alt}
    />
  )
}

export default Image