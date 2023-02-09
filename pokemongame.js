

// DIV ID's

let p1nameDiv = document.getElementById("name1")

let p2nameDiv = document.getElementById("name2")

let p1health = document.getElementById("health1")

let p2health = document.getElementById("health2")

let resultDiv = document.getElementById("result")

let resetBtn = document.getElementById("reset")

let qBtn = document.getElementById("Q")

let aBtn = document.getElementById("A")

let pBtn = document.getElementById("P")

let lBtn = document.getElementById("L")


// Updates the display of the game on the webpage

const updateGame = (p1, p2, gameState) => {
    p1nameDiv.innerText = p1.name
    p2nameDiv.innerText = p2.name
    p1health.innerText = p1.health
    p2health.innerText = p2.health

    if (p1.health <= 0 || p2.health <= 0) {

        game.isOver = true
        gameState = game.isOver
        resultDiv.innerText = game.declareWinner(game.isOver, pokemon1, pokemon2)
        return gameState

    }


}


const play = () => {
    updateGame(pokemon1, pokemon2, game.isOver)
}


//Pokemon class which can create a pokemon with all it's attributes and methods.
class Pokemon {

    constructor(name, health, attack1, attack2) {
        this.name = name
        this.health = health
        this.attackdmg1 = attack1
        this.attackdmg2 = attack2
    }

    attack1(attacker, enemy, attackdmg1) {

        enemy.health -= attackdmg1



        updateGame(pokemon1, pokemon2, game.isOver)

        console.log(`${attacker.name} attacks ${enemy.name} for ${attackdmg1} damage`)

    }

    attack2(attacker, enemy, attackdmg2) {

        enemy.health -= attackdmg2

        updateGame(pokemon1, pokemon2, game.isOver)

        console.log(`${attacker.name} attacks ${enemy.name} for ${attackdmg2} damage`)

    }


}

//Game class with all it's attributes and methods to run a match
class Game {

    constructor() {
        this.isOver = false
    }

    declareWinner(isOver, pokemon1, pokemon2) {

        let message;

        if (isOver == true && pokemon1.health <= 0) {
            message = `${pokemon2.name} Wins!!`
            console.log(message)
        }

        else if (isOver == true && pokemon2.health <= 0) {
            message = `${pokemon1.name} Wins!!`
            console.log(message)

        }

        document.getElementById("victory").play()
        return message

    }

    reset(pokemon1, pokemon2) {
        pokemon1.health = 500
        pokemon2.health = 1000
        resultDiv.innerText = ''
        this.isOver = false
        updateGame(pokemon1, pokemon2, this.isOver)

    }

}

// Object creation.
let pokemon1 = new Pokemon("Pikachu", 500, 200, 50)

let pokemon2 = new Pokemon("Tentacruel", 1000, 50, 100)

let game = new Game()



console.log(pokemon1)

console.log(pokemon2)

//calls the updateGame function.
//updateGame(pokemon1,pokemon2,game.isOver)
play()

// Event Handlers.

document.addEventListener('keydown', (e) => {

    if (e.key == 'q' && pokemon2.health > 0 && game.isOver == false) {
        pokemon1.attack1(pokemon1, pokemon2, pokemon1.attackdmg1)
        document.getElementById("thunderbolt").play()


    }
})

document.addEventListener('keydown', (e) => {

    if (e.key == 'a' && pokemon2.health > 0 && game.isOver == false) {
        pokemon1.attack2(pokemon1, pokemon2, pokemon1.attackdmg2)
        document.getElementById("quickAttack").play()



    }
})

document.addEventListener('keydown', (e) => {

    if (e.key == 'p' && pokemon1.health > 0 && game.isOver == false) {
        pokemon2.attack1(pokemon2, pokemon1, pokemon2.attackdmg1)
        document.getElementById("gigaDrain").play()


    }
})

document.addEventListener('keydown', (e) => {

    if (e.key == 'l' && pokemon1.health > 0 && game.isOver == false) {
        pokemon2.attack2(pokemon2, pokemon1, pokemon2.attackdmg2)
        document.getElementById("hydroPump").play()


    }
})


resetBtn.onclick = () => {
    game.reset(pokemon1, pokemon2)
}

qBtn.onclick = () => {
    if (pokemon2.health > 0 && game.isOver == false) {
        pokemon1.attack1(pokemon1, pokemon2, pokemon1.attackdmg1)
        document.getElementById("thunderbolt").play()
    }
}

aBtn.onclick = () => {
    if (pokemon2.health > 0 && game.isOver == false) {
        pokemon1.attack2(pokemon1, pokemon2, pokemon1.attackdmg2)
        document.getElementById("quickAttack").play()
    }
}

pBtn.onclick = () => {
    if (pokemon1.health > 0 && game.isOver == false) {
        pokemon2.attack1(pokemon2, pokemon1, pokemon2.attackdmg1)
        document.getElementById("gigaDrain").play()
    }
}

lBtn.onclick = () => {
    if (pokemon1.health > 0 && game.isOver == false) {
        pokemon2.attack2(pokemon2, pokemon1, pokemon2.attackdmg2)
        document.getElementById("hydroPump").play()
    }
}
