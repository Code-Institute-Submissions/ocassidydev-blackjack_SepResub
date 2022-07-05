// function for randomly sorting the array of cards
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

// class for defining card objects
class card {
    constructor(suit,value) {
        switch(value) {
            case 1:
                this.id = "ace";
                // ace can have value of 1 or 11, this function is to handle this
                this.value = function(aceBool, value){
                    if(aceBool) {
                    return 11; 
                    }
                    else {
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

// function that adds a card to the table
function playCard(deck, table, aceBool){
    let cardVal;
    
    table.push(deck[0]);

    if(len(deck[0].id) > 3){
        aceBool = true;
    }

    if(deck[0].id === "ace"){
        cardVal = deck[0].value(aceBool);
    }
    else{
        cardVal = deck[0].value;
    }

    deck.shift();
    return(cardVal)
}

let suits = ["clubs","spades","diamonds","hearts"];
let deck = [];

// for loop to populate deck
for (let i of suits){
    for (let j = 1; j<14; j++){
        let newCard = new card(i,j);
        deck.push(newCard);
    }
};

shuffle(deck);

let playerChips = 10000;
let playerTable = [];
let playerVal = 0;
let aceBool = false;

// Plays first 2 
for(let i = 0; i < 2; i++){
    playerVal += playCard(deck, playerTable, aceBool);
}

while(playerVal<21){

}

