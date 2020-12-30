/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Flippy, { FrontSide, BackSide } from "react-flippy"
import Layout from "../components/layout/Layout"
import SEO from "src/components/common/seo"
import SkillImage from "src/components/common/Image"
import Card from 'src/components/ui/Card';

interface ISkillNode {
  node: {
    id: string
    label: string
    backgroundImage: string
    description: string
    tags: string[]
  }
}

interface IProps {
  data: {
    allSkillsJson: {
      edges: ISkillNode[]
    }
  }
}

const SkillPage = ({ data }: IProps) => {
  const skills = data.allSkillsJson.edges
  const tags: string[] = []

  skills.map((skillNode) => {
    const _skillTags = skillNode.node.tags
    _skillTags.forEach((_t) => {
      if (!tags.includes(_t)) {
        tags.push(_t)
      }
    })
  })

  const initSelectedTagsState: { [key: string]: boolean } = {}
  tags.forEach((_t) => {
    initSelectedTagsState[_t] = true
  })

  const [selectedTags, setSelectedTags] = useState(initSelectedTagsState)

  const tagItems = tags.map((_t) => {
    return (
      <div className="tag-span form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id={`tag-${_t}`}
          checked={selectedTags[_t]}
          onChange={() =>
            setSelectedTags({
              ...selectedTags,
              [_t]: !selectedTags[_t],
            })
          }
        />
        <label
          className="form-check-label"
          htmlFor={`tag-${_t}`}
          sx={{
            color: `heading`,
          }}
        >
          {_t}
        </label>
      </div>
    )
  })

  const skillItems = skills.map((skillNode) => {
    const _sNode = skillNode.node

    const _tags = _sNode.tags

    let _isShown = false

    _tags.forEach((_t) => {
      if (selectedTags[_t]) {
        _isShown = true
      }
    })

    if (!_isShown) {
      return null
    }

    const _frontSide = _sNode.backgroundImage ? (
      <SkillImage
        path={`skills/${_sNode.backgroundImage}`}
        alt={`${_sNode.label}`}
      />
    ) : (
      <h4 className="d-flex justify-content-center align-items-center text-center">
        {`${_sNode.label.toUpperCase()}`}
      </h4>
    )

    return (
      <div className="col-xl-3 col-lg-4 col-sm-6 col-12 flipy-col">
        <Card image={/>
        <div style={{ display: "none" }}>
          <Flippy
            flipOnHover={true} // default false
            flipOnClick={false} // default false
            flipDirection="horizontal" // horizontal or vertical
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{
              width: "250px",
              height: "250px",
            }} /// these are optional style, it is not necessary
          >
            <FrontSide
              sx={{
                backgroundColor: `primary`,
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.5rem",
              }}
            >
              {_frontSide}
            </FrontSide>
            <BackSide style={{ backgroundColor: "#ddd" }}>
              <h5>{_sNode.label}</h5>
              <p>{_sNode.description}</p>
            </BackSide>
          </Flippy>
        </div>
      </div>
    )
  })

  return (
    <Layout>
      <SEO title="Skills" />
      <div className="row row-skills-tags form-inline">{tagItems}</div>
      <div className="row row-skills">{skillItems}</div>
    </Layout>
  )
}

export default SkillPage

export const projectsQuery = graphql`
  query {
    allSkillsJson {
      edges {
        node {
          id
          label
          backgroundImage
          description
          tags
        }
      }
    }
  }
`
