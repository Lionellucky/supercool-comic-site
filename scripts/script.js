// Wait for the entire HTML document to be loaded and parsed
document.addEventListener('DOMContentLoaded', () => {

    // --- Comic Data Definition ---
    const comicData = {
        'comic1': {
            title: 'In Another Lifetime [Oneshot]',
            description: 'Oskarr and Kaz discussed about their future that\'ll never exist.',
            author: 'SevenNoodle',
            date: 'April 16, 2025',
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
            title: 'Name The Child! [Oneshot]',
            description: 'These guys are buns at naming vro..',
            author: 'SevenNoodle',
            date: 'May 22, 2024',
            pages: [
                'img/comics/Naming_1.png',
                'img/comics/Naming_2.png',
            ]
        },
        'comic3': {
            title: 'The Ways That You Talk To Me...',
            description: 'That one time when my friend left me alone because he has to move to another city..',
            author: 'SevenNoodle',
            date: 'August 31, 2024',
            pages: [
                'img/comics/THE_WAYS_THAT_YOU_TALK_TO_ME.png',
            ]
        },
        'comic4': {
            title: 'Two of the smartest people in their respective universes btw',
            description: 'IV and VII argues for the 82639th time',
            author: 'SevenNoodle',
            date: 'April 10, 2023',
            pages: [
                'img/comics/This_is_canon_btw.png',
            ]
        }
    };
    let currentComicKey = null;
    let currentComicPageIndex = 0;

    // --- Character Data Definition ---
    const characterData = {
        'oskar': {
            name: 'Oskarr',
            fullName: 'Oskarr Gevnew',
            gender: 'Male',
            age: '28',
            image: './img/gallery/oskar.png',
            description: '<p>A failed guitarist and turned criminal (yeesh)</p>',
            fullHistory: '<p>WIP because I\'m lazy asf</p>',
            quote: '"For the last fockin\' time! It\'s OSKARR, with two Rs!!"'
        },
        'menta': {
            name: 'MENTA',
            fullName: 'MENTA (Module Embedded Neural Task AI)',
            gender: 'None but displayed as Female',
            age: 'Unknown',
            image: './img/gallery/menta.png',
            description: `
                <p>MENTAs (Module Embedded Neural Task AI) are AI assistants that are typically implemented through a chip into a helmet or the brain of the user. MENTAs will appear as holograms with their (customizable) avatar where only the user can see them. Unfortunately, MENTAs are no longer used due to some "legal reasons" and became illegal.</p>
            `,
            fullHistory: `
                <p>MENTAs (Module Embedded Neural Task AI) are AI assistants that are typically implemented through a chip into a helmet or the brain of the user. MENTAs will appear as holograms with their (customizable) avatar where only the user can see them. Unfortunately, MENTAs are no longer used due to some "legal reasons" and became illegal.</p>
                <p>This version of MENTA is one of the few surviving ones that is used by a retired-but-still-active hitman. However due to their chip being damaged, this causes their avatar to appear as glitchy and wacky, even borderline visually unstable. This also causes them to have memory problems and emotionally uncontrolled (which apparently happens to AIs), despite that they still try to help and assist their user in their own way.</p>
            `,
            quote: '"Over here!! Andrea!! Hey!!! Hey don\'t ignore me! ...please?"'
        },
        'shawn': {
            name: 'Shawn Eden',
            fullName: 'Shawn Eden',
            gender: 'Male',
            age: '25',
            image: './img/gallery/shawn.png',
            description: `<p>A father, a priest, a human, he fell from grace from a tragedy that caused him to sin.</p>
            <p>After death, he became a demon of the <strong style="color: red;">Wrath's</strong> hell.</p>`,
            fullHistory: `<p>Timeskip to far future where doomsday/judgement day arrived that causes the seven hell\'s gate to open on earth to wreck havoc upon humanity.</p>
            <p></p>`,
            quote: 'He doesn\'t have a demon tail unfortunately 💔'
        },
        'sin': {
            name: 'Sin',
            fullName: 'Unknown',
            gender: 'Ambiguous',
            age: 'Ancient',
            image: './img/gallery/sin.png',
            description: '<p>Weird kid with amnesia lmao.</p>',
            fullHistory: `<p> Her backstory is unknown (except I actually knew her backstory but I can\'t tell for dramatic effect)</p>
            <p>She shows no absolute fear of demons or anything that could be a danger of her own well being.. maybe except for an'gels...</p>
            <p>Her and Shawn (another character of mine) are travelling around a post-apocalyptic world together filled with demons lurking around!! Yaayy!! :D</p>
            <p><strike>The red streaks on her head is part of her hair fyi.</strike></p>`,
            quote: '"HAHAHAHAHAHAHAHAHAHHAHAHAHAHAHAH fuck you."'
        },
        'seven': {
            name: 'Seven',
            fullName: 'Seven (Clone)',
            gender: 'Fluid',
            age: '7 (mental age)',
            image: './img/gallery/seven.png',
            description: '<p>A clone of a scientist (which he refers as his dad).</p>',
            fullHistory: `<p>Created from organic cells and ZERO cells (lore stuff lol)</p>
            <p>While he looks somewhat mature, he has the mental capacity of a 7 year old. He can also semi-shapeshift, as he can only change gender, color palette, amount of limbs he has and etc. While he can turn into a couch but due to his limitations, he'll be a very fleshy one (ref to that human skin couch from gravity falls).</p>
            <p><strike>He's also blind which why he wears that goggles at all times (usually).</strike></p>`,
            quote: '"Yeah, I am a fucking woman now."'
        },
        'v38': {
            name: 'V-38',
            fullName: 'V-38 (Combat Android)',
            gender: 'N/A (Robot)',
            age: '50 years (deactivated for 45)',
            image: './img/gallery/v-38.png',
            description: '<p>V-38 (pronounced "Veetriate") is a medical bot assigned to take care of humans in the hospital.</p>',
            fullHistory: '<p>V-38, a prototype combat android, was originally designed for a long-forgotten war. After being decommissioned, V-38 developed a unique personality through accidental exposure to ancient human archives. Its full history recounts its struggle to reconcile its past as a weapon with its newfound desire for peace and understanding, often leading to humorous and touching encounters with the remnants of humanity.</p>',
            quote: '"GOON!"'
        }
    };

    // --- Single Page Navigation Logic ---
    function showSection(sectionId) {
        // Hide all content sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = 'none';
        });

        // Show the requested section
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            // Use 'flex' for containers that need centering or flex layout
            activeSection.style.display = activeSection.classList.contains('container') ? 'flex' : 'block';
        }

        // Update active class in navigation
        document.querySelectorAll('.topnav a').forEach(link => {
            link.classList.remove('active');
        });
        const currentNavLink = document.querySelector(`.topnav a[data-section="${sectionId}"]`);
        if (currentNavLink) {
            currentNavLink.classList.add('active');
        }

        // Hide mobile nav after selection
        const nav = document.getElementById("myTopnav");
        nav.classList.remove("show");
    }

    // Attach event listeners to navigation links
    document.querySelectorAll('.topnav a').forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            const sectionId = link.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    // Initially show the home section
    showSection('home-section');

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

    // --- "Did you know?" Quotes (from random.js logic) ---
    const quotes = [
        { quoteText: "The Sybau button was accidentally made by Albion when he was in charge of making the comic's navigation buttons and it took around 10 attempts for it to look correctly! We ended up keeping it because it was too memorable.", author: "", link: "" },
        { quoteText: "The artist/graphic designer was too busy to actually focus on the site because he was participating in Art Fight during that time.", author: "", link: "" },
        { quoteText: "The css file for this website has over 1000+ lines total!", author: "", link: "" },
        { quoteText: "The team decided to take a personality test for fun and 2 out of 3 of us turned out to be mentally unhinged.", author: "", link: "" },
        { quoteText: "The coder of this site listens to Teto religiously (as they should).", author: "", link: "" },
        { quoteText: "The site actually has a 404 error page (for some apparent reason).", author: "", link: "" },
        { quoteText: "The owner of this site LOVES yuri", author: "", link: "" },
        { quoteText: "A Teto venom comic was used as the placeholder comic of this site. (It still exists within the site if you look carefully enough!)", author: "", link: "" },
        { quoteText: "Out of everything here on this site, the coder struggled with the playlist feature the most!", author: "", link: "" },
        { quoteText: "There's a secret gallery in this page with a drawing of femboy Albion!", author: "", link: "" },
        { quoteText: "Sevennoodle Lore?!?!?", author: "Click Me!", link: "javascript:void(0);" } // Modified to use JS for section change
    ];

    const quoteDisplayElement = document.getElementById('quoteDisplay');
    const refreshQuoteBtn = document.getElementById('refreshQuoteBtn'); // Get the refresh button

    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];

        if (quoteDisplayElement) {
            quoteDisplayElement.innerHTML = ''; // Clear previous content

            const quoteTextNode = document.createTextNode(randomQuote.quoteText);
            quoteDisplayElement.appendChild(quoteTextNode);

            if (randomQuote.author) {
                const authorLink = document.createElement('a');
                authorLink.href = randomQuote.link;
                authorLink.textContent = randomQuote.author;
                authorLink.target = "_blank"; // Open in new tab for external links
                if (randomQuote.link.startsWith('javascript:')) { // Handle internal section links
                    authorLink.onclick = (e) => {
                        e.preventDefault();
                        showSection('lore-section'); // Show the lore section
                    };
                    authorLink.target = "_self"; // Keep on same page for internal links
                }
                quoteDisplayElement.appendChild(authorLink);
            }
        }
    }

    // Initial quote generation on load
    generateRandomQuote();

    // Add event listener to the refresh button
    if (refreshQuoteBtn) {
        refreshQuoteBtn.addEventListener('click', () => {
            generateRandomQuote(); // Call the function to generate a new random quote
            handleInteraction(); // Play click sound
        });
    }

    // --- Comic Viewer Functions ---
    const comicImage = document.getElementById('comicImage');
    const comicTitle = document.getElementById('comicTitle');
    const comicDescription = document.getElementById('comicDescription');
    const comicAuthor = document.getElementById('comicAuthor');
    const comicDate = document.getElementById('comicDate');
    const firstPageBtn = document.getElementById('first-page-btn');
    const prevPageBtn = document.getElementById('prev-page-btn');
    const nextPageBtn = document.getElementById('next-page-btn');
    const lastPageBtn = document.getElementById('last-page-btn');

    function loadComicPage() {
        if (!currentComicKey || !comicData[currentComicKey]) return;

        const comic = comicData[currentComicKey];
        comicImage.src = comic.pages[currentComicPageIndex];
        comicTitle.textContent = comic.title;
        comicDescription.textContent = comic.description;
        comicAuthor.textContent = `Author: ${comic.author}`;
        comicDate.textContent = `Date: ${comic.date}`;

        // Update button states
        firstPageBtn.style.opacity = currentComicPageIndex === 0 ? '0.5' : '1';
        prevPageBtn.style.opacity = currentComicPageIndex === 0 ? '0.5' : '1';
        nextPageBtn.style.opacity = currentComicPageIndex === comic.pages.length - 1 ? '0.5' : '1';
        lastPageBtn.style.opacity = currentComicPageIndex === comic.pages.length - 1 ? '0.5' : '1';
    }

    function firstPage() {
        if (currentComicPageIndex !== 0) {
            currentComicPageIndex = 0;
            loadComicPage();
            handleInteraction(); // Play sound
        }
    }

    function prevPage() {
        if (currentComicPageIndex > 0) {
            currentComicPageIndex--;
            loadComicPage();
            handleInteraction(); // Play sound
        }
    }

    function nextPage() {
        if (currentComicPageIndex < comicData[currentComicKey].pages.length - 1) {
            currentComicPageIndex++;
            loadComicPage();
            handleInteraction(); // Play sound
        }
    }

    function lastPage() {
        if (currentComicPageIndex !== comicData[currentComicKey].pages.length - 1) {
            currentComicPageIndex = comicData[currentComicKey].pages.length - 1;
            loadComicPage();
            handleInteraction(); // Play sound
        }
    }

    // Attach event listeners to comic navigation buttons
    firstPageBtn.addEventListener('click', firstPage);
    prevPageBtn.addEventListener('click', prevPage);
    nextPageBtn.addEventListener('click', nextPage);
    lastPageBtn.addEventListener('click', lastPage);

    // Function to show comic viewer
    function showComicViewer(comicKey) {
        currentComicKey = comicKey;
        currentComicPageIndex = 0; // Reset to first page
        loadComicPage();
        showSection('comic-viewer-section');
    }

    // Attach event listeners to project items
    document.querySelectorAll('.project-item').forEach(item => {
        item.addEventListener('click', function() {
            const comicKey = this.getAttribute('data-comic-key');
            showComicViewer(comicKey);
        });
    });

    // --- Character Profile Functions ---
    const characterProfileName = document.getElementById('characterName');
    const characterProfileImage = document.getElementById('characterImage');
    const characterProfileDescription = document.getElementById('characterDescription');
    const characterProfileFullName = document.getElementById('fullName');
    const characterProfileGender = document.getElementById('gender');
    const characterProfileAge = document.getElementById('age');
    const characterProfileQuote = document.getElementById('characterQuote');
    const characterFullHistory = document.getElementById('characterFullHistory');

    function showCharacterProfile(characterKey) {
        const character = characterData[characterKey];
        if (!character) return;

        characterProfileName.textContent = character.name;
        characterProfileImage.src = character.image;
        characterProfileImage.alt = character.name;
        characterProfileDescription.innerHTML = character.description;
        characterProfileFullName.textContent = character.fullName;
        characterProfileGender.textContent = character.gender;
        characterProfileAge.textContent = character.age;
        characterProfileQuote.textContent = character.quote;
        characterFullHistory.innerHTML = character.fullHistory;

        showSection('character-profile-section');
    }

    // Attach event listeners to character thumbnails
    document.querySelectorAll('.character-thumbnail').forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const characterKey = this.getAttribute('data-character-key');
            showCharacterProfile(characterKey);
        });
    });
     // --- Audio Player Logic ---
    const audioSource = document.getElementById('audio-source');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const currentSongTitle = document.getElementById('current-song-title');
    // New elements for progress bar and time display
    const progressBar = document.getElementById('progress-bar');
    const progressContainer = document.getElementById('progress-container');
    const timeCurrent = document.getElementById('time-current');
    const timeDuration = document.getElementById('time-duration');


    const playlist = [
        { title: "Song 1: A Simple Bunny Girl", src: "./sounds/a-simple-bunny-girl.mp3" },
        { title: "Song 2: DJ Toenail Type Beat", src: "./sounds/dj_toenail_ambulance_song_XQC_extended.mp3" },
        { title: "Song 3: Free Time", src: "./sounds/free-time-call-of-the-night.mp3" },
        { title: "Song 4: Hush Hush", src: "./sounds/hush-hush.mp3" },
        { title: "Song 5: Scrapped", src: "./sounds/lando-scrapped.mp3" },
        { title: "Song 6: Lost in Paradise", src: "./sounds/lost-in-paradise.mp3" },
        { title: "Song 7: Pure Imagination", src: "./sounds/pure-imagination.mp3" },

        // Add more songs here. Make sure the paths are correct.
        // Example: { title: "My Awesome Song", src: "./sounds/my-awesome-song.mp3" }
    ];

    let currentSongIndex = 0;
    let isPlaying = false;

    // Helper function to format time (e.g., 03:45)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        const formattedSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
        return `${minutes}:${formattedSeconds}`;
    }

    // Function to load and play a song
    function loadSong(index) {
        if (playlist.length === 0) {
            currentSongTitle.textContent = "No songs in playlist";
            playPauseBtn.innerHTML = '<image src="./img/pagenav/pause.webp">';
            audioSource.src = '';
            isPlaying = false;
            // Reset progress bar and time
            progressBar.style.width = '0%';
            timeCurrent.textContent = '0:00';
            timeDuration.textContent = '0:00';
            return;
        }

        currentSongIndex = (index + playlist.length) % playlist.length; // Ensure index wraps around
        const song = playlist[currentSongIndex];
        audioSource.src = song.src;
        currentSongTitle.textContent = song.title;
        audioSource.load(); // Load the new audio source

        if (isPlaying) {
            audioSource.play().catch(e => console.error("Error playing audio:", e));
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    }

    // Toggle play/pause
    playPauseBtn.addEventListener('click', () => {
        if (audioSource.paused) {
            audioSource.play().catch(e => console.error("Error playing audio:", e));
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
        } else {
            audioSource.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            isPlaying = false;
        }
    });

    // Skip to next song
    nextBtn.addEventListener('click', () => {
        loadSong(currentSongIndex + 1);
        if (!isPlaying) { // If not playing, start playing after skipping
            audioSource.play().catch(e => console.error("Error playing audio:", e));
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
        }
    });

    // Skip to previous song
    prevBtn.addEventListener('click', () => {
        loadSong(currentSongIndex - 1);
        if (!isPlaying) { // If not playing, start playing after skipping
            audioSource.play().catch(e => console.error("Error playing audio:", e));
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            isPlaying = true;
        }
    });

    // Auto-play next song when current one ends
    audioSource.addEventListener('ended', () => {
        loadSong(currentSongIndex + 1);
        audioSource.play().catch(e => console.error("Error playing audio:", e)); // Auto-play the next song
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        isPlaying = true;
    });

    // Update progress bar and current time
    audioSource.addEventListener('timeupdate', () => {
        const currentTime = audioSource.currentTime;
        const duration = audioSource.duration;
        if (!isNaN(duration)) {
            const progressPercent = (currentTime / duration) * 100;
            progressBar.style.width = `${progressPercent}%`;
            timeCurrent.textContent = formatTime(currentTime);
        }
    });

    // Update total duration when metadata is loaded
    audioSource.addEventListener('loadedmetadata', () => {
        if (!isNaN(audioSource.duration)) {
            timeDuration.textContent = formatTime(audioSource.duration);
        } else {
            timeDuration.textContent = '0:00'; // Fallback if duration is not available
        }
    });

    // Seek functionality when clicking on the progress bar
    progressContainer.addEventListener('click', (e) => {
        const width = progressContainer.clientWidth; // Get width of the progress bar container
        const clickX = e.offsetX; // Get X position of the click relative to the container
        const duration = audioSource.duration;

        if (!isNaN(duration)) {
            const seekTime = (clickX / width) * duration;
            audioSource.currentTime = seekTime;
        }
    });

    // Initialize the first song on page load
    loadSong(0);
}); // End of DOMContentLoaded

// Toggle navigation for mobile
function toggleNav() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("show");
}
