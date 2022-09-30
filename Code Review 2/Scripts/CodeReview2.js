let Task = JSON.parse(tasks);
console.log(Task);

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
    <div class="card-body">
      <a href="#" class="card-link btn-1">Increase priority</a>
      <a href="#" class="card-link btn-2">Done</a>
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


