function rectangularCollision({rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
    )
}

function determineWinner({ player, enemy, timerId }){
    clearTimeout(timerId)
    document.querySelector('#displaText').style.display = 'flex'
    if  (player.health === enemy.health) {
        document.querySelector('#displaText').innerHTML = 'Tie'
    }else if (player.health > enemy.health) {
        document.querySelector('#displaText').innerHTML = 'Player 1 Wins'
    }else if (player.health < enemy.health) {
        document.querySelector('#displaText').innerHTML = 'Player 2 Wins'
    }
}

let timerId
let timer = 60
function decreaseTimer() {
    if ( timer > 0){
        timerId = setTimeout(decreaseTimer, 1000)
        timer--
        document.querySelector('#timer').innerHTML = timer
    }

    if (timer === 0){
        determineWinner({player: this, enemy, timerId})
    }
    
}