const users = [
  {
    id: 167464,
    firstName: 'Jimmy',
    lastName: 'Arnold',
  },
  {
    id: 578447,
    firstName: 'Martha',
    lastName: 'Goldman',
  },
  {
    id: 864578,
    firstName: 'Tim',
    lastName: 'Burton',
  },
];

// 2 Setup a Target Element

const container = document.querySelector('.container');

// 3 Creating an Ordered List

const olEl = document.createElement('ol');

olEl.style.listStyleType = 'none';

console.log(olEl);

// 4 + 5 Looping through Users and Creating and Appending List Items
users.forEach((el) => {
  let liEl = document.createElement('li');
  liEl.setAttribute('data-id', el.id);
  liEl.textContent = el.firstName + ' ' + el.lastName;
  olEl.append(liEl);
});

console.log(olEl);

container.append(olEl);
