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
            
            console.log(`${this.handOwner} got the ${deck.cards[0].id} of ${deck.cards[0].suit}!`);
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

            for(let i = 0; i<iter; i++){
                discardDeck.cards.push(this.cards.pop())
            }
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

function giveChips(playerChips) {
    document.getElementById("chips").innerHTML = playerChips;
}

function startRound(hand, deck){
    bet = document.getElementById("bet").value;

    for(let i=0; i<2; i++){
        hand.playCard(deck);
    }

    if(hand.sumUp() == 21) {
        blackjack();
    }
    else{
        callback();
    }
}

function blackjack(){
    divAppear("blackjack");
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