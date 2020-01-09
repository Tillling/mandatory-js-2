var i = 0;
var player1Wins = 0;
var player2Wins = 0;
var myCollectionOfBoxes = Array.from(document.querySelectorAll(".box"));

function startGame() {
    document.querySelectorAll(".container").forEach(box => box.addEventListener("click", playMove));
}

let myButton = document.querySelector("button").addEventListener("click", resetBoard);

startGame();

var myAbstractArray = [];

function playMove(e) {

    if (i % 2 === 0) {

        const element = document.querySelector(".box")
        if (e.target.childNodes.length === 0) {

            let myCross = document.createElement("img");
            myCross.src = "cross.png";

            let newCross = new Cross(myCross);

            function Cross(myCross) {

                this.newCross = myCross;

                e.target.appendChild(myCross);
                i++;

                myAbstractArray[e.target.id] = "x";
                console.log(myAbstractArray);
                let result = didAnyoneWin(myAbstractArray);
                if (result) {
                    winner(result);
                }
            }
        }
    }

    else {

        const element = document.querySelector(".box")
        if (e.target.childNodes.length === 0) {

            let myCircle = document.createElement("img");
            myCircle.src = "circle.png";
            e.target.appendChild(myCircle);

            i++;

            myAbstractArray[e.target.id] = "o";

            let result = didAnyoneWin(myAbstractArray);
            if (result) {
                winner(result);
            }
        }
    }
}

let main = document.querySelector("main");

function winner(result) {

    document.querySelectorAll(".container").forEach(box => box.removeEventListener("click", playMove));


    if (result === "x") {

        player1Wins++;
        document.querySelector(".player1").textContent = `Player 1 : ${player1Wins}`;

    }

    else {

        player2Wins++;
        document.querySelector(".player2").textContent = `Player 2 : ${player2Wins}`;
    }
}

function didAnyoneWin(myArray) {

    if (myArray[0] === myArray[1] && myArray[1] === myArray[2] && myArray[0] !== null) { return myArray[0]; }
    else if (myArray[3] === myArray[4] && myArray[4] === myArray[5] && myArray[4] !== null) { return myArray[3]; }
    else if (myArray[6] === myArray[7] && myArray[7] === myArray[8] && myArray[6] !== null) { return myArray[6]; }

    else if (myArray[0] === myArray[3] && myArray[3] === myArray[6] && myArray[0] !== null) { return myArray[0]; }
    else if (myArray[1] === myArray[4] && myArray[4] === myArray[7] && myArray[1] !== null) { return myArray[1]; }
    else if (myArray[2] === myArray[5] && myArray[5] === myArray[8] && myArray[2] !== null) { return myArray[2]; }

    else if (myArray[0] === myArray[4] && myArray[4] === myArray[8] && myArray[0] !== null) { return myArray[0]; }
    else if (myArray[2] === myArray[4] && myArray[4] === myArray[6] && myArray[2] !== null) { return myArray[2]; }

    return null;
}

function resetBoard(e) {

    myAbstractArray = [0, 0, 0, 0, 0, 0, 0, 0];

    let myCollectionOfBoxes = Array.from(document.querySelectorAll(".box"));

    myCollectionOfBoxes.forEach(box => {
        if (box.children.length !== 0) {
            box.removeChild(box.childNodes[0]);
            i = 0;
        }
    });

    startGame();
}