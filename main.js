"use strict";

const award = document.querySelector(".award__images");

award.addEventListener("click", () => {
  document.querySelector(".award").remove();
});
const btnClickVideo = document.querySelector("#content__btn2");
const video = document.querySelector("#content__video");
function openVideo () {
  video.play();
}
btnClickVideo.addEventListener('click', () => {
  openVideo();
})