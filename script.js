const nextDom = document.querySelector(".next");
const prevDom = document.querySelector(".prev");
const listAllItems = document.querySelector(".carousel .lists");
const thumbnailAllItems = document.querySelector(".carousel .thumbnail");

nextDom.onclick = function () {
  changeNextPosition("next");
};
prevDom.onclick = function () {
  changeNextPosition("prev");
};

let KillNextTimeRun;
let KillPrevTimeRun;
function changeNextPosition(type) {
  const allItems = listAllItems.querySelectorAll(".item");
  const allThumbnailItem = thumbnailAllItems.querySelectorAll(".item");
  const carouselDom = document.querySelector(".carousel");
  if (type === "next") {
    listAllItems.appendChild(allItems[0]);
    thumbnailAllItems.appendChild(allThumbnailItem[0]);
    carouselDom.classList.add("next");
  } else {
    const positionLastItem = allThumbnailItem.length - 1;
    listAllItems.prepend(allItems[positionLastItem]);
    thumbnailAllItems.prepend(allThumbnailItem[positionLastItem]);
    carouselDom.classList.add("prev");
  }
  clearTimeout(KillNextTimeRun);
  KillNextTimeRun = setTimeout(() => {
    carouselDom.classList.remove("next");
    carouselDom.classList.remove("prev");
  }, 3000);
}
