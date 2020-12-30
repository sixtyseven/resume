/** @jsx jsx */
import { jsx } from "theme-ui"
import Image from "src/components/common/Image"
import styles from "./index.module.scss"

interface IProps {
  imagePath: string
  title: string
  description: string
}

const Card = ({ imagePath, title, description }: IProps) => {
  const mainContent = imagePath ? (
    <Image path={imagePath} alt={title} />
  ) : (
    <h4 className={styles.mainTitle}>{title}</h4>
  )

  return (
    <div className={styles.cardContainer} sx={{ backgroundColor: `primary` }}>
      <div className={styles.mainContent}>{mainContent}</div>
      <div className={styles.mask}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  )
}

export default Card
