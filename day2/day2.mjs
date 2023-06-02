import {input} from './input.mjs'

const getMove = (opponent, hint) => {
  if (opponent == "A" && hint == "X") return "Z" 
  if (opponent == "A" && hint == "Y") return "X" 
  if (opponent == "A" && hint == "Z") return "Y"

  if (opponent == "B" && hint == "X") return "X"
  if (opponent == "B" && hint == "Y") return "Y" 
  if (opponent == "B" && hint == "Z") return "Z"

  if (opponent == "C" && hint == "X") return "Y"
  if (opponent == "C" && hint == "Y") return "Z"
  if (opponent == "C" && hint == "Z") return "X"

}

let points = 0
for (let game of input.split("\n")) {
  console.log(game)
  const [opponentMove, hint] = game.split(' ')
  console.log(opponentMove)
  console.log(hint)
  game = opponentMove + " " + getMove(opponentMove, hint)
  if (game == "A X") points += 1 + 3
  if (game == "A Y") points += 2 + 6
  if (game == "A Z") points += 3 + 0
  if (game == "B X") points += 1 + 0
  if (game == "B Y") points += 2 + 3
  if (game == "B Z") points += 3 + 6
  if (game == "C X") points += 1 + 6
  if (game == "C Y") points += 2 + 0
  if (game == "C Z") points += 3 + 3

}

console.log(points)