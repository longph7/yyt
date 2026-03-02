import styles from './Card.module.css'

function Card({ title, children, className }) {
  const cardClasses = className
    ? `card ${styles.card} ${className}`
    : `card ${styles.card}`

  return (
    <div className={cardClasses}>
      {title && <div className={`card-header ${styles.cardTitle}`}>{title}</div>}
      <div className={`card-body ${styles.cardContent}`}>{children}</div>
    </div>
  )
}

export default Card
