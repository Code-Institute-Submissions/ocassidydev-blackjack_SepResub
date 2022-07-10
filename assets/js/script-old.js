// class for defining card objects
class card {
    constructor(suit, value) {
        switch (value) {
            case 1:
                this.id = "ace";
                // ace can have value of 1 or 11, this function is to handle this
                this.value = function (aceBool, value) {
                    if (aceBool) {
                        return 11;
                    } else {
                        return 1;
                    };
                };
                break;
            case 11:
                this.id = "jack";
                this.value = 10;
                break;
            case 12:
                this.id = "queen";
                this.value = 10;
                break;
            case 13:
                this.id = "king";
                this.value = 10;
                break;
            default:
                this.id = value.toString();
                this.value = value;
        };
        this.suit = suit;
    }
};

// Class definition for deck objects
class deck{
    constructor(suits){
        this.cards = [];

        // nested for loop to populate deck
        for(let i of suits) {
            for(let j = 1; j<14; j++){
                let newCard = new card(i, j);
                this.cards.push(newCard);
            }
        }

        // function for randomly sorting the array of cards
        this.shuffle = function() {
            this.cards.sort(() => Math.random() - 0.5);
        }
    }
}

// function that adds a card to the table
function playCard(deck, table, player) {
    let aceBool = false;

    table.push(deck[0]);
    if (deck[0].id.length > 3) {
        aceBool = true;
    }
    
    console.log(`${player} got the ${deck[0].id} of ${deck[0].suit}!`);
    deck.shift();

    return aceBool;
}

// function that counts up card values
function tallyCard(table, aceBool) {
    let value = 0;

    for (let i of table) {
        if (i.id === "ace") {
            value += i.value(aceBool);
        } else {
            value += i.value;
        }
    }

    return (value);
}

// function that plays a round 
function playRound(deck, bet, player, beatValue) {
    let val = 0;
    let aceBool = false;
    let table = [];

    // Plays first 2 
    for (let i = 0; i < 2; i++) {
        aceBool = playCard(deck, table, player)
    }

    val = tallyCard(table, aceBool);
    console.log(`Value on table: ${val}`);

    if (player === "You") {
        playingLoop: while (val < 21) {
            let input = prompt("hit, stay or double down?");
            switch (input) {
                case "hit":
                    console.log("Hit");
                    aceBool = playCard(deck, table, player);
                    break;
                case "stay":
                    console.log("Stay")
                    break playingLoop;
                case "double down":
                    console.log("Double down!");
                    bet *= 2;
                    aceBool = playCard(deck, table, player)
                    val = tallyCard(table, aceBool);
                    console.log(`Value on table: ${val}`);
                    break playingLoop;
                default:
                    console.log("Incorrect input. Type 'hit', 'stay' or 'double down'");
                    continue playingLoop;
            }
            val = tallyCard(table, aceBool);
            console.log(`Value on table: ${val}`);
        }
    }
    else if (player === "Dealer") {
        while (val < beatValue) {
            aceBool = playCard(deck, table, player)
            val = tallyCard(table, aceBool);
            console.log(`Value on table: ${val}`);
        }
    }
    return [val, bet];
}


let suits = ["clubs","diamonds","hearts","spades"]

let cardDeck = new deck(suits);
let discardDeck = new deck([]);

cardDeck.shuffle();

for(let i of cardDeck.cards){
    console.log(`The ${i.id} of ${i.suit}`);
}

console.log(cardDeck.cards.length);
console.log(discardDeck.cards.length);

// let playerChips = 10000;

// while (playerChips > 0) {
//     console.log(`You have ${playerChips} chips`)
//     let bet = prompt("Bet how much?")

//     values = playRound(deck, bet, "You", NaN);
//     let playerVal = values[0];
//     bet = values[1];

//     if (playerVal < 21) {
//         console.log("Dealer will now play");
//     } else if (playerVal === 21) {
//         console.log("Blackjack!");
//         console.log(`Won ${bet} chips!`);
//         playerChips += bet;
//         continue;
//     } else {
//         console.log("You lose!");
//         console.log(`Lost ${bet} chips!`);
//         playerChips -= bet;
//         continue;
//     }

//     values = playRound(deck, bet, "Dealer", playerVal);
//     let dealerVal = values[0];

//     if (playerVal > dealerVal || dealerVal > 21) {
//         console.log("You win!");
//         console.log(`Won ${bet} chips!`);
//         playerChips += bet;
//     } else if (playerVal === dealerVal) {
//         console.log("Standoff!");
//     } else {
//         console.log("You lose!");
//         console.log(`Lost ${bet} chips!`);
//         playerChips -= bet;
//     }
// }

// queen bug + concatenation