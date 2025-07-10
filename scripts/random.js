// Get the quote display element
        const quoteDisplay = document.getElementById('quoteDisplay');

        // Array of quotes
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
            { quoteText: "Sevennoodle Lore?!?!?", author: "Click Me!", link: "secret.html" }
        ];

        /**
         * Generates a random quote and displays it in the HTML.
         * The quote is selected based on a random number generated.
         */
        /**
         * Generates a random quote and displays it in the HTML with a "text, then link, then text" structure.
         * The quote is selected based on a random number generated.
         */
        function generateRandomQuote() {
            // Generate a random index based on the length of the quotes array
            const randomIndex = Math.floor(Math.random() * quotes.length);

            // Get the quote object at the random index
            const randomQuote = quotes[randomIndex];

            // Clear any previous content in the quote display
            quoteDisplay.innerHTML = '';

            // Create a text node for the main quote part
            const quoteTextNode = document.createTextNode(randomQuote.quoteText);
            quoteDisplay.appendChild(quoteTextNode);

            // Create an anchor element for the author (link part)
            const authorLink = document.createElement('a');
            authorLink.href = randomQuote.link; // Set the URL for the link
            authorLink.textContent = randomQuote.author; // Set the author's name as the link text
            authorLink.target = "_blank"; // Open the link in a new tab
            quoteDisplay.appendChild(authorLink);

            // If there's any text after the author, you can add it here.
            // For now, our quotes end with the author, so this part is optional.
            // For example:
            // const closingTextNode = document.createTextNode(".");
            // quoteDisplay.appendChild(closingTextNode);
        }

        // Generate an initial quote when the page loads
        document.addEventListener('DOMContentLoaded', generateRandomQuote);