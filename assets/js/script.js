// class for defining card objects
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

// Class definition for hand object
class hand{
    constructor(player){
        this.cards = [];
        this.handOwner = player;
        // function that plays a card from the deck to the hand
        this.playCard = function(deck) {
            console.log(`${this.handOwner} got the ${deck.cards[0].id} of ${deck.cards[0].suit}!`)
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
            
            for(let i in this.cards){
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

// function sumUpHand(hand){

// }

let suits = ["clubs","diamonds","hearts","spades"]

let cardDeck = new deck(suits);
let discardDeck = new deck([]);

cardDeck.shuffle();

let playerHand = new hand("player");
let dealerHand = new hand("dealer");

playerHand.playCard(cardDeck);
playerHand.playCard(cardDeck);

playerHand.discard(discardDeck);