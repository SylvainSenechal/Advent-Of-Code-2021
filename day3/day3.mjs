import {input} from './input.mjs'

let sum = 0
const bags = input.split("\n")
for (let bag of bags) {
  const part1 = new Set(bag.slice(0, bag.length / 2))
  const part2 = new Set(bag.slice(bag.length / 2, bag.length))
  for (let elem of part1) {
    if (part2.has(elem)) {
      if (elem.charCodeAt() > 96) {
        sum += elem.charCodeAt() - 96
      } else {
        sum += elem.charCodeAt() - 38
      }
    }
  }
}
console.log(sum)

let sumP2 = 0
for (let i = 0; i < bags.length; i+= 3) {
  const threeBags = bags.slice(i, i + 3)
  const b1 = new Set(threeBags[0])
  const b2 = new Set(threeBags[1])
  const b3 = new Set(threeBags[2])
  for (let elem of b1) {
    if (b2.has(elem) && b3.has(elem)) {
      if (elem.charCodeAt() > 96) {
        sumP2 += elem.charCodeAt() - 96
      } else {
        sumP2 += elem.charCodeAt() - 38
      }
    }
  }
}

console.log(sumP2)