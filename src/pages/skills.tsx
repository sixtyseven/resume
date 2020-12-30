/** @jsx jsx */
import { useState } from "react"
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/layout/Layout"
import SEO from "src/components/common/seo"
import Card from "src/components/ui/Card"

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

    return (
      <div className="col-xl-3 col-lg-4 col-sm-6 col-12 flipy-col">
        <Card
          imagePath={
            _sNode.backgroundImage ? `skills/${_sNode.backgroundImage}` : ""
          }
          title={_sNode.label}
          description={_sNode.description}
        />
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
