import './index.css'

const MatchItem = props => {
  const {ImageDetails, onClickImage} = props
  const {thumbnailUrl, id} = ImageDetails
  const onImage = () => {
    onClickImage(id)
  }
  return (
    <li className="image-item">
      <button className="match-btn" onClick={onImage}>
        <img src={thumbnailUrl} alt="thumbnail" className="match-img" />
      </button>
    </li>
  )
}

export default MatchItem
