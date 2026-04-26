document.addEventListener("DOMContentLoaded", () => {

    /* LOCAL STORAGE */
    const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
    };

    localStorage.setItem("userInfo", JSON.stringify(info));

    const data = JSON.parse(localStorage.getItem("userInfo"));
    document.getElementById("footer-info").innerText = JSON.stringify(data, null, 2);


    /* API КОМЕНТАРІ */
    fetch('https://jsonplaceholder.typicode.com/posts/6/comments')
    .then(res => res.json())
    .then(data => {
 
        const container = document.getElementById("comments");

        data.forEach(comment => {
            const div = document.createElement("div");
            div.classList.add("comment");

            div.innerHTML = `
                <h4>${comment.name}</h4>
                <p>${comment.body}</p>
       
            `;

            container.appendChild(div);
        });
    });


    /* МОДАЛКА через 1 хв */
    setTimeout(() => {
        document.getElementById("modal").style.display = "flex";
}, 60000);


    /* АВТО ТЕМА */
    const hour = new Date().getHours();
if (hour >= 7 && hour < 21) {
        document.body.classList.remove("dark");
} else {
        document.body.classList.add("dark");
    }

});
/* КНОПКА ТЕМИ */
function toggleTheme() {
    document.body.classList.toggle("dark");
}
