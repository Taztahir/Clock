<!-- <div class="text-center">
        <div class="text-4xl md:text-6xl font-bold mb-4" id="clock">00:00:00 AM</div>
        <select id="timezone" class="mt-4 p-2 bg-gray-700 text-white rounded">
        <option value="local">Local Time</option>
        <option value="UTC">UTC</option>
        <option value="America/New_York">New York (EST)</option>
        <option value="Europe/London">London (GMT)</option>
        <option value="Asia/Kolkata">India (IST)</option>
        <option value="Asia/Tokyo">Tokyo (JST)</option>
        </select>
    </div> -->







// const clockElement = document.getElementById('clock');
// const timezoneSelect = document.getElementById('timezone');

// function updateClock() {
//   const timezone = timezoneSelect.value;
//   let now;

//   if (timezone === 'local') {
//     now = new Date();
//   } else {
//     now = new Date(new Date().toLocaleString('en-US', { timeZone: timezone }));
//   }

//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   const ampm = hours >= 12 ? 'PM' : 'AM';

//   const displayHours = hours % 12 || 12;
//   const formattedTime = `${String(displayHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${ampm}`;

//   clockElement.textContent = formattedTime;
// }

// // Update clock every second
// setInterval(updateClock, 1000);

// // Initial clock update
// updateClock();

// // Change timezone on selection
// timezoneSelect.addEventListener('change', updateClock);
