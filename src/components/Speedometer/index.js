import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onAcc = () =>
    this.setState(prevState =>
      prevState.speed >= 190 ? {speed: 200} : {speed: prevState.speed + 10},
    )

  onBrake = () =>
    this.setState(prevState =>
      prevState.speed <= 10 ? {speed: 0} : {speed: prevState.speed - 10},
    )

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h2 className="heading">SPEEDOMETER</h2>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="meter">Speed is {speed}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button-acc" onClick={this.onAcc}>
            Accelerate
          </button>
          <button className="button-brake" onClick={this.onBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
