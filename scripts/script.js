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
    btn.disabled = true;
    btn.classList.add('opacity-20');

    const tasks = document.getElementById('tasks');
    const taskValue = parseInt(tasks.innerText);

    taskValue > 1
      ? (tasks.innerText = Math.max(0, taskValue - 1))
      : (tasks.innerText = '');

    const item = document.getElementById('item');
    const itemvalue = parseInt(item.innerText);

    item.innerText = Math.max(0, itemvalue + 1);
  });
}
