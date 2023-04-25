import {
  florestDisplay,
  rainDisplay,
  coffeShopDisplay,
  fireplaceDisplay,
  florestVolDisplay,
  rainVolDisplay,
  coffeShopVolDisplay,
  fireplaceVolDisplay,
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

  function startOnVolZero() {
    florestSoundAudio.volume = 0
    rainSoundAudio.volume = 0
    coffeShopAudio.volume = 0
    fireplaceAudio.volume = 0
  }
  startOnVolZero()

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
        if (florestVolDisplay.value == "0.00001") {
          florestSoundAudio.volume = 0.5
          florestVolDisplay.value = 0.5
        }
        break
      case (ambientDisplayOn = rainDisplay):
        RainPlay()
        if (rainVolDisplay.value == "0.00001") {
          rainSoundAudio.volume = 0.5
          rainVolDisplay.value = 0.5
        }
        break
      case (ambientDisplayOn = coffeShopDisplay):
        CoffeeShopPlay()
        if (coffeShopVolDisplay.value == "0.00001") {
          coffeShopAudio.volume = 0.5
          coffeShopVolDisplay.value = 0.5
        }
        break
      case (ambientDisplayOn = fireplaceDisplay):
        FireplacePlay()
        if (fireplaceVolDisplay.value == "0.00001") {
          fireplaceAudio.volume = 0.5
          fireplaceVolDisplay.value = 0.5
        }
    }
    Unmute()
  }

  function Unmute() {
    florestSoundAudio.muted = false
    rainSoundAudio.muted = false
    coffeShopAudio.muted = false
    fireplaceAudio.muted = false
  }

  function ChangeSoundVolume(soundName) {
    switch (soundName) {
      case "Florest":
        florestSoundAudio.volume = florestVolDisplay.value
        break
      case "Rain":
        rainSoundAudio.volume = rainVolDisplay.value
        break
      case "CoffeeShop":
        coffeShopAudio.volume = coffeShopVolDisplay.value
        break
      case "Fireplace":
        fireplaceAudio.volume = fireplaceVolDisplay.value
        break
      default:
        console.log("afff")
    }
  }

  console.log(florestVolDisplay.value)

  function ChangeSoundVolumeToFifty(soundName) {
    switch (soundName) {
      case "Florest":
        if (florestVolDisplay.value == "0.00001") {
          florestSoundAudio.volume = 0.5
          florestVolDisplay.value = 0.5
        }
        break
      case "Rain":
        if (rainVolDisplay.value == "0.00001") {
          rainSoundAudio.volume = 0.5
          rainVolDisplay.value = 0.5
        }
        break
      case "CoffeeShop":
        if (coffeShopVolDisplay.value == "0.00001") {
          coffeShopAudio.volume = 0.5
          coffeShopVolDisplay.value = 0.5
        }
        break
      case "Fireplace":
        if (fireplaceVolDisplay.value == "0.00001") {
          fireplaceAudio.volume = 0.5
          fireplaceVolDisplay.value = 0.5
        }
        break
      default:
        console.log("afff")
    }
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
    ChangeSoundVolume,
    ChangeSoundVolumeToFifty,
  }
}
