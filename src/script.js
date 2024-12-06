// Select the clock element
const clockElement = document.getElementById("clock");

function updateClock() {
  const now = new Date();

  // Get hours, minutes, seconds
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Determine AM or PM
  const amPm = hours >= 12 ? "PM" : "AM";

  // Convert hours to 12-hour format
  hours = hours % 12 || 12;

  // Format time with leading zeros
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")} ${amPm}`;

  // Update clock element
  clockElement.textContent = formattedTime;
}

// Update clock every second
setInterval(updateClock, 1000);

// Initialize clock
updateClock();

