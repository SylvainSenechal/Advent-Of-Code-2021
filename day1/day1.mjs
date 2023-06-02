import {input} from './input.mjs'

let max = 0 
let currentCalories = 0
let storage = []
for (let calories of input.split("\n")) {
  if (calories == "") {
    max = Math.max(max, currentCalories)
    storage.push(Number(currentCalories))
    currentCalories = 0
  } else {
    currentCalories += Number(calories)
  }
}

console.log(max)
let sortedStorage = storage.sort((a, b) => a - b)
console.log(sortedStorage)
console.log(sortedStorage[sortedStorage.length-1] + sortedStorage[sortedStorage.length-2] + sortedStorage[sortedStorage.length-3])
console.log(sortedStorage[sortedStorage.length-1])
console.log(sortedStorage[sortedStorage.length-2])
console.log(sortedStorage[sortedStorage.length-3])
console.log(sortedStorage[0])
console.log(sortedStorage[1])

for (let calories of sortedStorage) {
  console.log(calories)

}