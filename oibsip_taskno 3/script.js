
let input = document.getElementById("input");
let button = document.getElementById("button");
let show = document.querySelector(".show");
let countUpdate = document.querySelector(".taskCount");
let taskCount = 0;

// Load tasks from localStorage if available

if (localStorage.getItem("tasks")) {
    console.log("something is here");
  show.innerHTML = localStorage.getItem("tasks");
  taskCount = show.children.length;
  countUpdate.innerText = taskCount;
}


function myfun() {
  if (input.value == "") {
    alert("Enter value please");
  } else {
    let div = document.createElement("div");
    div.classList.add("inner-div");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    div.classList.add("checkbox");

    let elem = document.createElement("li");
    elem.innerText = input.value;

    let del = document.createElement("button");
    del.innerText = "Del";
    del.classList.add("delete");

    div.appendChild(checkbox);
    div.appendChild(elem);
    div.appendChild(del);

    show.appendChild(div);
    input.value = "";
    taskCount++;
    countUpdate.innerText = taskCount;

    // Save tasks to localStorage
    localStorage.setItem("tasks", show.innerHTML);
    console.log(div.innerHTML);
  }
};

button.addEventListener("click",myfun)

input.addEventListener("keyup",(event)=>{
    if(event.key == "Enter"){
        myfun();
    }
});

show.addEventListener("click", (event) => {
  if (event.target.checked) {
    let tag = event.target.closest(".inner-div");
    tag.classList.add("parentElem");
    console.log(event.target.checked);
    localStorage.setItem("tasks", show.innerHTML);
  }
  else if (event.target.className == "delete") {
    let ch = event.target.closest(".inner-div");
    show.removeChild(ch);
    taskCount--;
    countUpdate.innerText = taskCount;

    // Save tasks to localStorage
    localStorage.setItem("tasks", show.innerHTML);
  }
  else{
    let tag = event.target.closest(".inner-div");
    tag.classList.remove("parentElem");
    localStorage.setItem("tasks", show.innerHTML);
  }
});
