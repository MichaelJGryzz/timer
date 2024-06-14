// Read command line arguments ignoring node and script name (the first 2)
const providedArgs = process.argv.slice(2);

// Initialize empty array for provided times
const times = [];

// Loop through provided arguments and convert each to a number
// filter out negative numbers and not numbers
for (let i = 0; i < providedArgs.length; i++) {
  const num = Number(providedArgs[i]);
  if (!isNaN(num) && num > 0) {
    times.push(num);
  }
}

// function that sets a timeout for each provided alarm time
const setAlarm = function(time) {
  setTimeout(() => {
    process.stdout.write("\x07"); // Provided beep sound code from Compass
    console.log(`Beeped after ${time} seconds.`);
  }, time * 1000); // Convert given time in seconds to milliseconds
}

// function to set alarms for provided times
times.forEach(function(time) {
  setAlarm(time);
});