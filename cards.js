function shuffle(arr) {
    arr.sort(() => Math.random() - 0.5);
}

class card {
    constructor(suit,value) {
        switch(value) {
            case 1:
                this.id = "ace";
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

let suits = ["clubs","spades","diamonds","hearts"];
let deck = [];

for (let i of suits){
    for (let j = 1; j<14; j++){
        let newCard = new card(i,j);
        deck.push(newCard);
    }
};

shuffle(deck);
console.log(deck);