// Wait for the entire HTML document to be loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // --- Comic Page Navigation ---
    const comicImage = document.getElementById('comicImage');
    // Check if the comic image element exists on the page before running comic logic
    if (comicImage) {
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

        function updateImage() {
            comicImage.src = pages[currentPage];
        }

        // Make functions globally accessible for the inline onclick attributes
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
    }

    // --- Click Sound Effect ---
    const mouseclick = new Audio("./sounds/click.mp3");
    mouseclick.volume = 1;
    mouseclick.preload = "auto";
    
    // You can attach the click sound to specific elements instead of the whole body
    // For example, to all buttons and links:
    document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('mousedown', () => {
            // We clone the audio node to allow for rapid, overlapping clicks
            const clickSound = mouseclick.cloneNode();
            clickSound.play().catch(e => console.error("Failed to play sound:", e));
        });
    });


    // --- Light/Dark Mode Switch Functionality ---
    const lightSwitch = document.getElementById('lightSwitch');
    const themeCheckbox = lightSwitch.querySelector('input[type="checkbox"]');

    // Function to apply the saved theme on page load
    function applyTheme() {
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        themeCheckbox.checked = isDarkMode;
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    // Add event listener to the checkbox inside the label
    themeCheckbox.addEventListener('change', () => {
        // Toggle the .dark-mode class on the body
        document.body.classList.toggle('dark-mode');
        
        // Save the user's preference to localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'true');
        } else {
            localStorage.setItem('darkMode', 'false');
        }
    });

    // Apply the theme when the page loads
    applyTheme();

});
