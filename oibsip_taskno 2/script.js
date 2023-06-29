let timeLimeElems = document.querySelectorAll(".p-time");

let showData = document.querySelectorAll(".show-data")
// console.log(timeLimeElems);

timeLimeElems.forEach((e) => {
  e.addEventListener("mouseover", () => {
    e.style.color = "white";
  });

  e.addEventListener("mouseout", () => {
    e.style.color = "rgb(126, 126, 126)";
  });
});


showData.forEach((e)=>{
  e.addEventListener("click",()=>{
    e.classList.toggle("show-data")
  })
})