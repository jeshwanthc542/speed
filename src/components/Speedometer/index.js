import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  Accelerate = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  brake = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state

    return (
      <div className="bg-container" alt="speedometer">
        <h1 className="head">SpeedoMeter</h1>
        <p className="para1">Speed is {speed}</p>
        <p className="para2">min limit is 0mph and max limit is 200mph</p>
        <button className="button1" onClick={this.Accelerate} type="button">
          Accelerate
        </button>
        <button className="button2" onClick={this.brake} type="button">
          Apply brake
        </button>
      </div>
    )
  }
}

export default Speedometer
