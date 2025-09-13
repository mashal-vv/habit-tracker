let habit = ["typing", "hackerrank", "leetcode", "exercise", "duolingo"];

habit.forEach(id => {
    let box = document.getElementById(id);
    let saved = localStorage.getItem(id);

    if (saved != null) box.checked = JSON.parse(saved);

    box.addEventListener("change", function() {
        localStorage.setItem(id, JSON.stringify(box.checked));
    });
});