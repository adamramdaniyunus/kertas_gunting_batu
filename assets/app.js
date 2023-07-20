class nickname {

    constructor() {
        this.playerName = "You";
        this.botName = "BOT";
        this.playerOption;
        this.botOption;
        this.winner;
    }

    set setPlayerOption(pilihan) {
        this.playerOption = pilihan;
    }

    get getPlayerOption() {
        return this.playerOption;
    }

    set setBotOption(pilihan) {
        this.botOption = pilihan;
    }

    get getBotOption() {
        return this.botOption;
    }

    pilihanBot() {
        const pilihan = ["✌🏻", "✋🏻", "✊🏻"];
        const bot = pilihan[Math.floor(Math.random() * pilihan.length)];
        // console.log(bot);
        const BotResult = document.getElementById('botResult')

        BotResult.textContent = "..."
        setTimeout(function () {
            BotResult.textContent = bot
        }, 1500)
        return bot;
    }

    winner() {
        if ((this.botOption === "✌🏻" && this.playerOption === "✋🏻") ||
            (this.botOption === "✋🏻" && this.playerOption === "✊🏻") ||
            (this.botOption === "✊🏻" && this.playerOption === "✌🏻")) {
            return this.winner = this.botName;
        } else if ((this.botOption === "✌🏻" && this.playerOption === "✊🏻") ||
            (this.botOption === "✋🏻" && this.playerOption === "✌🏻") ||
            (this.botOption === "✊🏻" && this.playerOption === "✋🏻")) {
            return this.winner = this.playerName;
        } else {
            return this.winner = "SERI";
        }
    }


    hasil() {
        if (this.winner != "SERI") {
            return `${this.winner}, WIN`;
        } else {
            return `DRAW`;
        }
    }


}

function pilihan(hand) {
    const mulai = new nickname();
    mulai.setPlayerOption = hand;
    mulai.setBotOption = mulai.pilihanBot();
    mulai.winner();
    judul.style.color = 'yellow';
    judul.textContent = judul.style.color;
    judul.textContent = `⚔️`;
    hasil.style.color = 'yellow';
    hasil.textContent = hasil.style.color;
    hasil.textContent = `...`;


    setTimeout(() => {
        judul.style.color = 'yellow';
        judul.textContent = judul.style.color;
        judul.textContent = `${mulai.getBotOption} VS ${mulai.getPlayerOption}`;
        hasil.textContent = mulai.hasil();
    }, 1500);

    const Result = document.getElementById('result')
    Result.textContent = hand
    // console.log(hand);
}
