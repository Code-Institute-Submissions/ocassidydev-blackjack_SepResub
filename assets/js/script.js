// Class definition for card objects
class card {
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

// Class definition for deck objects, which hold card objects
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

// Class definition for hand object, which hold card objects and game functions
class hand{
    constructor(player){
        this.cards = [];
        this.handOwner = player;
        this.nextCardSpot = [4,-1,1]
        // function that plays a card from the deck to the hand
        this.playCard = function(deck, discard) {
            if(deck.cards.length == 0){
                deck = discard;
                discard = new deck([]);
                deck.shuffle();
            }
            
            // This code block displays each card that was played, starting from the middle position
            let i = this.nextCardSpot[0];
            let imgName = `${deck.cards[0].id}${deck.cards[0].suit}`;

            let cardSpots = document.getElementById(this.handOwner+"-hand").children;
            let image = cardSpots[i].children[0];

            image.setAttribute("src", "assets/images/"+imgName+".png");
            cardSpots[i].style.paddingTop = 0;
            image.setAttribute("alt",`The ${deck.cards[0].id}of ${deck.cards[0].suit}`);

            this.nextCardSpot[0] += this.nextCardSpot[2] * this.nextCardSpot[1];
            this.nextCardSpot[1] *= -1;
            this.nextCardSpot[2] += 1;

            this.cards.push(deck.cards.shift());
        }
        // function that clear the cards from the hand
        this.discard = function(discardDeck) {
            let iter = this.cards.length;
            let cardSpots = document.getElementById(this.handOwner+"-hand").children;

            for(let j = iter; j>=0; j--){
                let i = this.nextCardSpot[0];
                let image = cardSpots[i].children[0];

                image.setAttribute("src", "");
                cardSpots[i].style.paddingTop = "14%";
                image.setAttribute("alt","");

                this.nextCardSpot[0] += (this.nextCardSpot[2]-1) * this.nextCardSpot[1];
                this.nextCardSpot[1] *= -1;
                this.nextCardSpot[2] -= 1;
                discardDeck.cards.push(this.cards.pop())
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

            console.log(`player has value ${sum} in hand!`);
            return sum;
        }
    }
}

// function to update chip display
function updateChips(value) {
    let chipSpan = document.getElementById("chips");
    let curChips = parseInt(chipSpan.innerHTML);
    let newChips = curChips + value;
    chipSpan.innerHTML = newChips; 
}

// function to update bet display
function updateBet() {
    let betSpan = document.getElementById("bet-chips");
    let curBet = parseInt(betSpan.innerHTML);
    let newBet = curBet + parseInt(document.getElementById("bet").value)
    
    betSpan.innerHTML = newBet;
}

// function that resets bet
function resetBet(){
    let betSpan = document.getElementById("bet-chips");
    betSpan.innerHTML = 0;
}

// function to begin the round
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
                endMessage(0);
            }
            else if(playerHand.sumUp()>21){
                endMessage(2);
            }
            break;
        case 3:
            let betSpan = getElementById("bet-chips");
            betSpan.innerHTML = parseInt(betSpan.innerHTML)*2;
            playerHand.playCard(deck, discard);
            if(playerHand.sumUp()===21){
                endMessage(0);
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

// function to display endgame message
function endMessage(returnValue){
    divDisappear("game-buttons-div");

    let endDiv = document.getElementById("end-message").children;
    let bet = parseInt(document.getElementById("bet-chips").innerHTML);

    switch(returnValue){
        case 0:
            endDiv[0].innerHTML = "Blackjack!";
            endDiv[1].innerHTML = `You won ${bet} chips!`;
            updateChips(bet);
            resetBet();
            break;
        case 1:
            endDiv[0].innerHTML = "You win!";
            endDiv[1].innerHTML = `You won ${bet} chips!`;
            updateChips(bet);
            resetBet();
            break;
        case 2:
            endDiv[0].innerHTML = "You lose!";
            endDiv[1].innerHTML = `You lost ${bet} chips...`
            updateChips(-bet);
            resetBet();
            break;
        case 3:
            endDiv[0].innerHTML = "Tie!";
            endDiv[1].innerHTML = `${bet} chips will be added to the next rounds bet`
            break;
        default:
            alert("Error: invalid return value for end of round");
    }

    divAppear("end-message");
}

function discard(playerHand, dealerHand, discardDeck) {
    playerHand.discard(discardDeck);
    dealerHand.discard(discardDeck);
}

function divDisappear(id) {
    document.getElementById(id).style.visibility = "hidden";
}

function divAppear(id) {
    document.getElementById(id).style.visibility = "visible";
}

window.onload = divAppear("welcome");

let suits = ["clubs","diamonds","hearts","spades"];

let cardDeck = new deck(suits);
let discardDeck = new deck([]);

cardDeck.shuffle();

let playerHand = new hand("player");
let dealerHand = new hand("dealer");