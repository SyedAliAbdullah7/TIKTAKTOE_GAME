var t = []
var c = []
function game(fn1, fn2) {
    return (fn1, fn2);
}
function display(divid) {
    let Player = document.getElementById("playername").value
    let div = document.getElementById(divid)

    if (Player == "Player1") {
        div.innerHTML = "<img src=Tick.png width=100px height=100px />"
        t[(divid.charAt(1))] = 1
        document.getElementById("playername").value = "Player2"
    }
    else if (Player == "Player2") {
        div.innerHTML = "<img src=Cross.png width=100px height=100px />"
        c[(divid.charAt(1))] = 2
        document.getElementById("playername").value = "Player1"
    }
}
function screen(Winner) {
    let sc = document.getElementById("d2");
    sc.innerHTML = Winner + "Won";
    sc.className = "screen";
}
function refresh() {
    location.reload();
}

function result() {
    const winConditions = {
        row1: [1, 2, 3],
        row2: [4, 5, 6],
        row3: [7, 8, 9],
        col1: [1, 4, 7],
        col2: [2, 5, 8],
        col3: [3, 6, 9],
        diag1: [1, 5, 9],
        diag2: [3, 5, 7]
    }


    function winnerdivoccupied(position, player) {
        return position.every(pos => (player === 1 && t[pos] === 1) || (player === 2 && c[pos] === 2));
    }

    for (const condition in winConditions) {
        if (winConditions.hasOwnProperty(condition)) {
            if (winnerdivoccupied(winConditions[condition], 1)) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        screen("Player1")
                        resolve()
                    }, 300);
                }).then(setTimeout('refresh()', 1500));
            } else if (winnerdivoccupied(winConditions[condition], 2)) {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        screen("Player2")
                        resolve()
                    }, 300);
                }).then(setTimeout('refresh()', 1500));
            }
        }
    }
}
