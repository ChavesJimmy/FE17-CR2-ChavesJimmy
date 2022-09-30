let Task = JSON.parse(tasks);
console.log(Task);
console.log(Task.length);

function print(){
    let newcard = document.getElementById("container");

    for(let i=0; i<Task.length; i++){
    let card =`<div class="card col p-3" style="width: 18rem;">
    <img src="${Task[i].image}" class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">${Task[i].taskName}</h5>
      <p class="card-text">${Task[i].description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${Task[i].time}</li>
      <li class="list-group-item">Importance : <p class="priority-amount">${Task[i].importance}/5</p></li>
      <li class="list-group-item">Done ? => ${Task[i].done}</li>
    </ul>
    <div class="card-body all-btn">
      <a href="#" class="card-link btn-1">Increase priority</a>
      <a href="#" class="card-link btn-2">Decrease priority</a>
    </div>
  </div>`
    
    newcard.innerHTML += card;
}
}
print();

// function to increase the importance
function increase(i){
    if(Task[i].importance != 5){
    Task[i].importance++;
    document.getElementsByClassName("priority-amount")[i].innerHTML = `${Task[i].importance}/5`

    }

}
let increaseButtons = document.getElementsByClassName("btn-1")

for (let i = 0; i < increaseButtons.length; i++){
    increaseButtons[i].addEventListener("click", function(){
        increase(i);
    })
}

// function to decrease the importance

function decrease(i){
    if(Task[i].importance != 0){
    Task[i].importance--;
    document.getElementsByClassName("priority-amount")[i].innerHTML = `${Task[i].importance}/5`

    }

}
let decreaseButtons = document.getElementsByClassName("btn-2")

// in for loop i=decreaseButtons.length but must be doesn't work if written let i = decreaseButtons.length so i added the value.
for (let i = 6 ; i < decreaseButtons.length ; i--){
    decreaseButtons[i].addEventListener("click", function(){
        decrease(i);
    })
}




