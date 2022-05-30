import './index.css'

const DestinationItem = props => {
  const {userDetails, key} = props
  const {imgUrl, name, id} = userDetails

  return (
    <li className="user-card-container">
      <img src={imgUrl} alt={name} />
      <p>{name}</p>
    </li>
  )
}

export default DestinationItem
