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
    let aceBool;
    
    table.push(deck[0]);
    if(deck[0].id.length > 3){
        aceBool = true;
    }

    console.log(`You got the ${deck[0].id} of ${deck[0].suit}!`);
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

// function that plays a round 
function playRound(deck, bet, player){
    let val = 0;
    let aceBool = false;
    let table = [];

    // Plays first 2 
    for(let i = 0; i < 2; i++){
        aceBool = playCard(deck, table);
    }

    val = tallyCard(table, aceBool);
    console.log(`Value on table: ${val}`);

    playingLoop:
    while(val<21){
        let input = prompt("hit, stay or double down?");
        switch (input){
            case "hit":
                aceBool = playCard(deck, table, aceBool);
                break;
            case "stay":
                break playingLoop;
            case "double down":
                bet *= 2;
                aceBool = playCard(deck, table, aceBool);
                playerVal = tallyCard(table, aceBool);
                console.log(`Value on table: ${val}`);
                break playingLoop;
            default:
                console.log("Incorrect input. Type 'hit', 'stay' or 'double down'");
                continue playingLoop;
        }

        val = tallyCard(table, aceBool);
        console.log(`Value on table: ${val}`);
    }
    return(val);
}

deck = buildDeck();
shuffle(deck);

let playerChips = 10000;
let bet = prompt("Bet how much?")
playerChips -= bet;

let playerVal = playRound(deck, bet, "player")

if (playerVal < 21){
    console.log("Dealer will now play");
}
else if(playerVal === 21){
    console.log("Blackjack!");
    console.log(`Won ${bet} chips!`);
    playerChips += bet*2;
}
else{
    console.log("You lose!")
    console.log(`Lost ${bet} chips!`);
}
