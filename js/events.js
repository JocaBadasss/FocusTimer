import {
  playDisplay,
  pauseDisplay,
  stopDisplay,
  plus5Display,
  minus5Display,
  florestDisplay,
  rainDisplay,
  coffeShopDisplay,
  fireplaceDisplay,
  soundOnDisplay,
  soundOffDisplay,
} from "./variables.js"

export default function Events({ controls, timer }) {
  function Play() {
    playDisplay.addEventListener("click", () => {
      controls.play()
      timer.countDown()
    })
  }

  function Pause() {
    pauseDisplay.addEventListener("click", () => {
      controls.pause()
      timer.hold()
    })
  }

  function Stop() {
    stopDisplay.addEventListener("click", () => {
      controls.stop()
      timer.hold()
      timer.reset()
    })
  }

  function Plus5() {
    plus5Display.addEventListener("click", () => {
      timer.plusOrMinus("+")
    })
  }

  function Minus5() {
    minus5Display.addEventListener("click", () => {
      timer.plusOrMinus("-")
    })
  }

  function SoundOff() {
    soundOnDisplay.addEventListener("click", () => {
      controls.changeToSoundOff()
    })
  }

  function SoundOn() {
    soundOffDisplay.addEventListener("click", () => {
      controls.changeToSoundOn()
    })
  }

  function FlorestDisplayChange() {
    florestDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(florestDisplay)
    })
  }

  function RainDisplayChange() {
    rainDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(rainDisplay)
    })
  }

  function CoffeShopDisplayChange() {
    coffeShopDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(coffeShopDisplay)
    })
  }

  function FireplaceDisplayChange() {
    fireplaceDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(fireplaceDisplay)
    })
  }

  return {
    Play,
    Pause,
    Stop,
    Plus5,
    Minus5,
    FlorestDisplayChange,
    RainDisplayChange,
    CoffeShopDisplayChange,
    FireplaceDisplayChange,
    SoundOn,
    SoundOff,
  }
}
