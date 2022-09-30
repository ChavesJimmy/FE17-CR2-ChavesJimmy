let Task = JSON.parse(tasks);
console.log(Task);

let newcard = document.getElementById("container");

// function print JSON array in HTML
function print(){
    
    for(let i=0; i<Task.length; i++){
    let card =`<div class="card col p-3" style="width: 18rem;">
                <img src="${Task[i].image}" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${Task[i].taskName}</h5>
                <p class="card-text">Description : ${Task[i].description}</p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Time : ${Task[i].time}</li>
                <li class="list-group-item">Importance : <p class="priority-amount">${Task[i].importance}/5</p></li>
                <li class="list-group-item">Location => ${Task[i].location}</li>
                </ul>
                <div class="card-body all-btn">
                <a href="#" class="card-link btn-1">Increase priority</a>
                <a href="#" class="card-link btn-2">Decrease priority</a>
                </div>
                </div>`;
    
    newcard.innerHTML += card;
    
    
}
}
print();


// function to increase the importance
function increase(i){
    if(Task[i].importance != 5){
    Task[i].importance++;
    document.getElementsByClassName("priority-amount")[i].innerHTML = `${Task[i].importance}/5`;
    }
    //backgroundcolor change by increase (thanks for the hint)
    let bgPriority = document.getElementsByClassName("priority-amount");

    if (Task[i].importance >1 && Task[i].importance <4){
        bgPriority[i].style.backgroundColor = "yellow";
    }
    else if (Task[i].importance >3){
        bgPriority[i].style.backgroundColor = "red";
    }
    else if (Task[i].importance <2){
        bgPriority[i].style.backgroundColor = "greenyellow";
    }

    }
function addClick() {
    let increaseButtons = document.getElementsByClassName("btn-1");

    for (let i = 0; i < increaseButtons.length; i++){
    increaseButtons[i].addEventListener("click", function(){
        increase(i);
    })
    }
    }
addClick();

// function to decrease the importance (it was a nightmare to set it up)

function decrease(i){
    if(Task[i].importance != 0){
    Task[i].importance--;
    document.getElementsByClassName("priority-amount")[i].innerHTML = `${Task[i].importance}/5`;
    }
    // backgroundcolor change by decrease
    let bgPriority = document.getElementsByClassName("priority-amount");

    if (Task[i].importance >1 && Task[i].importance <4){
        bgPriority[i].style.backgroundColor = "yellow";
    }
    else if (Task[i].importance >3){
        bgPriority[i].style.backgroundColor = "red";
    }
    else if (Task[i].importance <2){
        bgPriority[i].style.backgroundColor = "greenyellow";
    }
    

}
function addClick2(){
    let decreaseButtons = document.getElementsByClassName("btn-2");

    for (let i = (decreaseButtons.length)-1 ; i >= 0 ; i--){
    decreaseButtons[i].addEventListener("click", function(){
        decrease(i);
    })
    }
    }
addClick2();


//function to sort by importance
document.getElementById("sort").onclick = sortByPriority;

function sortByPriority(){
    Task.sort((a, b) => b.importance - a.importance);
    console.table(Task);

    newcard.innerHTML="";
    print();
    addClick();
    addClick2();
}






