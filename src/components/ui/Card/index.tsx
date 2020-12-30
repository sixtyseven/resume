import React from "react"
import SkillImage from "src/components/common/Image"

interface IProps {
  image: String;
}

const Card = (props: IProps) => {

  return <div className="card">
    <SkillImage className="image" src={`${props.image}`} />
    <div className="mask">
      <h2 className="title">Bubbles</h2>
      <p className="description"></p>
    </div>
  </div>
}

export default Card;
