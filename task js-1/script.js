
let Foods =[
    "Apple","Banana", "Cherry", "Date", "Elderberry"
]


function showFoods(){
    console.clear()
    console.table(Foods);
}

function addNewFoodEnd(){
    let newFood = prompt("Enter a new food:");
    Foods.push(newFood);
    showFoods()
}

function addNewFoodStart(){
    let newFood = prompt("Enter a new food:");
    Foods.unshift(newFood);
    showFoods()
}

function removeLateFood(){
    Foods.pop();
    showFoods()

}    

function removeFristFood(){
    Foods.shift();
    showFoods()
}

function removeAnyFoods(){
    let foodindex = +prompt("Enter the index of the food to remove:");
    Foods.splice(foodindex, 1);
    showFoods()
}