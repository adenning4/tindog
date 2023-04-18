import dogs from "./data.js";
import Dog from "./Dog.js";

let isWaiting = false;

function getNewDog() {
  const nextDogData = dogs.shift();
  return nextDogData ? new Dog(nextDogData) : null;
}

function setLikeStatus(dog, likeOrDislike) {
  if (!isWaiting) {
    dog.hasBeenSwiped = true;
    dog.hasBeenLiked = likeOrDislike === "like";
    isWaiting = true;
    render();
    currentDog = getNewDog();
    if (currentDog) {
      setTimeout(() => {
        render();
        isWaiting = false;
      }, 1500);
    }
  }
}

function render() {
  document.querySelector("main").innerHTML = currentDog.getProfileHtml();
  document.querySelector(
    ".prospect"
  ).style.backgroundImage = `url(${currentDog.avatar})`;
}

let currentDog = getNewDog();
render();

document.addEventListener("click", function (e) {
  console.log(e.target.parentElement);
  if (e.target.classList.contains("button")) {
    setLikeStatus(currentDog, e.target.dataset.likeOrDislike);
  }
  if (e.target.parentElement.classList.contains("button")) {
    setLikeStatus(currentDog, e.target.parentElement.dataset.likeOrDislike);
  }
});
