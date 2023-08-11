const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
  },
];
const container = document.querySelector(".container");
const olEl = document.createElement("ol");
olEl.style.listStyle = "none";
container.appendChild(olEl);

users.forEach((el) => {
  const liEl = document.createElement("li");
  liEl.setAttribute("data-id", el.id);
  liEl.textContent = el.firstName + " " + el.lastName;
  olEl.append(liEl);
});
