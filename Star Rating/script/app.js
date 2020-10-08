const showRating = function (ratingInputs, ratingValue) {
  for (let ratingInput of ratingInputs) {
    ratingInput.classList.remove('active-star');
    if (ratingInput.value < ratingValue) {
      ratingInput.classList.add('active-star');
    }
  }
};

const listenToRatingInputs = function (ratingInputs) {
  for (let ratingInput of ratingInputs) {
    ratingInput.addEventListener('change', () => showRating(ratingInputs, ratingInput.value));
  }
};

const getDomElements = function () {
  const ratingInputs = document.querySelectorAll('.js-rating-input');
  listenToRatingInputs(ratingInputs);
};

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded! 🥳');
  getDomElements();
});
