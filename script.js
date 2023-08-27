let scrollContainer = document.querySelector(".gallery");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (e)=>{
    e.preventDefault();
    scrollContainer.scrollLeft+=3*(e.deltaY);
    scrollContainer.style.scrollBehavior = "smooth";
})

prevBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft-=340;
})

nextBtn.addEventListener("click", ()=>{
    scrollContainer.scrollLeft+=340;
})

