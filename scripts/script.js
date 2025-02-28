// get current day
function getCurrentDay() {
  const date = new Date();

  const day = date.toLocaleDateString('en-US', { weekday: 'short' });
  return day;
}

// get current date
function getCurrentDate() {
  const date = new Date();

  const rest = date
    .toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    })
    .replace(',', '');
  return rest;
}

const day = getCurrentDay();
const date = getCurrentDate();

document.getElementById('current-day').innerText = day;
document.getElementById('current-date').innerText = date;

// -------------------------------------------------------- //
const btnPrimary = document.querySelectorAll('.btn-primary');

for (const btn of btnPrimary) {
  btn.addEventListener('click', e => {
    alert('Board Updated Successfully');

    btn.disabled = true;
    btn.style.backgroundColor = 'gray';
    btn.style.cursor = 'not-allowed';
    btn.classList.add('opacity-50');

    const tasks = document.getElementById('tasks');
    const taskValue = parseInt(tasks.innerText);

    taskValue > 1
      ? (tasks.innerText = Math.max(0, taskValue - 1))
      : ((tasks.innerText = ''),
        alert('Congrates!!! You have completed all the current task'));

    const item = document.getElementById('item');
    const itemvalue = parseInt(item.innerText);

    item.innerText = Math.max(0, itemvalue + 1);

    // add activity log
    const activityContainer = document.getElementById('activity-container');
    const activityTitle =
      btn.parentElement.parentElement.querySelector('h2').innerText;

    const p = document.createElement('p');
    p.classList.add(
      'rounded-lg',
      'text-sm',
      'p-2',
      'text-gray-800',
      'bg-[var(--clr-bg)]'
    );

    // get current time
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;

    p.innerText = `You have completed the tasks for ${activityTitle} at ${timeString}`;
    activityContainer.appendChild(p);
  });
}

// clear activity logs
const btnClearActivity = document.getElementById('clear-activity');
btnClearActivity.addEventListener('click', () => {
  const activityContainer = document.getElementById('activity-container');
  activityContainer.innerHTML = '';
});

// color switcher
function getRandomHexColor() {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
  );
}

document.getElementById('clr-switcher').addEventListener('click', () => {
  document.body.style.backgroundColor = getRandomHexColor();
});

// --------------------------------------------------
const ellipsis = document.querySelectorAll('.block-ellipsis');
for (const elp of ellipsis) {
  elp.addEventListener('click', () => {
    for (const ep of ellipsis) {
      ep.style.overflow = 'hidden';
    }
    elp.style.overflow = 'auto';
  });
}
