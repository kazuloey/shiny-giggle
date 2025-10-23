// Update the date and time display
function updateDateTime() {
  const now = new Date();
  const formattedDateTime = now.toISOString().slice(0, 19).replace('T', ' ');
  
  // Update the date-time display
  const dateTimeElement = document.getElementById('current-datetime');
  if (dateTimeElement) {
    dateTimeElement.textContent = formattedDateTime;
  }
  
  // Update the clock in the header
  const clockElement = document.getElementById('clock');
  if (clockElement) {
    const hours = now.getHours();
    const minutes = now.getMinutes();
    clockElement.textContent = `${hours} ${minutes < 10 ? '0' : ''}${minutes}`;
  }
  
  // Update every second
  setTimeout(updateDateTime, 1000);
}

// Start the clock when the document is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateDateTime();
});