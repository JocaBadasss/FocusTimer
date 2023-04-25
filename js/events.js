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
  lightModeButton,
  darkModeButton,
  florestVolDisplay,
  rainVolDisplay,
  coffeShopVolDisplay,
  fireplaceVolDisplay,
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
      sounds.ChangeSoundVolumeToFifty("Florest")
    })
  }

  function RainDisplayChange() {
    rainDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(rainDisplay)
      sounds.StopOthersSounds("Rain")
      sounds.RainPlay()
      sounds.ChangeSoundVolumeToFifty("Rain")
    })
  }

  function CoffeShopDisplayChange() {
    coffeShopDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(coffeShopDisplay)
      sounds.StopOthersSounds("CoffeeShop")
      sounds.CoffeeShopPlay()
      sounds.ChangeSoundVolumeToFifty("CoffeeShop")
    })
  }

  function FireplaceDisplayChange() {
    fireplaceDisplay.addEventListener("click", () => {
      controls.soundDisplayChange(fireplaceDisplay)
      sounds.StopOthersSounds("Fireplace")
      sounds.FireplacePlay()
      sounds.ChangeSoundVolumeToFifty("Fireplace")
    })
  }

  function FlorestVolumeChange() {
    florestVolDisplay.addEventListener("click", () => {
      sounds.ChangeSoundVolume("Florest")
    })
  }

  function RainVolumeChange() {
    rainVolDisplay.addEventListener("click", () => {
      sounds.ChangeSoundVolume("Rain")
    })
  }

  function CoffeShopVolumeChange() {
    coffeShopVolDisplay.addEventListener("click", () => {
      sounds.ChangeSoundVolume("CoffeeShop")
    })
  }

  function FireplaceVolumeChange() {
    fireplaceVolDisplay.addEventListener("click", () => {
      sounds.ChangeSoundVolume("Fireplace")
    })
  }

  function DarkModeOn() {
    lightModeButton.addEventListener("click", () => {
      controls.changeToDarkMode()
    })
  }

  function LightModeOn() {
    darkModeButton.addEventListener("click", () => {
      controls.changeToLightMode()
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
    LightModeOn,
    DarkModeOn,
    FlorestVolumeChange,
    RainVolumeChange,
    CoffeShopVolumeChange,
    FireplaceVolumeChange,
  }
}
