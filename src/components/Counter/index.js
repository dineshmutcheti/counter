import {Component} from 'react'
import './index.css'

class Counter extends Component {
  state = {count : 0}
  onIncrement = () => {
    this.setState((pervState) => {
        console.log(`previous state count is ${pervState.count}`)
        return {count: pervState.count+1}
    })
  }
  onDecrement = () => {
    this.setState((pervState) => {
      return {count: pervState.count - 1}
    })
  }

  render() {
    const {count} = this.state
    return (
      <div className="counter">
        <h1 className="heading">Counetr</h1>
        <p className="count"> {count}</p>
        <div>
          <button className="button" onClick={this.onIncrement}>
            Increase
          </button>
          <button className="button" onClick = {this.onDecrement}>Decrease</button>
        </div>
      </div>
    )
  }
}

export default Counter
