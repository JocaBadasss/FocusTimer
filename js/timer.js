export default function Timer({ controls }) {
  let countDownStatus
  let minutes = document.querySelector(".minutes")
  let seconds = document.querySelector(".seconds")
  let newMinutes

  function countDown() {
    countDownStatus = setTimeout(() => {
      let minute = Number(minutes.textContent)
      let second = Number(seconds.textContent)
      let isMinutesOver = minute <= 0
      let isSecondsOver = second <= 0

      if (isMinutesOver && isSecondsOver) {
        newMinutes
          ? (minutes.textContent = String(newMinutes).padStart(2, 0))
          : (minutes.textContent = 25)
        controls.stop()

        return
      }

      updateTimer(minute, second - 1)

      if (isSecondsOver) {
        updateTimer(minute - 1, 59)
      }

      countDown()
    }, 1000)
  }

  function updateTimer(min, sec) {
    minutes.textContent = String(min).padStart(2, 0)
    seconds.textContent = String(sec).padStart(2, 0)
  }

  function reset() {
    updateTimer(newMinutes || 25, 0)
  }

  function hold() {
    clearTimeout(countDownStatus)
  }

  function plusOrMinus(operator) {
    let minute = Number(minutes.textContent)
    let second = Number(seconds.textContent)

    if (operator == "+") {
      newMinutes = minute + 5
      updateTimer(newMinutes, second)
    }
    if (operator == "-" && minute > 0) {
      newMinutes = minute - 5
      updateTimer(newMinutes, second)
    }
  }

  return { countDown, reset, hold, plusOrMinus }
}
