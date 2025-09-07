// script.js
document.addEventListener('DOMContentLoaded', () => {
    // DOM elements
    const scoreElement = document.getElementById('score');
    const questionCountElement = document.getElementById('question-count');
    const timerElement = document.getElementById('timer');
    const questionElement = document.getElementById('question');
    const characterImage = document.getElementById('character-image');
    const optionsContainer = document.getElementById('options-container');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const resultOverlay = document.getElementById('result-overlay');
    const finalScoreElement = document.getElementById('final-score');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    const playAgainBtn = document.getElementById('play-again-btn');
    
    // Quiz questions
    const quizQuestions = [
        {
            character: "Naruto Uzumaki",
            anime: "Naruto",
            options: ["One Piece", "Bleach", "Naruto", "Dragon Ball Z"],
            icon: "fas fa-user-ninja"
        },
        {
            character: "Monkey D. Luffy",
            anime: "One Piece",
            options: ["One Piece", "Naruto", "Attack on Titan", "My Hero Academia"],
            icon: "fas fa-crown"
        },
        {
            character: "Goku",
            anime: "Dragon Ball Z",
            options: ["Dragon Ball Z", "One Punch Man", "Bleach", "JoJo's Bizarre Adventure"],
            icon: "fas fa-dragon"
        },
        {
            character: "Eren Yeager",
            anime: "Attack on Titan",
            options: ["Attack on Titan", "Demon Slayer", "Fullmetal Alchemist", "Death Note"],
            icon: "fas fa-fist-raised"
        },
        {
            character: "Light Yagami",
            anime: "Death Note",
            options: ["Death Note", "Code Geass", "Psycho-Pass", "Steins;Gate"],
            icon: "fas fa-book"
        },
        {
            character: "Izuku Midoriya",
            anime: "My Hero Academia",
            options: ["My Hero Academia", "One Punch Man", "Naruto", "Bleach"],
            icon: "fas fa-meteor"
        },
        {
            character: "Saitama",
            anime: "One Punch Man",
            options: ["One Punch Man", "Dragon Ball Z", "My Hero Academia", "Mob Psycho 100"],
            icon: "fas fa-hand-rock"
        },
        {
            character: "Levi Ackerman",
            anime: "Attack on Titan",
            options: ["Attack on Titan", "Demon Slayer", "Vinland Saga", "Berserk"],
            icon: "fas fa-khanda"
        },
        {
            character: "Kakashi Hatake",
            anime: "Naruto",
            options: ["Naruto", "Bleach", "One Piece", "Hunter x Hunter"],
            icon: "fas fa-mask"
        },
        {
            character: "Roronoa Zoro",
            anime: "One Piece",
            options: ["One Piece", "Bleach", "Samurai Champloo", "Rurouni Kenshin"],
            icon: "fas fa-swords"
        },
            {
        character: "Sakura Haruno",
        anime: "Naruto",
        options: ["Naruto", "Fairy Tail", "Bleach", "Inuyasha"],
        icon: "fas fa-female"
    },
    {
        character: "Shoto Todoroki",
        anime: "My Hero Academia",
        options: ["My Hero Academia", "Bleach", "Attack on Titan", "One Piece"],
        icon: "fas fa-snowflake"
    },
    {
        character: "Killua Zoldyck",
        anime: "Hunter x Hunter",
        options: ["Hunter x Hunter", "Naruto", "One Piece", "Bleach"],
        icon: "fas fa-bolt"
    },
    {
        character: "Edward Elric",
        anime: "Fullmetal Alchemist",
        options: ["Fullmetal Alchemist", "Black Clover", "Bleach", "Attack on Titan"],
        icon: "fas fa-flask"
    },
    {
        character: "Alphonse Elric",
        anime: "Fullmetal Alchemist",
        options: ["Fullmetal Alchemist", "Bleach", "Attack on Titan", "Death Note"],
        icon: "fas fa-robot"
    },
    {
        character: "Tanjiro Kamado",
        anime: "Demon Slayer",
        options: ["Demon Slayer", "Attack on Titan", "Naruto", "Bleach"],
        icon: "fas fa-fire"
    },
    {
        character: "Nezuko Kamado",
        anime: "Demon Slayer",
        options: ["Demon Slayer", "Naruto", "Bleach", "Tokyo Ghoul"],
        icon: "fas fa-child"
    },
    {
        character: "Kaneki Ken",
        anime: "Tokyo Ghoul",
        options: ["Tokyo Ghoul", "Death Note", "Paranoia Agent", "Erased"],
        icon: "fas fa-mask"
    },
    {
        character: "Ichigo Kurosaki",
        anime: "Bleach",
        options: ["Bleach", "Naruto", "Dragon Ball Z", "Yu Yu Hakusho"],
        icon: "fas fa-ghost"
    },
    {
        character: "Rukia Kuchiki",
        anime: "Bleach",
        options: ["Bleach", "Inuyasha", "Naruto", "Fairy Tail"],
        icon: "fas fa-snowman"
    },
    {
        character: "Natsu Dragneel",
        anime: "Fairy Tail",
        options: ["Fairy Tail", "Black Clover", "Naruto", "Bleach"],
        icon: "fas fa-fire-alt"
    },
    {
        character: "Lucy Heartfilia",
        anime: "Fairy Tail",
        options: ["Fairy Tail", "Sailor Moon", "Bleach", "One Piece"],
        icon: "fas fa-star"
    },
    {
        character: "Gray Fullbuster",
        anime: "Fairy Tail",
        options: ["Fairy Tail", "Naruto", "Bleach", "One Piece"],
        icon: "fas fa-icicles"
    },
    {
        character: "Erza Scarlet",
        anime: "Fairy Tail",
        options: ["Fairy Tail", "Bleach", "Attack on Titan", "Black Clover"],
        icon: "fas fa-shield-alt"
    },
    {
        character: "Yuno Grinberryall",
        anime: "Black Clover",
        options: ["Black Clover", "Bleach", "Fairy Tail", "Naruto"],
        icon: "fas fa-feather-alt"
    },
    {
        character: "Asta",
        anime: "Black Clover",
        options: ["Black Clover", "Fairy Tail", "Naruto", "Bleach"],
        icon: "fas fa-dumbbell"
    },
    {
        character: "Spike Spiegel",
        anime: "Cowboy Bebop",
        options: ["Cowboy Bebop", "Samurai Champloo", "Trigun", "Black Lagoon"],
        icon: "fas fa-gun"
    },
    {
        character: "Vash the Stampede",
        anime: "Trigun",
        options: ["Trigun", "Cowboy Bebop", "Black Lagoon", "Hellsing"],
        icon: "fas fa-crosshairs"
    },
    {
        character: "Alucard",
        anime: "Hellsing",
        options: ["Hellsing", "Bleach", "Naruto", "Black Butler"],
        icon: "fas fa-skull"
    },
    {
        character: "Sebastian Michaelis",
        anime: "Black Butler",
        options: ["Black Butler", "Death Note", "Bleach", "Blue Exorcist"],
        icon: "fas fa-hat-wizard"
    },

    {
        character: "Ciel Phantomhive",
        anime: "Black Butler",
        options: ["Black Butler", "Death Note", "Code Geass", "Blue Exorcist"],
        icon: "fas fa-child"
    },
    {
        character: "Rimuru Tempest",
        anime: "That Time I Got Reincarnated as a Slime",
        options: ["That Time I Got Reincarnated as a Slime", "Overlord", "Re:Zero", "Konosuba"],
        icon: "fas fa-water"
    },
    {
        character: "Ainz Ooal Gown",
        anime: "Overlord",
        options: ["Overlord", "Bleach", "One Piece", "Naruto"],
        icon: "fas fa-skull-crossbones"
    },
    {
        character: "Subaru Natsuki",
        anime: "Re:Zero",
        options: ["Re:Zero", "Steins;Gate", "Code Geass", "Erased"],
        icon: "fas fa-undo"
    },
    {
        character: "Emilia",
        anime: "Re:Zero",
        options: ["Re:Zero", "Konosuba", "Overlord", "No Game No Life"],
        icon: "fas fa-snowflake"
    },
    {
        character: "Kazuma Satou",
        anime: "Konosuba",
        options: ["Konosuba", "Re:Zero", "Overlord", "No Game No Life"],
        icon: "fas fa-gamepad"
    },
    {
        character: "Aqua",
        anime: "Konosuba",
        options: ["Konosuba", "No Game No Life", "Re:Zero", "Blue Exorcist"],
        icon: "fas fa-tint"
    },
    {
        character: "Shiro",
        anime: "No Game No Life",
        options: ["No Game No Life", "Konosuba", "Re:Zero", "Overlord"],
        icon: "fas fa-chess-board"
    },
    {
        character: "Sora",
        anime: "No Game No Life",
        options: ["No Game No Life", "Konosuba", "Steins;Gate", "Overlord"],
        icon: "fas fa-chess-king"
    },
    {
        character: "Okabe Rintarou",
        anime: "Steins;Gate",
        options: ["Steins;Gate", "Death Note", "Code Geass", "Re:Zero"],
        icon: "fas fa-hourglass-half"
    },
    {
        character: "Kurisu Makise",
        anime: "Steins;Gate",
        options: ["Steins;Gate", "Code Geass", "Erased", "Re:Zero"],
        icon: "fas fa-flask"
    },
    {
        character: "Lelouch Lamperouge",
        anime: "Code Geass",
        options: ["Code Geass", "Death Note", "Steins;Gate", "Attack on Titan"],
        icon: "fas fa-chess-queen"
    },
    {
        character: "Suzaku Kururugi",
        anime: "Code Geass",
        options: ["Code Geass", "Death Note", "Bleach", "Naruto"],
        icon: "fas fa-dove"
    },
    {
        character: "Gintoki Sakata",
        anime: "Gintama",
        options: ["Gintama", "Samurai Champloo", "Bleach", "Naruto"],
        icon: "fas fa-sword"
    },
    {
        character: "Shinpachi Shimura",
        anime: "Gintama",
        options: ["Gintama", "Naruto", "Bleach", "One Piece"],
        icon: "fas fa-glasses"
    },
    {
        character: "Kagura",
        anime: "Gintama",
        options: ["Gintama", "Naruto", "Bleach", "One Piece"],
        icon: "fas fa-star"
    },
    {
        character: "Inuyasha",
        anime: "Inuyasha",
        options: ["Inuyasha", "Bleach", "Naruto", "Dragon Ball Z"],
        icon: "fas fa-dog"
    },
    {
        character: "Sesshomaru",
        anime: "Inuyasha",
        options: ["Inuyasha", "Naruto", "Bleach", "Dragon Ball Z"],
        icon: "fas fa-dragon"
    },
    {
        character: "Kagome Higurashi",
        anime: "Inuyasha",
        options: ["Inuyasha", "Naruto", "Bleach", "Fairy Tail"],
        icon: "fas fa-bow-arrow"
    },
    {
        character: "Yusuke Urameshi",
        anime: "Yu Yu Hakusho",
        options: ["Yu Yu Hakusho", "Dragon Ball Z", "Naruto", "Bleach"],
        icon: "fas fa-fist-raised"
    },
    {
        character: "Hiei",
        anime: "Yu Yu Hakusho",
        options: ["Yu Yu Hakusho", "Naruto", "Bleach", "Dragon Ball Z"],
        icon: "fas fa-fire"
    },
    {
        character: "Kurama",
        anime: "Yu Yu Hakusho",
        options: ["Yu Yu Hakusho", "Naruto", "Bleach", "Fairy Tail"],
        icon: "fas fa-leaf"
    },
    {
        character: "Joseph Joestar",
        anime: "JoJo's Bizarre Adventure",
        options: ["JoJo's Bizarre Adventure", "Bleach", "One Piece", "Naruto"],
        icon: "fas fa-hat-cowboy"
    },
    {
        character: "Jotaro Kujo",
        anime: "JoJo's Bizarre Adventure",
        options: ["JoJo's Bizarre Adventure", "Bleach", "Naruto", "Dragon Ball Z"],
        icon: "fas fa-anchor"
    },
    {
        character: "Dio Brando",
        anime: "JoJo's Bizarre Adventure",
        options: ["JoJo's Bizarre Adventure", "Bleach", "Naruto", "Dragon Ball Z"],
        icon: "fas fa-moon"
    },
    {
        character: "Jonathan Joestar",
        anime: "JoJo's Bizarre Adventure",
        options: ["JoJo's Bizarre Adventure", "Naruto", "One Piece", "Bleach"],
        icon: "fas fa-shield-alt"
    },
    {
        character: "Giorno Giovanna",
        anime: "JoJo's Bizarre Adventure",
        options: ["JoJo's Bizarre Adventure", "Naruto", "One Piece", "Bleach"],
        icon: "fas fa-sun"
    },
    {
        character: "Josephine Kujo (Jolyne Cujoh)",
        anime: "JoJo's Bizarre Adventure",
        options: ["JoJo's Bizarre Adventure", "Naruto", "Bleach", "One Piece"],
        icon: "fas fa-female"
    },
    {
        character: "Ryo Asuka",
        anime: "Devilman Crybaby",
        options: ["Devilman Crybaby", "Tokyo Ghoul", "Paranoia Agent", "Death Note"],
        icon: "fas fa-demon"
    },
    {
        character: "Akira Fudo",
        anime: "Devilman Crybaby",
        options: ["Devilman Crybaby", "Tokyo Ghoul", "Bleach", "Naruto"],
        icon: "fas fa-fire-alt"
    },
     {
        character: "Shinichi Kudo",
        anime: "Detective Conan",
        options: ["Detective Conan", "Death Note", "Steins;Gate", "Monster"],
        icon: "fas fa-search"
    },
    {
        character: "Conan Edogawa",
        anime: "Detective Conan",
        options: ["Detective Conan", "Death Note", "Monster", "Steins;Gate"],
        icon: "fas fa-user-secret"
    },
    {
        character: "Kenshin Himura",
        anime: "Rurouni Kenshin",
        options: ["Rurouni Kenshin", "Samurai Champloo", "Bleach", "Naruto"],
        icon: "fas fa-gavel"
    },
    {
        character: "Mugen",
        anime: "Samurai Champloo",
        options: ["Samurai Champloo", "Rurouni Kenshin", "Bleach", "Naruto"],
        icon: "fas fa-skull"
    },
    {
        character: "Jin",
        anime: "Samurai Champloo",
        options: ["Samurai Champloo", "Bleach", "Naruto", "Rurouni Kenshin"],
        icon: "fas fa-glasses"
    },
    {
        character: "Motoko Kusanagi",
        anime: "Ghost in the Shell",
        options: ["Ghost in the Shell", "Psycho-Pass", "Ergo Proxy", "Akira"],
        icon: "fas fa-robot"
    },
    {
        character: "Shinya Kogami",
        anime: "Psycho-Pass",
        options: ["Psycho-Pass", "Ghost in the Shell", "Steins;Gate", "Death Note"],
        icon: "fas fa-bullseye"
    },
    {
        character: "Makoto Shishio",
        anime: "Rurouni Kenshin",
        options: ["Rurouni Kenshin", "Naruto", "Bleach", "One Piece"],
        icon: "fas fa-fire"
    },
    {
        character: "Akame",
        anime: "Akame ga Kill!",
        options: ["Akame ga Kill!", "Naruto", "Bleach", "One Piece"],
        icon: "fas fa-skull-crossbones"
    },
    {
        character: "Esdeath",
        anime: "Akame ga Kill!",
        options: ["Akame ga Kill!", "Naruto", "Bleach", "One Piece"],
        icon: "fas fa-icicles"
    },
    {
        character: "Shoyo Hinata",
        anime: "Haikyuu!!",
        options: ["Haikyuu!!", "Kuroko no Basket", "Prince of Tennis", "Blue Lock"],
        icon: "fas fa-volleyball-ball"
    },
    {
        character: "Tobio Kageyama",
        anime: "Haikyuu!!",
        options: ["Haikyuu!!", "Kuroko no Basket", "Prince of Tennis", "Blue Lock"],
        icon: "fas fa-bullseye"
    },
    {
        character: "Kuroko Tetsuya",
        anime: "Kuroko no Basket",
        options: ["Kuroko no Basket", "Haikyuu!!", "Prince of Tennis", "Blue Lock"],
        icon: "fas fa-basketball-ball"
    },
    {
        character: "Kenshiro",
        anime: "Fist of the North Star",
        options: ["Fist of the North Star", "Dragon Ball Z", "JoJo's Bizarre Adventure", "Naruto"],
        icon: "fas fa-hand-rock"
    },
    {
        character: "Shin",
        anime: "Kingdom",
        options: ["Kingdom", "Naruto", "Bleach", "Attack on Titan"],
        icon: "fas fa-crown"
    },
    {
        character: "Thorfinn",
        anime: "Vinland Saga",
        options: ["Vinland Saga", "Attack on Titan", "Berserk", "Naruto"],
        icon: "fas fa-shield-alt"
    },
    {
        character: "Guts",
        anime: "Berserk",
        options: ["Berserk", "Vinland Saga", "Attack on Titan", "Claymore"],
        icon: "fas fa-sword"
    },
    {
        character: "Griffith",
        anime: "Berserk",
        options: ["Berserk", "Vinland Saga", "Claymore", "Attack on Titan"],
        icon: "fas fa-dove"
    },
    {
        character: "Clare",
        anime: "Claymore",
        options: ["Claymore", "Berserk", "Attack on Titan", "Bleach"],
        icon: "fas fa-cross"
    },
    {
        character: "Allen Walker",
        anime: "D.Gray-man",
        options: ["D.Gray-man", "Bleach", "Naruto", "Fairy Tail"],
        icon: "fas fa-hands"
    },
    {
        character: "Lavi",
        anime: "D.Gray-man",
        options: ["D.Gray-man", "Bleach", "Naruto", "Fairy Tail"],
        icon: "fas fa-book"
    },
    {
        character: "Yato",
        anime: "Noragami",
        options: ["Noragami", "Blue Exorcist", "Bleach", "Naruto"],
        icon: "fas fa-pray"
    },
    {
        character: "Yukine",
        anime: "Noragami",
        options: ["Noragami", "Blue Exorcist", "Bleach", "Naruto"],
        icon: "fas fa-child"
    },
    {
        character: "Rin Okumura",
        anime: "Blue Exorcist",
        options: ["Blue Exorcist", "Noragami", "Bleach", "Naruto"],
        icon: "fas fa-fire"
    },
    {
        character: "Amaimon",
        anime: "Blue Exorcist",
        options: ["Blue Exorcist", "Noragami", "Bleach", "Naruto"],
        icon: "fas fa-demon"
    },
    {
        character: "Shigeo Kageyama (Mob)",
        anime: "Mob Psycho 100",
        options: ["Mob Psycho 100", "One Punch Man", "Naruto", "Bleach"],
        icon: "fas fa-brain"
    },
    {
        character: "Reigen Arataka",
        anime: "Mob Psycho 100",
        options: ["Mob Psycho 100", "One Punch Man", "Naruto", "Bleach"],
        icon: "fas fa-user-tie"
    },
    {
        character: "Ash Ketchum",
        anime: "Pokémon",
        options: ["Pokémon", "Digimon", "Naruto", "One Piece"],
        icon: "fas fa-gamepad"
    },
    {
        character: "Pikachu",
        anime: "Pokémon",
        options: ["Pokémon", "Digimon", "Naruto", "One Piece"],
        icon: "fas fa-bolt"
    },
    {
        character: "Tai Kamiya",
        anime: "Digimon",
        options: ["Digimon", "Pokémon", "Naruto", "One Piece"],
        icon: "fas fa-dragon"
    },
    {
        character: "Agumon",
        anime: "Digimon",
        options: ["Digimon", "Pokémon", "Naruto", "One Piece"],
        icon: "fas fa-paw"
    },
    {
        character: "Light Yagami (Ryuk)",
        anime: "Death Note",
        options: ["Death Note", "Bleach", "Naruto", "Attack on Titan"],
        icon: "fas fa-apple-alt"
    },
    {
        character: "Shouya Ishida",
        anime: "A Silent Voice",
        options: ["A Silent Voice", "Your Name", "Clannad", "Toradora"],
        icon: "fas fa-volume-mute"
    },
    {
        character: "Shouko Nishimiya",
        anime: "A Silent Voice",
        options: ["A Silent Voice", "Your Name", "Clannad", "Toradora"],
        icon: "fas fa-deaf"
    },
    {
        character: "Taki Tachibana",
        anime: "Your Name",
        options: ["Your Name", "A Silent Voice", "Clannad", "Toradora"],
        icon: "fas fa-user"
    },
    {
        character: "Mitsuha Miyamizu",
        anime: "Your Name",
        options: ["Your Name", "A Silent Voice", "Clannad", "Toradora"],
        icon: "fas fa-female"
    },
    {
        character: "Tomoya Okazaki",
        anime: "Clannad",
        options: ["Clannad", "Your Lie in April", "Toradora", "Anohana"],
        icon: "fas fa-heart"
    },
    {
        character: "Nagisa Furukawa",
        anime: "Clannad",
        options: ["Clannad", "Your Lie in April", "Toradora", "Anohana"],
        icon: "fas fa-seedling"
    }
    ];
    
    // Game state
    let gameState = {
        score: 0,
        currentQuestion: 0,
        totalQuestions: quizQuestions.length,
        timeLeft: 30,
        timerInterval: null,
        gameActive: false
    };
    
// Initialize game
function initGame() {
    gameState.score = 0;
    gameState.currentQuestion = 0;
    gameState.timeLeft = 150;

    updateUI();
    loadQuestion()

    // Timer démarre une seule fois au début
    startTimer();

    resultOverlay.style.display = 'none';
    gameState.gameActive = true;
}
    
// Load question
function loadQuestion() {
    if (gameState.currentQuestion >= gameState.totalQuestions) {
        endGame();
        return;
    }
    
    const question = quizQuestions[gameState.currentQuestion];
    questionElement.textContent = `Which anime is ${question.character} from?`;
    characterImage.innerHTML = `<i class="${question.icon}"></i>`;
    
    // Clear options container
    optionsContainer.innerHTML = '';
    
    // Shuffle options
    const shuffledOptions = [...question.options].sort(() => Math.random() - 0.5);
    
    // Add options to container
    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option, question.anime));
        optionsContainer.appendChild(button);
    });
    
    // Update question count
    questionCountElement.textContent = `${gameState.currentQuestion + 1}/${gameState.totalQuestions}`;
    
    // Reset and start timer
    // resetTimer();
    // startTimer();
}

    
// Check answer
function checkAnswer(selectedOption, correctAnswer) {
    if (!gameState.gameActive) return;

    const options = document.querySelectorAll('.option-btn');
    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
        if (option.textContent === selectedOption && selectedOption !== correctAnswer) {
            option.classList.add('incorrect');
        }
        option.disabled = true;
    });

    if (selectedOption === correctAnswer) {
        gameState.score += 10;
        scoreElement.textContent = gameState.score;
    }

    gameState.gameActive = false;

    // Passe automatiquement à la prochaine question après 1.5s
    setTimeout(() => {
        nextQuestion();
    }, 500);
}
    
    // Next question
    function nextQuestion() {
        gameState.currentQuestion++;
        nextBtn.style.display = 'none';
        gameState.gameActive = true;

        // Vérifie si toutes les questions sont terminées
        if (gameState.currentQuestion >= gameState.totalQuestions) {
        endGame();
        return;
    }
        loadQuestion();
    }
    
// Start timer
function startTimer() {
    clearInterval(gameState.timerInterval);
    gameState.timerInterval = setInterval(() => {
        gameState.timeLeft--;
        timerElement.textContent = `${gameState.timeLeft}s`;
        
        if (gameState.timeLeft <= 0) {
            clearInterval(gameState.timerInterval);
            timeUp();
        }
    }, 1000);
}

    
    // Reset timer
        function resetTimer() {
            clearInterval(gameState.timerInterval);
            gameState.timeLeft = 150;
            timerElement.textContent = `${gameState.timeLeft}s`;
        }
    
    // Time's up
    function timeUp() {
        if (!gameState.gameActive) return;
        
        const question = quizQuestions[gameState.currentQuestion];
        const options = document.querySelectorAll('.option-btn');
        
        options.forEach(option => {
            if (option.textContent === question.anime) {
                option.classList.add('correct');
            }
            option.disabled = true;
        });
        
        gameState.gameActive = false;
        
    // Termine la partie quand le temps est écoulé
    setTimeout(() => {
        endGame();
    }, 1000);
    }
    
    // End game
    function endGame() {
        clearInterval(gameState.timerInterval);
        
        finalScoreElement.textContent = gameState.score;
        
        // Set result message based on score
        if (gameState.score >= 800) {
            resultTitle.textContent = "Anime Expert!";
            resultMessage.textContent = "Wow! You really know your anime characters!";
        } else if (gameState.score >= 500) {
            resultTitle.textContent = "Good Job!";
            resultMessage.textContent = "You have solid anime knowledge!";
        } else {
            resultTitle.textContent = "Keep Watching!";
            resultMessage.textContent = "You need to watch more anime!";
        }
        
        resultOverlay.style.display = 'flex';
        createConfetti();
    }
    
    // Update UI
    function updateUI() {
        scoreElement.textContent = gameState.score;
        questionCountElement.textContent = `${gameState.currentQuestion + 1}/${gameState.totalQuestions}`;
        timerElement.textContent = `${gameState.timeLeft}s`;
        nextBtn.style.display = 'none';
    }
    
    // Create celebration confetti
    function createConfetti() {
        const celebrateDiv = document.createElement('div');
        celebrateDiv.className = 'celebrate';
        document.body.appendChild(celebrateDiv);
        
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = (5 + Math.random() * 10) + 'px';
            confetti.style.height = (5 + Math.random() * 10) + 'px';
            
            celebrateDiv.appendChild(confetti);
            
            // Animate confetti
            const animationDuration = 1 + Math.random() * 2;
            const animationDelay = Math.random() * 2;
            
            confetti.style.animation = `
                fall ${animationDuration}s linear ${animationDelay}s infinite,
                sway ${animationDuration * 0.7}s ease-in-out ${animationDelay}s infinite alternate
            `;
        }
        
        // Remove confetti after animation completes
        setTimeout(() => {
            document.body.removeChild(celebrateDiv);
        }, 3000);
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', initGame);
    playAgainBtn.addEventListener('click', initGame);
    
    // Initialize the game
    initGame();
});
