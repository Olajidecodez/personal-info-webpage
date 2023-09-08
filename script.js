document.addEventListener('DOMContentLoaded', function() {

  const slackDisplayImage = document.getElementById('slackDisplayImage');
  slackDisplayImage.src = 'Olajide.jpg';
  slackDisplayImage.alt = 'Olajide_';

  const slackUserName = document.getElementById('slackUserName');
  slackUserName.textContent = 'Olajide_';

  const currentDayOfTheWeek = document.getElementById('currentDayOfTheWeek');
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  currentDayOfTheWeek.textContent = daysOfWeek[dayIndex];
  
  function updateUTCTime() {
  const currentUTCTime = document.getElementById('currentUTCTime');
  const utcMilliseconds = Date.now();
  currentUTCTime.textContent = utcMilliseconds;
  }

  updateUTCTime();
  setInterval(updateUTCTime, 1000);

  const myTrack = document.getElementById('myTrack');
  myTrack.textContent = 'Frontend';

  const githubURL = document.getElementById('githubURL');
  githubURL.href = 'https://github.com/Olajidecodez/personal-info-webpage';

});
