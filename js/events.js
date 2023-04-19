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

export default function Events({ controls, timer, sounds }) {
  let rainSoundAudio
  function Play() {
    playDisplay.addEventListener("click", () => {
      controls.play()
      timer.countDown()
      sounds.firstPlay()
    })
  }

  function Pause() {
    pauseDisplay.addEventListener("click", () => {
      controls.pause()
      timer.hold()
      sounds.StopAll()
    })
  }

  function Stop() {
    stopDisplay.addEventListener("click", () => {
      controls.stop()
      timer.hold()
      timer.reset()
      sounds.StopAll()
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
      sounds.MuteAll()
    })
  }

  function SoundOn() {
    soundOffDisplay.addEventListener("click", () => {
      controls.changeToSoundOn()
      sounds.Unmute()
    })
  }

  function FlorestDisplayChange() {
    florestDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(florestDisplay)
      sounds.StopOthersSounds("Florest")
      sounds.FlorestPlay()
    })
  }

  function RainDisplayChange() {
    rainDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(rainDisplay)
      sounds.StopOthersSounds("Rain")
      sounds.RainPlay()
    })
  }

  function CoffeShopDisplayChange() {
    coffeShopDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(coffeShopDisplay)
      sounds.StopOthersSounds("CoffeeShop")
      sounds.CoffeeShopPlay()
    })
  }

  function FireplaceDisplayChange() {
    fireplaceDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(fireplaceDisplay)
      sounds.StopOthersSounds("Fireplace")
      sounds.FireplacePlay()
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
