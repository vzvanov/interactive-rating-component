
let RATING = undefined;
const numbers = document.querySelector('.rating__numbers');
numbers.onclick = (e) => {
  const element = e.target;
  RATING = getRating(element);
  if (!RATING) return;
  removeAllActive(numbers);
  setActive(element);
}

const getRating = (element) => {
  if (element.classList.contains('one')) { return 1 };
  if (element.classList.contains('two')) { return 2 };
  if (element.classList.contains('three')) { return 3 };
  if (element.classList.contains('four')) { return 4 };
  if (element.classList.contains('five')) { return 5 };
  return undefined;
}

const removeAllActive = (numbers) => {
  const items = numbers.querySelectorAll('.rating__number');
  items.forEach(element => {
    removeActive(element);
  });
}

const removeActive = (element) => {
  element.classList.remove('active');
}

const setActive = (element) => {
  element.classList.add('active');
}

const thank = document.querySelector('.thank');
const ratingForm = document.querySelector('form');
ratingForm.onsubmit = (e) => {
  e.preventDefault();
  if (!RATING) return;
  const ratingElement = thank.querySelector('.thank__rating');
  ratingElement.innerHTML = `You selected ${RATING} out of 5`;
  ratingForm.style.display = 'none';
  thank.style.display = 'flex';
}
