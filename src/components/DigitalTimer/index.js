import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  state = {timer: 25 * 60, isPaused: true}

  changeTimerState = () =>
    this.setState(prevState => ({isPaused: !prevState.isPaused}))

  tick = () => this.setState(prevState => ({timer: prevState.timer - 1}))

  render() {
    const {timer, isPaused} = this.state
    const min = Math.floor(timer / 60)
    const sec = timer % 60
    let pauseStartUrl
    let pauseStartText
    let pauseStartAlt

    if (isPaused) {
      pauseStartUrl =
        'https://assets.ccbp.in/frontend/react-js/play-icon-img.png'
      pauseStartText = 'Start'
      pauseStartAlt = 'play icon'
    } else {
      pauseStartUrl =
        'https://assets.ccbp.in/frontend/react-js/pause-icon-img.png'
      pauseStartText = 'Pause'
      pauseStartAlt = 'pause icon'
    }

    return (
      <div className="bg-container">
        <h1 className="main-heading">Digital Timer</h1>
        <div className="content-wrapper">
          <div className="timer-container">
            <div className="white-circle">
              <p className="timer-text">{`${min}:${sec}`}</p>
              <p className="timer-state">{isPaused ? 'Paused' : 'Running'}</p>
            </div>
          </div>

          <div className="controllers-wrapper">
            <div className="timer-controls">
              <span className="start-pause-container">
                <button
                  type="button"
                  className="state-controller"
                  onClick={this.changeTimerState}
                >
                  <img src={pauseStartUrl} alt={pauseStartAlt} />
                </button>
                <p className="start-pause-text">{pauseStartText}</p>
              </span>
              <span className="reset-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt="reset icon"
                />
                <p className="reset-text">Reset</p>
              </span>
            </div>
            <p className="timer-limit-text">Set Timer limit</p>
            <div>
              <button className="minus-btn" type="button">
                -
              </button>
              <p className="timer-limit">25</p>
              <button className="plus-btn" type="button">
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
