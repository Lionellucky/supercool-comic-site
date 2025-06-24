window.onload = function () {
  const pages = [
    'img/firstcomic/In_Another_Lifetime_Page_1.png',
    'img/firstcomic/In_Another_Lifetime_Page_2.png',
    'img/firstcomic/In_Another_Lifetime_Page_3.png',
    'img/firstcomic/In_Another_Lifetime_Page_4.png',
    'img/firstcomic/In_Another_Lifetime_Page_5.png',
    'img/firstcomic/In_Another_Lifetime_Page_6.png',
    // add more as needed
  ];

  let currentPage = 0;
  const comicImage = document.getElementById('comicImage');

  function updateImage() {
    comicImage.src = pages[currentPage];
  }

  window.nextPage = function () {
    if (currentPage < pages.length - 1) {
      currentPage++;
      updateImage();
    }
  };

  window.prevPage = function () {
    if (currentPage > 0) {
      currentPage--;
      updateImage();
    }
  };

  window.firstPage = function () {
    currentPage = 0;
    updateImage();
  };

  window.lastPage = function () {
    currentPage = pages.length - 1;
    updateImage();
  };
};
