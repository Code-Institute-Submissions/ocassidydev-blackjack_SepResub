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

// function to build an array of card objects
function buildDeck(){
    let suits = ["clubs","spades","diamonds","hearts"];
    let deck = [];

    // nested for loop to populate deck
    for (let i of suits){
        for (let j = 1; j<14; j++){
            let newCard = new card(i,j);
            deck.push(newCard);
        }
    };

    return(deck);
}

// function for randomly sorting the array of cards
function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

// function that adds a card to the table
function playCard(deck, table){
    table.push(deck[0]);
    if(deck[0].id.length > 3){
        let aceBool = true;
    }    

    deck.shift();
    return aceBool;
}

// function that counts up card values
function tallyCard(table, aceBool){
    let value = 0;
    
    for (let i of table){
        if(i.id === "ace"){
            value += i.value(aceBool);
        }
        else{
            value += i.value;
        }
    }

    return(value);
}

deck = buildDeck();
shuffle(deck);

let playerChips = 10000;
let playerTable = [];
let playerVal = 0;
let aceBool = false;

// Plays first 2 
for(let i = 0; i < 2; i++){
    aceBool = playCard(deck, playerTable, aceBool);
    console.log(`You got the ${playerTable[playerTable.length-1].id} of ${playerTable[playerTable.length-1].suit}!`);
}

playerVal = tallyCard(playerTable, aceBool);

console.log(playerTable[0].id);
console.log(playerTable[1].id);
console.log(aceBool);
console.log(playerVal);

// while(playerVal<21){

// }

// if (playerVal < 21){

// }
// else if(playerVal === 21){
//     console.log("Blackjack!");
// }
// else{
//     console.log("You lose!")
// }
