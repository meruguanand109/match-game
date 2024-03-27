import './index.css'

const WinOrLossCard = props => {
  const {scoreDetails, onClickPlayAgain} = props
  const onPlayAgain = () => {
    onClickPlayAgain()
  }
  const {score} = scoreDetails
  return (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
        className="trophy-img"
      />
      <p className="result-text">YOUR SCORE</p>
      <h1 className="result-score">{score}</h1>
      <button className="play-btn" onClick={onPlayAgain}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
          alt="reset"
          className="reset-img"
        />
        PLAY AGAIN
      </button>
    </div>
  )
}

export default WinOrLossCard
