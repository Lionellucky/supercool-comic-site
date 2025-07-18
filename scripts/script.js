// Wait for the entire HTML document to be loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // --- Comic Data Definition ---
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
    
    // --- Character Data Definition ---
    const characterData = {
        'oskar': {
            name: 'Oskarr',
            fullName: 'Oskarr Gevnew', // Added
            gender: 'Male', // Added
            age: '28', // Added
            image: './img/gallery/oskar.png',
            description: '<p>A failed guitarist and turned criminal (yeesh)</p>',
            fullHistory: '<p>WIP because I\'m lazy asf</p>',
            quote: '"For the last fockin\' time! It\'s OSKARR, with two Rs!!"' // Added quote
        },
        'menta': {
            name: 'MENTA',
            fullName: 'MENTA (Module Embedded Neural Task AI)', // Added
            gender: 'None but displayed as Female', // Added
            age: 'Unknown', // Added
            image: './img/gallery/menta.png',
            description: `
                <p>MENTAs (Module Embedded Neural Task AI) are AI assistants that are typically implemented through a chip into a helmet or the brain of the user. MENTAs will appear as holograms with their (customizable) avatar where only the user can see them. Unfortunately, MENTAs are no longer used due to some "legal reasons" and became illegal.</p>
            `,
            fullHistory: `
                <p>MENTAs (Module Embedded Neural Task AI) are AI assistants that are typically implemented through a chip into a helmet or the brain of the user. MENTAs will appear as holograms with their (customizable) avatar where only the user can see them. Unfortunately, MENTAs are no longer used due to some "legal reasons" and became illegal.</p>
                <p>This version of MENTA is one of the few surviving ones that is used by a retired-but-still-active hitman. However due to their chip being damaged, this causes their avatar to appear as glitchy and wacky, even borderline visually unstable. This also causes them to have memory problems and emotionally uncontrolled (which apparently happens to AIs), despite that they still try to help and assist their user in their own way.</p>
            `,
            quote: '"Over here!! Andrea!! Hey!!! Hey don\'t ignore me! ...please?"' // Added quote
        },
        'shawn': {
            name: 'Shawn Eden',
            fullName: 'Shawn Eden', // Added
            gender: 'Male', // Added
            age: '25', // Added
            image: './img/gallery/shawn.png',
            description: `<p>A father, a priest, a human, he fell from grace from a tragedy that caused him to sin.</p>
            <p>After death, he became a demon of the <strong style="color: red;">Wrath's</strong> hell.</p>`,
            fullHistory: `<p>Timeskip to far future where doomsday/judgement day arrived that causes the seven hell\'s gate to open on earth to wreck havoc upon humanity.</p>
            <p></p>`,
            quote: 'He doesn\'t have a demon tail unfortunately 💔' // Added quote
        },
        'sin': {
            name: 'Sin',
            fullName: 'Unknown', // Added
            gender: 'Ambiguous', // Added
            age: 'Ancient', // Added
            image: './img/gallery/sin.png',
            description: '<p>Weird kid with amnesia lmao.</p>',
            fullHistory: `<p> Her backstory is unknown (except I actually knew her backstory but I can\'t tell for dramatic effect)</p>
            <p>She shows no absolute fear of demons or anything that could be a danger of her own well being.. maybe except for angels...</p>
            <p>Her and Shawn (another character of mine) are travelling around a post-apocalyptic world together filled with demons lurking around!! Yaayy!! :D</p>
            <p><strike>The red streaks on her head is part of her hair fyi.</strike></p>`,
            quote: '"HAHAHAHAHAHAHAHAHAHHAHAHAHAHAHAH fuck you."' // Added quote
        },
        'seven': {
            name: 'Seven',
            fullName: 'Seven (Clone)', // Added
            gender: 'Fluid', // Added
            age: '7 (mental age)', // Added
            image: './img/gallery/seven.png',
            description: '<p>A clone of a scientist (which he refers as his dad).</p>',
            fullHistory: `<p>Created from organic cells and ZERO cells (lore stuff lol)</p>
            <p>While he looks somewhat mature, he has the mental capacity of a 7 year old. He can also semi-shapeshift, as he can only change gender, color palette, amount of limbs he has and etc. While he can turn into a couch but due to his limitations, he'll be a very fleshy one (ref to that human skin couch from gravity falls).</p>
            <p><strike>He's also blind which why he wears that goggles at all times (usually).</strike></p>`,
            quote: '"Yeah, I am a fucking woman now."' // Added quote
        },
        'v38': {
            name: 'V-38',
            fullName: 'V-38 (Combat Android)', // Added
            gender: 'N/A (Robot)', // Added
            age: '50 years (deactivated for 45)', // Added
            image: './img/gallery/v-38.png',
            description: '<p>V-38 (pronounced "Veetriate") is a medical bot assigned to take care of humans in the hospital.</p>',
            fullHistory: '<p>V-38, a prototype combat android, was originally designed for a long-forgotten war. After being decommissioned, V-38 developed a unique personality through accidental exposure to ancient human archives. Its full history recounts its struggle to reconcile its past as a weapon with its newfound desire for peace and understanding, often leading to humorous and touching encounters with the remnants of humanity.</p>',
            quote: '"GOON!"' // Added quote
        }
    };


    // --- Comic Page Navigation ---
    const comicImage = document.getElementById('comicImage');
    const comicTitleElement = document.getElementById('comicTitle');
    const comicDescriptionElement = document.getElementById('comicDescription');
    const comicAuthorElement = document.getElementById('comicAuthor');
    const comicDateElement = document.getElementById('comicDate');

    if (comicImage) {
        let currentComicId = 'comic1';
        let currentComic = comicData[currentComicId];
        let currentPage = 0;

        const urlParams = new URLSearchParams(window.location.search);
        const requestedComicId = urlParams.get('comic');

        if (requestedComicId && comicData[requestedComicId]) {
            currentComicId = requestedComicId;
            currentComic = comicData[currentComicId];
        } else if (requestedComicId) {
            console.warn(`Comic ID "${requestedComicId}" not found. Loading default comic.`);
        }

        function updateComicDisplay() {
            if (currentComic && currentComic.pages.length > 0) {
                comicImage.src = currentComic.pages[currentPage];
                if (comicTitleElement) comicTitleElement.textContent = currentComic.title;
                if (comicDescriptionElement) comicDescriptionElement.textContent = currentComic.description;
                if (comicAuthorElement) comicAuthorElement.textContent = `Author: ${currentComic.author}`;
                if (comicDateElement) comicDateElement.textContent = `Date: ${currentComic.date}`;
            } else {
                console.warn("No comic data or pages defined for the current comic.");
                comicImage.src = "https://placehold.co/600x400/CCCCCC/000000?text=Comic+Not+Found";
                if (comicTitleElement) comicTitleElement.textContent = "Comic Not Found";
                if (comicDescriptionElement) comicDescriptionElement.textContent = "The requested comic could not be loaded.";
                if (comicAuthorElement) comicAuthorElement.textContent = `Author: Not Available`;
                if (comicDateElement) comicDateElement.textContent = `Date: Not Available`;
            }
        }
        
        window.nextPage = () => { if (currentComic && currentPage < currentComic.pages.length - 1) { currentPage++; updateComicDisplay(); } };
        window.prevPage = () => { if (currentComic && currentPage > 0) { currentPage--; updateComicDisplay(); } };
        window.firstPage = () => { if (currentComic) { currentPage = 0; updateComicDisplay(); } };
        window.lastPage = () => { if (currentComic) { currentPage = currentComic.pages.length - 1; updateComicDisplay(); } };

        updateComicDisplay();
    }
    
    // --- Character Profile Page Logic ---
    const characterProfileContainer = document.getElementById('character-profile-container');
    if (characterProfileContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const characterId = urlParams.get('character'); // e.g., 'oskar'
        const character = characterData[characterId];

        if (character) {
            // Update the page with the character's data
            document.title = `7noodle's Studio | ${character.name}`;
            document.getElementById('characterName').textContent = character.name;
            const charImage = document.getElementById('characterImage');
            charImage.src = character.image;
            charImage.alt = character.name;
            document.getElementById('characterDescription').innerHTML = character.description;

            // Update Quick Facts
            document.getElementById('fullName').textContent = character.fullName || 'Unknown';
            document.getElementById('gender').textContent = character.gender || 'Unknown';
            document.getElementById('age').textContent = character.age || '[To be loaded]';

            // Update Character Quote
            document.getElementById('characterQuote').textContent = character.quote || 'No quote available.';

            // Display fullHistory
            const characterFullHistoryElement = document.getElementById('characterFullHistory');
            if (characterFullHistoryElement) {
                characterFullHistoryElement.innerHTML = character.fullHistory || '<p>Full history coming soon!</p>';
            }

        } else {
            // Handle case where character ID is not found or invalid
            document.title = `7noodle's Studio | Character Not Found`;
            document.getElementById('characterName').textContent = 'Character Not Found';
            document.getElementById('characterImage').src = 'https://placehold.co/400x600/CCCCCC/000000?text=Not+Found';
            document.getElementById('characterImage').alt = 'Character Not Found';
            document.getElementById('characterDescription').innerHTML = '<p>The character you are looking for does not exist. Please check the URL or go back to the characters page.</p>';
            
            // Clear or hide quick facts and full history if character not found
            document.getElementById('fullName').textContent = 'N/A';
            document.getElementById('gender').textContent = 'N/A';
            document.getElementById('age').textContent = 'N/A';
            document.getElementById('characterQuote').textContent = 'No quote available.'; // Clear quote
            const characterFullHistoryElement = document.getElementById('characterFullHistory');
            if (characterFullHistoryElement) {
                characterFullHistoryElement.innerHTML = ''; // Clear content
            }
        }
    }


    // --- Light/Dark Mode Switch Functionality ---
    const lightSwitch = document.getElementById('lightSwitch');
    if(lightSwitch) {
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
            localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
        });

        applyTheme();
    }

    // --- Gallery Modal Functionality ---
    const modal = document.getElementById("imageModal");
    if (modal) {
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

        closeButton.addEventListener('click', () => { modal.style.display = "none"; modalImage.src = ""; });
        window.addEventListener('click', (event) => { if (event.target == modal) { modal.style.display = "none"; modalImage.src = ""; } });
        document.addEventListener('keydown', (event) => { if (event.key === "Escape" && modal.style.display === "flex") { modal.style.display = "none"; modalImage.src = ""; } });
    }

    // --- Audio Click Sound Functionality (Web Audio API for Reliability) ---
    let audioContext;
    let clickBuffer;
    let isAudioInitialized = false;

    // 1. Create a function to set up and play the sound.
    function playClickSound() {
        // If the audio isn't ready, don't try to play it.
        if (!isAudioInitialized || !audioContext || !clickBuffer) {
            console.log("Audio not ready yet.");
            return;
        }

        // Create a sound source node.
        const source = audioContext.createBufferSource();
        // Set the buffer (the decoded audio data) for the source.
        source.buffer = clickBuffer;
        // Connect the source to the context's destination (the speakers).
        source.connect(audioContext.destination);
        // Play the sound immediately.
        source.start(0);
    }

    // 2. Create an initialization function that runs only ONCE on the first user interaction.
    async function initAudio() {
        // Check if we've already initialized to prevent this from running multiple times.
        if (isAudioInitialized) {
            return;
        }
        
        try {
            console.log("First user interaction. Initializing audio...");
            // Create the AudioContext. This is the main entry point to the Web Audio API.
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Resume the context if it's in a suspended state (required by some browsers).
            if (audioContext.state === 'suspended') {
                await audioContext.resume();
            }

            // Fetch the audio file from the server.
            const response = await fetch('./sounds/click.mp3');
            // Get the audio data as an ArrayBuffer.
            const arrayBuffer = await response.arrayBuffer();
            // Decode the audio data into a format the browser can play.
            clickBuffer = await audioContext.decodeAudioData(arrayBuffer);

            console.log("Audio successfully initialized and decoded.");
            isAudioInitialized = true; // Mark audio as ready.

            // Now that audio is unlocked, play the first sound immediately.
            playClickSound();

        } catch (e) {
            console.error("Failed to initialize or decode audio:", e);
            // If something goes wrong, make sure we don't think we're initialized.
            isAudioInitialized = false;
        }
    }

    // 3. Add event listeners to trigger the sound.
    // This function will be called for every click.
    function handleInteraction() {
        // If audio is not initialized, the first click will set it up.
        if (!isAudioInitialized) {
            initAudio();
        } else {
            // For all subsequent clicks, just play the sound.
            playClickSound();
        }
    }

    // Attach the interaction handler to all buttons and links.
    document.querySelectorAll('button, a').forEach(element => {
        element.addEventListener('click', handleInteraction);
    });

    // Attach the interaction handler to all details toggles.
    document.querySelectorAll('details').forEach(detailElement => {
        detailElement.addEventListener('toggle', () => {
            if (detailElement.open) {
                handleInteraction();
            }
        });
    });

}); // End of DOMContentLoaded


function toggleNav() {
  const nav = document.getElementById("myTopnav");
  nav.classList.toggle("show");
}


