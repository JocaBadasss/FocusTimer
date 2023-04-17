const play = document.querySelector(".play")
const pause = document.querySelector(".pause")
const stop = document.querySelector(".stop")
const plus5 = document.querySelector(".plus5")
const minus5 = document.querySelector(".minus5")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")
let countDownStatus

play.addEventListener("click", countDown)

function countDown() {
  countDownStatus = setTimeout(() => {
    let second = Number(seconds.textContent)

    seconds.textContent = second - 1

    countDown()
  }, 1000)
}
