const submitForm = (e) => {
  e.preventDefault();
  const ratings = document.getElementsByName("rating");
  const selected = Array.from(ratings).find((radio) => radio.checked);
  if (selected) {
    const feedbackDiv = document.getElementById("feedback");
    const thankYouDiv = document.getElementById("thank-you");
    const userRating = document.getElementById("user-rating");

    feedbackDiv.classList.add("hidden");
    thankYouDiv.classList.remove("hidden");
    userRating.innerHTML = selected.value;
  } else {
    alert("no rating selected");
  }
};

window.onload = () => {
  const form = document.querySelector("#rating-form");
  form.reset();
  form.addEventListener("submit", (e) => {
    submitForm(e);
  });
};
