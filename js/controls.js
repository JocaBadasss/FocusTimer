import {
  playDisplay,
  pauseDisplay,
  florestDisplay,
  rainDisplay,
  coffeShopDisplay,
  fireplaceDisplay,
  soundOnDisplay,
  soundOffDisplay,
} from "./variables.js"

export default function Controls() {
  function play() {
    playDisplay.classList.add("hide")
    pauseDisplay.classList.remove("hide")
  }
  function pause() {
    playDisplay.classList.remove("hide")
    pauseDisplay.classList.add("hide")
  }
  function stop() {
    playDisplay.classList.remove("hide")
    pauseDisplay.classList.add("hide")
  }

  function changeToSoundOff() {
    soundOnDisplay.classList.add("hide")
    soundOffDisplay.classList.remove("hide")
  }

  function changeToSoundOn() {
    soundOnDisplay.classList.remove("hide")
    soundOffDisplay.classList.add("hide")
  }

  function soundDisplayChange(soundDisplay) {
    let florestDisplayOn = florestDisplay.classList
    let rainDisplayOn = rainDisplay.classList
    let coffeShopDisplayOn = coffeShopDisplay.classList
    let fireplaceDisplayOn = fireplaceDisplay.classList

    switch (soundDisplay) {
      case (soundDisplay = florestDisplay):
        florestDisplayOn.add("on")
        rainDisplayOn.remove("on")
        coffeShopDisplayOn.remove("on")
        fireplaceDisplayOn.remove("on")
        break

      case (soundDisplay = rainDisplay):
        florestDisplayOn.remove("on")
        rainDisplayOn.add("on")
        coffeShopDisplayOn.remove("on")
        fireplaceDisplayOn.remove("on")
        break
      case (soundDisplay = coffeShopDisplay):
        florestDisplayOn.remove("on")
        rainDisplayOn.remove("on")
        coffeShopDisplayOn.add("on")
        fireplaceDisplayOn.remove("on")
        break

      case (soundDisplay = fireplaceDisplay):
        florestDisplayOn.remove("on")
        rainDisplayOn.remove("on")
        coffeShopDisplayOn.remove("on")
        fireplaceDisplayOn.add("on")
        break
    }
  }

  return {
    play,
    pause,
    stop,
    soundDisplayChange,
    changeToSoundOff,
    changeToSoundOn,
  }
}
