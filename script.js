document.addEventListener('DOMContentLoaded', function() {

  const slackUserName = document.getElementById('slackUserName');
  slackUserName.textContent = 'Olajide_';

  const slackDisplayImage = document.getElementById('slackDisplayImage');
  slackDisplayImage.src = 'Olajide.jpg';
  slackDisplayImage.alt = 'Olajide_';

  const currentDayOfTheWeek = document.getElementById('currentDayOfTheWeek');
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  currentDayOfTheWeek.textContent = daysOfWeek[dayIndex];
})