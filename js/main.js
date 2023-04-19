import Timer from "./timer.js"
import Controls from "./controls.js"
import Events from "./events.js"

let controls = Controls({})
let timer = Timer({ controls })
let event = Events({
  controls,
  timer,
})

const florestSoundAudio = new Audio(
  "https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view"
)

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
