const mainGame = document.querySelector('.main');
const pickaxe = document.querySelector('.pickaxe');
const axe = document.querySelector('.axe');
const shovel = document.querySelector('.shovel');
const boxContainer = document.querySelector('.box-container');
let worldMatrix = [
  ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "leafs", "leafs", "leafs", "leafs", "leafs", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "leafs", "leafs", "leafs", "leafs", "leafs", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "leafs", "leafs", "leafs", "leafs", "leafs", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "leafs", "leafs", "leafs", "leafs", "leafs", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "wood", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "wood", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
  ["sky", "sky", "sky", "sky", "sky", "sky", "sky", "wood", "sky", "sky", "sky", "sky", "sky", "sky", "sky"],
  ["ground_grass", "ground_grass", "stone", "ground_grass", "stone", "stone", "ground_grass", "ground_grass", "ground_grass", "ground_grass", "ground_grass", "ground_grass", "ground_grass", "ground_grass", "ground_grass"],
  ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
  ["ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground", "ground"],
];
for (let i = 0; i < worldMatrix.length; i++) {
  let rows = worldMatrix[i];
  for (let j = 0; j < rows.length; j++) {
    const element = rows[j];
    let box = document.createElement('div');
    box.setAttribute('class', element);
    box.classList.add('box');
    mainGame.append(box);
  }
}
const box = document.querySelectorAll(".box");
const stone = document.querySelectorAll(".stone")
const wood = document.querySelectorAll(".wood")
const leafs = document.querySelectorAll(".leafs")
const ground = document.querySelectorAll(".ground")
const ground_grass = document.querySelectorAll(".ground_grass")
const fitTool = {
  pickaxe: ["stone"],
  axe: ["wood", "leafs"],
  shovel: ["ground", "ground_grass"]
}
let choosenTool = '';
axe.addEventListener("click", function () {
  choosenTool = "axe"
})
pickaxe.addEventListener("click", function () {
  choosenTool = "pickaxe"
})
shovel.addEventListener("click", function () {
  choosenTool = "shovel"
})
boxContainer.addEventListener("click", function () {
  choosenTool = "boxcontainer"
})
stone.forEach(item => {
  item.addEventListener('click', event => {
    if (choosenTool === "pickaxe") {
      item.setAttribute("class", "sky")
      let bank = document.createElement("div")
      bank.setAttribute("class", "stone");
      boxContainer.appendChild(bank)
    }
  })
})
wood.forEach(item => {
  item.addEventListener('click', event => {
    if (choosenTool === "axe") {
      item.setAttribute("class", "sky")
      let bank = document.createElement("div")
      bank.setAttribute("class", "wood");
      boxContainer.appendChild(bank)
    }
  })
})
leafs.forEach(item => {
  item.addEventListener('click', event => {
    if (choosenTool === "axe") {
      item.setAttribute("class", "sky")
      let bank = document.createElement("div")
      bank.setAttribute("class", "leafs");
      boxContainer.appendChild(bank)
    }
  })
})
ground.forEach(item => {
  item.addEventListener('click', event => {
    if (choosenTool === "shovel") {
      item.setAttribute("class", "sky")
      let bank = document.createElement("div")
      bank.setAttribute("class", "ground");
      boxContainer.appendChild(bank)
    }
  })
})
ground_grass.forEach(item => {
  item.addEventListener('click', event => {
    if (choosenTool === "shovel") {
      item.setAttribute("class", "sky")
      let bank = document.createElement("div")
      bank.setAttribute("class", "ground_grass");
      boxContainer.appendChild(bank)
    }
  })
})
box.forEach(item => {
  item.addEventListener("click", event => {
    if (choosenTool === "boxcontainer") {
      item.setAttribute("class", boxContainer.children[0].className)
      boxContainer.innerHTML = '';
    }
  })
})
