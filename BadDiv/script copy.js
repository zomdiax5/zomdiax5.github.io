const Body = document.getElementById("body")
const StartButton = document.getElementById("StartButton")
const Info = document.getElementById('info')

StartButton.addEventListener('click',Start)

function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr;
}

var divs = createArray(50, 50)

for (let x = 0; x < 50; x++) {
    for (let y = 0; y < 50; y++) {
        const div = document.createElement('div');
        div.setAttribute('id', `${x}-${y}`);
        div.style.gridColumn = `${x + 1}`
        div.style.gridRow = `${y + 1}`
        Body.appendChild(div);
        divs[x][y] = div
    }
}

let on = false
let frame = 0

window.onload = function () {
    function test() {
        if (on) {
            for (let x = 0; x < 50; x++) {
                for (let y = 0; y < 50; y++) {
                    console.log(data[`${frame}`][x+(y*50)])
                    if (data[`${frame}`][x+(y*50)] == 1) {
                        divs[x][y].style.backgroundColor = 'black'
                    }
                    else {
                        divs[x][y].style.backgroundColor = 'white'
                    }
                }
            }
            frame+=1;
            console.log(frame)
        }
        else {
            for (let x = 0; x < 50; x++) {
                for (let y = 0; y < 50; y++) {
                    let z = parseInt(Math.random() * 2)
                    if (z == 0) {
                        divs[x][y].style.backgroundColor = 'black'
                    }
                    else {
                        divs[x][y].style.backgroundColor = 'white'
                    }
                }
            }
        }
    }
    setInterval(test, 1000);
}

function Start(){
    on=true
}
