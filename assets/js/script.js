/**
 * Cards objects have name, in-game value and suit
 */
class Card {
    constructor(suit, value) {
        switch (value) {
            case 1:
                this.id = "ace";
                // ace can have value of 1 or 11, this function is to handle this
                this.value = function(sum) {
                    if(sum<11) {
                        return 11;
                    }
                    else {
                        return 1;
                    }
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

/**
 * Decks hold card objects
 */
class Deck{
    constructor(suits){
        this.cards = [];

        // nested for loop to populate deck
        for(let i of suits) {
            for(let j = 1; j<14; j++){
                let newCard = new Card(i, j);
                this.cards.push(newCard);
            }
        }

        /**
         * randomly sorts the array of cards
         */
        this.shuffle = function() {
            let j;
            let k;

            for (let i = this.cards.length-1; i > 0; i--) {
                j = Math.floor(Math.random() * i);
                k = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = k;
            } 
        }
    }
}

/**
 * Hands hold cards in play and various methods for the game
 */
class Hand{
    constructor(player){
        this.cards = [];
        this.handOwner = player;
        this.nextCardSpot = [4,-1,1];
        this.cardPadding = 0;
        /**
         * plays a card from the deck to the hand
         * @param {Deck} deck 
         * @param {Deck} discard 
         */
        this.playCard = function(deck, discard) {
            if(deck.cards.length == 0){
                deck.cards = discard.cards;
                discard.cards = [];
                deck.shuffle();
            }
            
            // This code block displays each card that was played, starting from the middle position
            const i = this.nextCardSpot[0];
            const imgName = `${deck.cards[0].id}${deck.cards[0].suit}`;

            const cardSpots = document.getElementById(this.handOwner+"-hand").children;
            const image = cardSpots[i].children[0];

            image.setAttribute("src", "assets/images/"+imgName+".png");
            cardSpots[i].style.paddingTop = 0;
            image.setAttribute("alt",`The ${deck.cards[0].id}of ${deck.cards[0].suit}`);

            this.nextCardSpot[0] += this.nextCardSpot[2] * this.nextCardSpot[1];
            this.nextCardSpot[1] *= -1;
            this.nextCardSpot[2] += 1;

            this.cards.push(deck.cards.shift());
        }
        /**
         * clear the cards from the hand, both in memory and in UI
         * @param {Deck} discardDeck 
         */
        this.discard = function(discardDeck) {
            const iter = this.cards.length;
            const cardSpots = document.getElementById(this.handOwner+"-hand").children;
            let i;
            let image;

            for(let j = iter; j>=0; j--){
                i = this.nextCardSpot[0];
                image = cardSpots[i].children[0];

                image.setAttribute("src", "");
                cardSpots[i].style.paddingTop = "14%";
                image.setAttribute("alt","");

                this.nextCardSpot[0] += (this.nextCardSpot[2]-1) * this.nextCardSpot[1];
                this.nextCardSpot[1] *= -1;
                this.nextCardSpot[2] -= 1;
                if (j != 0){
                    discardDeck.cards.push(this.cards.pop());
                }
            }

            this.nextCardSpot = [4,-1,1];
        }
        // function that adds up the value of the hand
        this.sumUp = function() {
            let sum = 0;
            
            for(let i of this.cards){
                if(i.id === "ace"){
                    sum += i.value(sum);
                }
                else{
                    sum += i.value;
                }
            }

            document.getElementById(this.handOwner+"-value").innerHTML = sum;
            return sum;
        }
    }
}

/**
 * updating player chips
 * @param {int} value 
 */
function updateChips(value) {
    const chipSpan = document.getElementById("chips");
    const curChips = parseInt(chipSpan.innerHTML);
    let newChips = curChips + value;

    chipSpan.innerHTML = newChips; 

    if(newChips < 200){
        document.getElementById("bet").setAttribute("max", newChips.toString());
    }
    else{
        document.getElementById("bet").setAttribute("max", 200);
    }

    if(newChips === 0){
        const endDiv = document.getElementById("end-message").children;
        endDiv[0].innerHTML = "Out of chips!";
        endDiv[1].innerHTML = "You gambled away every chip you had. However, as we're feeling nice, have another 1,000!"
        endDiv[2].innerHTML = "Thanks";
        endDiv[2].setAttribute("onclick", "discard(playerHand, dealerHand, discardDeck); updateChips(1000); divDisappear('end-message'); divAppear('gamble-amount');")
        document.getElementById("bet").setAttribute("max", 200);
    }
    // Easrter egg if the player gets to 10000
    else if(newChips > 10000){
        const endDiv = document.getElementById("end-message").children;
        endDiv[0].innerHTML = "Stop Cheating!";
        endDiv[1].innerHTML = "We can tell you're counting cards! Get out of our casino!"
        endDiv[2].innerHTML = "Run away";
        endDiv[2].setAttribute("onclick", "window.location.reload();")
    }
}

/**
 * update bet display
 */
function updateBet() {
    const betSpan = document.getElementById("bet-chips");
    const curBet = parseInt(betSpan.innerHTML);
    const newBet = curBet + parseInt(document.getElementById("bet").value)
    
    betSpan.innerHTML = newBet;
}

/**
 * resets bet
 */
function resetBet(){
    const betSpan = document.getElementById("bet-chips");
    betSpan.innerHTML = 0;
}

/**
 * begin the round
 * @param {Hand} hand 
 * @param {Deck} deck 
 * @param {Discard} discard 
 */
function startRound(hand, deck, discard){
    for(let i=0; i<2; i++){
        hand.playCard(deck, discard);
    }
    if(hand.sumUp() == 21) {
        endMessage(0);
    }
    else{
        divAppear('game-buttons-div');
        divAppear("double-down");
    }
}

/**
 * taking player control input
 * @param {Hand} playerHand 
 * @param {Hand} dealerHand 
 * @param {Deck} deck 
 * @param {Deck} discard 
 * @param {int} choice 
 */
function roundContinue(playerHand, dealerHand, deck, discard, choice){
    switch(choice) {
        case 1:
            divDisappear("double-down");
            dealerPlay(dealerHand, deck, discard, playerHand.sumUp());
            break;
        case 2:
            divDisappear("double-down");
            playerHand.playCard(deck, discard);
            if(playerHand.sumUp()===21){
                endMessage(1);
            }
            else if(playerHand.sumUp()>21){
                endMessage(2);
            }
            break;
        case 3:
            divDisappear("double-down");
            let betSpan = document.getElementById("bet-chips");
            betSpan.innerHTML = parseInt(betSpan.innerHTML)*2;
            playerHand.playCard(deck, discard);
            if(playerHand.sumUp()===21){
                endMessage(1);
            }
            else if(playerHand.sumUp()>21){
                endMessage(2);
            }
            else{
                dealerPlay(dealerHand, deck, discard, playerHand.sumUp());
            }
            break;
        default:
            alert("Error: Invalid player control");
    }
}

/**
 * dealer tries to beat player, or draw over 17
 * @param {Hand} hand 
 * @param {Deck} deck 
 * @param {Deck} discard 
 * @param {int} beatVal 
 */
function dealerPlay(hand, deck, discard, beatVal){
    divDisappear("game-buttons-div");

    while(hand.sumUp() <= beatVal && (hand.sumUp() < 17 || hand.sumUp() != beatVal)){
        hand.playCard(deck, discard);
    }

    if(hand.sumUp() > 21){
        endMessage(1);
    }
    else if(hand.sumUp() <= 21 && hand.sumUp() > beatVal){
        endMessage(2);
    }
    else if(hand.sumUp() <= 21 && hand.sumUp() === beatVal){
        endMessage(3);
    }
    else{
        alert("Error when playing dealer hand");
    }
}

/**
 * Displays endgames messages
 * @param {int} returnValue 
 */
function endMessage(returnValue){
    divDisappear("game-buttons-div");

    const endDiv = document.getElementById("end-message").children;
    endDiv[2].innerHTML = "Play again";
    let bet = parseInt(document.getElementById("bet-chips").innerHTML);

    switch(returnValue){
        case 0:
            endDiv[0].innerHTML = "Blackjack!";
            bet *= 1.5;
            endDiv[1].innerHTML = `You won ${bet} chips!`;
            
            updateChips(bet);
            resetBet();
            break;
        case 1:
            endDiv[0].innerHTML = "You win!";
            endDiv[1].innerHTML = `Won ${bet} chips!`;
            updateChips(bet);
            resetBet();
            break;
        case 2:
            endDiv[0].innerHTML = "You lose!";
            endDiv[1].innerHTML = `Lost ${bet} chips...`
            updateChips(-bet);
            resetBet();
            break;
        case 3:
            endDiv[0].innerHTML = "Tie!";
            endDiv[1].innerHTML = `${bet} chips will be added to the next rounds bet.`
            break;
        default:
            alert("Error: invalid return value for end of round");
    }

    divAppear("end-message");
}

/**
 * moves cards in player and dealer hands to discard
 * @param {Hand} playerHand 
 * @param {Hand} dealerHand 
 * @param {Deck} discardDeck 
 */
function discard(playerHand, dealerHand, discardDeck) {
    playerHand.discard(discardDeck);
    document.getElementById("player-value").innerHTML = 0;
    dealerHand.discard(discardDeck);
    document.getElementById("dealer-value").innerHTML = 0;
}

/**
 * hides element of id
 * @param {string} id 
 */
function divDisappear(id) {
    document.getElementById(id).style.visibility = "hidden";
}

/**
 * shows element of id
 * @param {string} id 
 */
function divAppear(id) {
    document.getElementById(id).style.visibility = "visible";
}

window.onload = divAppear("welcome");

const suits = ["clubs","diamonds","hearts","spades"];

const cardDeck = new Deck(suits);
const discardDeck = new Deck([]);

const playerHand = new Hand("player");
const dealerHand = new Hand("dealer");