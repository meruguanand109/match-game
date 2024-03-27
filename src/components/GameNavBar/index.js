import './index.css'

const GameNavBar = props => {
  const {scoreDetails} = props
  const {score, timer} = scoreDetails
  return (
    <nav className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="status-container">
        <li>
          <p className="score-p">Score: </p>
          <h1 className="score-num"> {score}</h1>
        </li>
        <li>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
            alt="timer"
            className="timer-img"
          />
          <p className="timer">{timer} sec</p>
        </li>
      </ul>
    </nav>
  )
}

export default GameNavBar
