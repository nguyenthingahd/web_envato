var hideAll = function () {
  var contents = document.querySelectorAll(".tab-content>div");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
};
document.body.onload = function () {
  hideAll();
  document.querySelector(".tab-content>div:first-child").style.display =
    "block";
  var tabs = document.querySelectorAll(".tab-menu>a");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].onclick = function () {
      hideAll();
      var content = document.querySelector(".tab-content>.content-" + this.id);
      content.style.display = "block";
    };
  }
};

const allHoverImages = document.querySelectorAll(".hover-container div img");
const imgContainer = document.querySelector(".img-container");

window.addEventListener("DOMContentLoaded", () => {
  allHoverImages[0].parentElement.classList.add("active");
});

allHoverImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    imgContainer.querySelector("img").src = image.src;
    resetActiveImg();
    image.parentElement.classList.add("active");
  });
});

function resetActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}
