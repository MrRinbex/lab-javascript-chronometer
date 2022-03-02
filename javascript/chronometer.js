class Chronometer {
  constructor() {
    this.currentTime =  0;
    this.intervalId = null
  }

  start(callback) {
    this.intervalId = setInterval(()=> {
      this.currentTime++
      if(callback){
        callback()
      }
    }, 1000)
  }

  getMinutes() {
    return Math.floor(this.currentTime/60)
  }

  getSeconds() {
    return Math.floor(this.currentTime % 60)
  }

  computeTwoDigitNumber(value) {
    let numToStr = value.toString();
    return numToStr.length === 1 ? `0${numToStr}` : `${numToStr}`
  }

  stop() {
    return clearInterval(this.intervalId)
  }

  reset() {

   return this.currentTime = 0
  }

  split() {
    let min = this.computeTwoDigitNumber(this.getMinutes())
    let sec = this.computeTwoDigitNumber(this.getSeconds())
    return `${min}:${sec}`

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
