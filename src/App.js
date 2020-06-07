import React, { Component } from 'react'

class App extends React.Component {
  state = {
    hue: Math.ceil(Math.random(0) * 360),
    saturation: Math.ceil(Math.random(0) * 100),
    lightness: Math.ceil(Math.random(0) * 100),
  }
  changeHue = e => {
    this.setState({ hue: e.target.value })
  }
  changeSaturation = e => {
    this.setState({ saturation: e.target.value })
  }
  changeLightness = e => {
    this.setState({ lightness: e.target.value })
  }
  randomColor = () => {
    const hueRandom = Math.ceil(Math.random(0) * 360)
    const satRandom = Math.ceil(Math.random(0) * 100)
    const lightRandom = Math.ceil(Math.random(0) * 100)
    this.setState({
      hue: hueRandom,
      saturation: satRandom,
      lightness: lightRandom,
    })
  }
  changeBackground = () => {}
  render() {
    const background = `hsl( ${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}% )`
    console.log(background)
    return (
      <article>
        <header>
          <h1>Color Picker</h1>
          <p>By</p>
          <p> Kamari Ross</p>
        </header>
        <section class="sliders">
          <section>
            <section
              class="HueSlider"
              style={{
                backgroundColor: `hsl(${this.state.hue},100%,50%)`,
              }}
            >
              <label for="Hue">Hue</label>
              <input
                type="range"
                onChange={this.changeHue}
                id="Hue"
                name="Hue"
                min="0"
                max="360"
                value={this.state.hue}
              ></input>
              <label for="Hue">{this.state.hue}</label>
            </section>
          </section>
          <section>
            <section
              class="SaturationSlider"
              style={{
                backgroundColor: `hsl(360,${this.state.saturation}%,50%)`,
              }}
            >
              <label for="Saturation">Saturation</label>
              <input
                onChange={this.changeSaturation}
                type="range"
                id="Saturation"
                name="Saturation"
                min="0"
                max="100"
                value={this.state.saturation}
              ></input>
              <label for="Saturation">{this.state.saturation}</label>
            </section>
          </section>
          <section>
            <section
              class="LightnessSlider"
              style={{
                backgroundColor: `hsl(360,100%,${this.state.lightness}% )`,
              }}
            >
              <label for="Lightness">Lightness</label>
              <input
                onChange={this.changeLightness}
                type="range"
                id="Lightness"
                name="Lightness"
                min="0"
                max="100"
                value={this.state.lightness}
              ></input>
              <label for="lightness">{this.state.lightness}</label>
            </section>
          </section>
          <section>
            <p style={{ backgroundColor: background }}>
              hsl({this.state.hue}, {this.state.saturation}%,{' '}
              {this.state.lightness}%)
            </p>
          </section>
          <section class="button">
            <button onClick={this.randomColor}>RandomGenerator</button>
          </section>
        </section>
        \{' '}
      </article>
    )
  }
}

export default App
