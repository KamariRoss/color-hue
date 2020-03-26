// import React, { Component } from 'react'
// import HelloWorld from './components/HelloWorld'
// class App extends Component {
//   state = {
//     hue: Math.round(Math.random() * 360),
//     saturation: Math.round(Math.random() * 100),
//     light: Math.round(Math.random() * 100),
//     value: Math.round(Math.random() * 100),
//   }
//   changeHue = e => {
//     this.setState({
//       hue: e.target.value,
//     })
//     console.log(e.target.value)
//   }
//   changeSaturation = e => {
//     this.setState({
//       saturation: e.target.value,
//     })
//   }
//   changeLight = e => {
//     this.setState({
//       light: e.target.value,
//     })
//   }
//   render() {
//     const newColor = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.light}%)`
//     console.log(newColor)
//     return (
//       <div class="grid-container">
//         <div class="header">Color Picker</div>
//         <div class="property">H</div>
//         <div class="slidecontainer">
//           <input
//             type="range"
//             min="1"
//             max="360"
//             onChange={this.changeHue}
//             value={this.state.hue}
//             class="slider"
//           />
//         </div>
//       </div>
//     )
//   }
// }
// export default App
