import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./events.js"
import Sounds from "./sounds.js"

let controls = Controls({})
let timer = Timer({ controls })
let sounds = Sounds({})
let event = Events({
  controls,
  timer,
  sounds,
})





event.Play()

event.Pause()

event.Stop()

event.Plus5()

event.Minus5()

event.SoundOn()

event.SoundOff()

event.FlorestDisplayChange()

event.RainDisplayChange()

event.CoffeShopDisplayChange()

event.FireplaceDisplayChange()
