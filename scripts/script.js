// Wait for the entire HTML document to be loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // --- Comic Data Definition ---
    // Define all your comic data in a single object, keyed by a unique ID
    const comicData = {
        'comic1': {
            title: 'In Another Lifetime',
            description: 'This is the first comic in the series, exploring themes of time and destiny. It features a unique art style and a compelling narrative.',
            author: '7noodle',
            date: 'October 26, 2023',
            pages: [
                'img/comics/In_Another_Lifetime_Page_1.png',
                'img/comics/In_Another_Lifetime_Page_2.png',
                'img/comics/In_Another_Lifetime_Page_3.png',
                'img/comics/In_Another_Lifetime_Page_4.png',
                'img/comics/In_Another_Lifetime_Page_5.png',
                'img/comics/In_Another_Lifetime_Page_6.png',
            ]
        },
        'comic2': {
            title: 'Naming',
            description: 'A short story about the significance and power behind a name.',
            author: '7noodle',
            date: 'November 5, 2023',
            pages: [
                'img/comics/Naming_1.png',
                'img/comics/Naming_2.png',
            ]
        },
        'comic3': {
            title: 'The Ways That You Talk To Me...',
            description: 'A reflection on communication and understanding.',
            author: '7noodle',
            date: 'December 12, 2023',
            pages: [
                'img/comics/THE_WAYS_THAT_YOU_TALK_TO_ME.png',
            ]
        },
        'comic4': {
            title: 'This is canon btw',
            description: 'A humorous, canonical side-story.',
            author: '7noodle',
            date: 'January 1, 2024',
            pages: [
                'img/comics/This_is_canon_btw.png',
            ]
        }
    };

    // --- Comic Page Navigation ---
    const comicImage = document.getElementById('comicImage');
    const comicTitleElement = document.getElementById('comicTitle');
    const comicDescriptionElement = document.getElementById('comicDescription');
    // Getting the new elements by their ID
    const comicAuthorElement = document.getElementById('comicAuthor');
    const comicDateElement = document.getElementById('comicDate');


    // Check if the comic image element exists on the page before running comic logic
    if (comicImage) {
        let currentComicId = 'comic1'; // Default comic ID
        let currentComic = comicData[currentComicId]; // Default comic data
        let currentPage = 0;

        // Get the comic ID from the URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        const requestedComicId = urlParams.get('comic'); // 'comic' is the parameter name

        if (requestedComicId && comicData[requestedComicId]) {
            currentComicId = requestedComicId;
            currentComic = comicData[currentComicId];
        } else if (requestedComicId) {
            console.warn(`Comic ID "${requestedComicId}" not found. Loading default comic.`);
        }

        // UPDATED function to set all comic info
        function updateComicDisplay() {
            if (currentComic && currentComic.pages.length > 0) {
                comicImage.src = currentComic.pages[currentPage];
                // Update title, description, author, and date
                if (comicTitleElement) {
                    comicTitleElement.textContent = currentComic.title;
                }
                if (comicDescriptionElement) {
                    comicDescriptionElement.textContent = currentComic.description;
                }
                if (comicAuthorElement) {
                    comicAuthorElement.textContent = `Author: ${currentComic.author}`;
                }
                if (comicDateElement) {
                    comicDateElement.textContent = `Date: ${currentComic.date}`;
                }

            } else {
                console.warn("No comic data or pages defined for the current comic.");
                comicImage.src = "https://placehold.co/600x400/CCCCCC/000000?text=Comic+Not+Found"; // Placeholder
                if (comicTitleElement) {
                    comicTitleElement.textContent = "Comic Not Found";
                }
                if (comicDescriptionElement) {
                    comicDescriptionElement.textContent = "The requested comic could not be loaded.";
                }
                 if (comicAuthorElement) {
                    comicAuthorElement.textContent = `Author: Not Available`;
                }
                if (comicDateElement) {
                    comicDateElement.textContent = `Date: Not Available`;
                }
            }
        }
        
        // Make functions globally accessible for the inline onclick attributes
        window.nextPage = function () {
            if (currentComic && currentPage < currentComic.pages.length - 1) {
                currentPage++;
                updateComicDisplay();
            }
        };

        window.prevPage = function () {
            if (currentComic && currentPage > 0) {
                currentPage--;
                updateComicDisplay();
            }
        };

        window.firstPage = function () {
            if (currentComic) {
                currentPage = 0;
                updateComicDisplay();
            }
        };

        window.lastPage = function () {
            if (currentComic) {
                currentPage = currentComic.pages.length - 1;
                updateComicDisplay();
            }
        };

        // Initialize the comic display on page load
        updateComicDisplay();
    }

    // --- Click Sound Effect ---
    // Define the Audio object once
    const mouseclick = new Audio("./sounds/click.mp3");
    mouseclick.volume = 1;
    mouseclick.preload = "auto";

    // Add event listeners for buttons and links
    document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('mousedown', () => {
            // Clone the sound to allow multiple rapid plays without cutting off previous ones
            const clickSound = mouseclick.cloneNode();
            clickSound.play().catch(e => console.error("Failed to play sound:", e));
        });
    });

    // Add event listeners for <details> elements to play sound on toggle
    document.querySelectorAll('details').forEach(detailElement => {
        detailElement.addEventListener('toggle', () => {
            // Play sound only when the details element is opened
            if (detailElement.open) {
                const clickSound = mouseclick.cloneNode();
                clickSound.play().catch(e => console.error("Failed to play sound:", e));
            }
        });
    });


    // --- Light/Dark Mode Switch Functionality ---
    const lightSwitch = document.getElementById('lightSwitch');
    const themeCheckbox = lightSwitch.querySelector('input[type="checkbox"]');

    function applyTheme() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        themeCheckbox.checked = isDarkMode;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    themeCheckbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'true');
        } else {
            localStorage.setItem('darkMode', 'false');
        }
    });

    applyTheme();

    // Gallery Modal Functionality
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("caption");
    const closeButton = document.getElementsByClassName("close-button")[0];
    const galleryItems = document.querySelectorAll(".gallery-item img");

    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = "flex";
            modalImage.src = this.getAttribute('data-full-src') || this.src;
            modalCaption.innerHTML = this.alt || this.nextElementSibling?.textContent || "";
        });
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
        modalImage.src = "";
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            modalImage.src = "";
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" && modal.style.display === "flex") {
            modal.style.display = "none";
            modalImage.src = "";
        }
    });

}); // End of DOMContentLoaded


function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("show");
}