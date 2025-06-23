/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function topNavFunc() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// 1) List out all your page filenames in order:
const pages = [
  'img/firstcomic/In_Another_Lifetime_Page_1.png',
  'img/firstcomic/In_Another_Lifetime_Page_2.png',
  'img/firstcomic/In_Another_Lifetime_Page_3.png',
  // …add as many as you have (WIP)
];

// 2) Track where you are:
let currentPage = 0;

// 3) Grab the <img> once:
const comicImage = document.getElementById('comicImage');

// 4) A helper to show the right page:
function updateImage() {
  comicImage.src = pages[currentPage];
}

// 5) Next / Prev functions:
function nextPage() {
  if (currentPage < pages.length - 1) {
    currentPage++;
    updateImage();
  }
  // or to wrap around, use:
  // currentPage = (currentPage + 1) % pages.length;
}
function prevPage() {
  if (currentPage > 0) {
    currentPage--;
    updateImage();
  }
  // or to wrap: 
  // currentPage = (currentPage - 1 + pages.length) % pages.length;
}
