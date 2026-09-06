async function loadRandomQuote() {
    try {
        const response = await fetch("../json/hundred_tips.json");
        const quotes = await response.json();

        const randomIndex = Math.floor(Math.random() * quotes.length);

        let quote = document.querySelector(".quote")
        quote.innerHTML = quotes[randomIndex];
    } 
    catch (error) {
        console.error("failed to load: ", error);
    }
}

window.addEventListener("load", loadRandomQuote());