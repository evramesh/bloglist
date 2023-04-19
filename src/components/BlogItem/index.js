import './index.css'

const ItemList = props => {
  const {send} = props
  const {id, title, description, publishedDate} = send
  return (
    <li className="li">
      <h1>{title}</h1>
      <p className="back">{publishedDate}</p>
      <p>{description}</p>
    </li>
  )
}

export default ItemList
