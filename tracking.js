let habit = ["typing", "leetcode", "exercise", "duolingo", "Snakify", "Git", "html", "linkedin", "internship"];
const currentDate = new Date();
let today = currentDate.toDateString();
let savedDate = localStorage.getItem("savedDate");

document.getElementById("currentDate").innerHTML = today;


if (savedDate !== today){
    habit.forEach(id => { localStorage.removeItem(id) });
}

habit.forEach(id => {
    let box = document.getElementById(id);
    let saved = localStorage.getItem(id);
    
    if (saved != null) box.checked = JSON.parse(saved);
    
    box.addEventListener("change", function() {
        localStorage.setItem(id, JSON.stringify(box.checked));
    });
});

localStorage.setItem("savedDate", today);