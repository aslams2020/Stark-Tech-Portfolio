const villainImages = [
    'assets/Villans/IronMan(2008)_Villan.png',
    'assets/Villans/IronMan2_Villan.jpg',
    'assets/Villans/TheAvangers_Villan.jpg',
    'assets/Villans/IronMan3_Villan.webp',
    'assets/Villans/AvangersAgeOfUltron_Villans.jpg',
    'assets/Villans/CivilWar_Villan.jpg',
    'assets/Villans/Homecoming_Villan.jpg',
    'assets/Villans/thanos.avif',
    'assets/Villans/thanosarmy.jpg',
];


function replaceImages() {
    const subDivs = document.querySelectorAll('.movies-section .movie img');
    const snapOverlay = document.getElementById('snap-overlay');
    const messageOverlay = document.getElementById('message-overlay');
    
    // Show the "Demons are coming..." message
    messageOverlay.style.display = 'flex';
    
    // Hide message overlay and show snap overlay after 1.5 seconds
    setTimeout(() => {
        messageOverlay.style.display = 'none';
        snapOverlay.style.display = 'block';
        
        // Replace images after 1 second of showing the snap overlay
        subDivs.forEach((div, index) => {
            div.style.animation = "snap 1s forwards";
            setTimeout(() => {
                if (index < villainImages.length) {
                    div.src = villainImages[index]; 
                }
                div.style.animation = ""; 
                
                // Hide snap overlay after all images are replaced
                if (index === subDivs.length - 1) {
                    snapOverlay.style.display = 'none';
                }
            }, 1000);
        });
    }, 1500);
    
}



// Inject HTML for the fun fact overlay
document.addEventListener("DOMContentLoaded", () => {
    const funFactOverlayHTML = `
        <div id="fun-fact-overlay" style="display: none;">
            <div id="fun-fact-content">
                <p id="fun-fact-message"></p>
                <div id="button-container" style="display: flex; gap: 10px; margin-top: 10px; justify-content: flex-end; ">
                    <button id="fun-fact-next-button" style="background-color: #FF4500; color: white; border: none; padding: 10px 15px; cursor: pointer; border-radius: 5px;">Next</button>
                    <button id="fun-fact-ok-button" style="display: none; background-color: #FF4500; color: white; border: none; padding: 10px 15px; cursor: pointer; border-radius: 5px;">OK</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', funFactOverlayHTML);

    const funFacts = [
        "Iron Man was created by Stan Lee as a challenge to create a hero no one should like—and then sell them on him.",
        "Tony Stark's full name is Anthony Edward Stark.",
        "Iron Man was originally a weapons manufacturer in the comics before transitioning to tech and clean energy.",
        "The Iron Man suit can lift over 100 tons.",
        "Tony Stark's character was inspired by Howard Hughes, a famous inventor, and entrepreneur.",
        "The first Iron Man suit took a team of 30 artists and technicians six months to design for the 2008 movie.",
        "Iron Man's artificial intelligence assistant, JARVIS, stands for 'Just A Rather Very Intelligent System.'"
    ];

    function displayFunFact() {
        const introMessage = "As a dedicated Iron Man enthusiast, here's something special for you:";
        document.getElementById('fun-fact-message').textContent = introMessage;
        document.getElementById('fun-fact-overlay').style.display = 'flex';
        document.getElementById('fun-fact-next-button').style.display = 'block';
        document.getElementById('fun-fact-ok-button').style.display = 'none';
    }

    function showFunFact() {
        const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
        document.getElementById('fun-fact-message').innerHTML = `<strong>Do you know?</strong> <br/> <br /> ${randomFact}`;

        document.getElementById('fun-fact-next-button').style.display = 'none';
        document.getElementById('fun-fact-ok-button').style.display = 'block';
    }

    setTimeout(displayFunFact, 300000); // 5 minutes

    document.getElementById('fun-fact-next-button').addEventListener('click', showFunFact);
    document.getElementById('fun-fact-ok-button').addEventListener('click', () => {
        document.getElementById('fun-fact-overlay').style.display = 'none';
    });
});
