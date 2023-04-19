import {
  florestDisplay,
  rainDisplay,
  coffeShopDisplay,
  fireplaceDisplay,
} from "./variables.js"

export default function Sounds() {
  const florestSoundAudio = new Audio(
    "https://github.com/JocaBadasss/Audios/blob/main/BackgroundSounds/Florest.wav?raw=true"
  )

  const rainSoundAudio = new Audio(
    "https://github.com/JocaBadasss/Audios/blob/main/BackgroundSounds/Rain.wav?raw=true"
  )

  const coffeShopAudio = new Audio(
    "https://github.com/JocaBadasss/Audios/blob/main/BackgroundSounds/CoffeShop.wav?raw=true"
  )

  const fireplaceAudio = new Audio(
    "https://github.com/JocaBadasss/Audios/blob/main/BackgroundSounds/Fireplace.wav?raw=true"
  )

  let ambientDisplayOn

  function playInLoop() {
    florestSoundAudio.loop = true
    rainSoundAudio.loop = true
    coffeShopAudio.loop = true
    fireplaceAudio.loop = true
  }

  playInLoop()

  function MuteAll() {
    florestSoundAudio.muted = true
    rainSoundAudio.muted = true
    coffeShopAudio.muted = true
    fireplaceAudio.muted = true
  }
  MuteAll()

  function whichSoundDisplayIsOn() {
    let ambients = [
      florestDisplay,
      rainDisplay,
      coffeShopDisplay,
      fireplaceDisplay,
    ]
    for (let ambient of ambients) {
      if (ambient.classList.contains("on")) {
        ambientDisplayOn = ambient
      }
    }
  }

  function firstPlay() {
    whichSoundDisplayIsOn()
    switch (ambientDisplayOn) {
      case (ambientDisplayOn = florestDisplay):
        FlorestPlay()
        break
      case (ambientDisplayOn = rainDisplay):
        RainPlay()
        break
      case (ambientDisplayOn = coffeShopDisplay):
        CoffeeShopPlay()
        break
      case (ambientDisplayOn = fireplaceDisplay):
        FireplacePlay()
    }
    Unmute()
  }

  function Unmute() {
    florestSoundAudio.muted = false
    rainSoundAudio.muted = false
    coffeShopAudio.muted = false
    fireplaceAudio.muted = false
  }

  function StopOthersSounds(soundName) {
    switch (soundName) {
      case "Florest":
        RainStop()
        CoffeeShopStop()
        FireplaceStop()

      case "Rain":
        FlorestStop()
        CoffeeShopStop()
        FireplaceStop()
        break
      case "CoffeeShop":
        FlorestStop()
        RainStop()
        FireplaceStop()
        break
      case "Fireplace":
        FlorestStop()
        RainStop()
        CoffeeShopStop()
        break
      default:
        console.log("afff")
    }
  }

  function StopAll() {
    FlorestStop()
    RainStop()
    CoffeeShopStop()
    FireplaceStop()
    MuteAll()
  }

  function FlorestPlay() {
    florestSoundAudio.play()
  }

  function FlorestStop() {
    florestSoundAudio.pause()
  }

  function RainPlay() {
    rainSoundAudio.play()
  }
  function RainStop() {
    rainSoundAudio.pause()
  }

  function CoffeeShopPlay() {
    coffeShopAudio.play()
  }
  function CoffeeShopStop() {
    coffeShopAudio.pause()
  }

  function FireplacePlay() {
    fireplaceAudio.play()
  }
  function FireplaceStop() {
    fireplaceAudio.pause()
  }

  return {
    FlorestPlay,
    RainPlay,
    CoffeeShopPlay,
    FireplacePlay,
    FlorestStop,
    RainStop,
    CoffeeShopStop,
    FireplaceStop,
    firstPlay,
    StopAll,
    Unmute,
    MuteAll,
    StopOthersSounds,
  }
}
