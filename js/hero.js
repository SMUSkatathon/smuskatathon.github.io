// Set the date we're counting down to
var countDownDate = new Date("Sep 10, 2023 07:00:00 GMT+0800").getTime();

// Update the countdown every 1 second
var x = setInterval(function () {

  // Get the current date and time
  var now = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Singapore" })).getTime();

  // Find the distance between now and the countdown date
  var distance = countDownDate - now;

  // Calculate days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the countdown is finished, display dashes
  if (distance < 0) {
    try {
      fire(0.25, {
        spread: 26,
        startVelocity: 55,
      });
      fire(0.2, {
        spread: 60,
      });
      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });
      fire(0.1, {
        spread: 120,
        startVelocity: 45,
      });
    } catch (error) {
      console.warn('Confetti Script stopped working: ' + error);
    }

    clearInterval(x);

    document.getElementById("countdown-container").innerHTML = "Let's Roll!";
    document.getElementById("countdown-container").classList.add("expired");
    document.getElementById("countdown-container").classList.add("text-light");
  }
}, 1000);

var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}
