// 1
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
//   2
  const target=document.querySelector('.container');
//   3
  const olEl=document.createElement('ol');
  olEl.style.listStyleType = 'none';
// 4
users.forEach (el => {
    const liEl=document.createElement('li');
    liEl.setAttribute('data.id',el.id);
    liEl.textContent=(`${el.firstName} ${el.lastName}`);
    olEl.append(liEl);
});
target.append(olEl);



