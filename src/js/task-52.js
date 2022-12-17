window.addEventListener("DOMContentLoaded", () => {
    let count = 0;
    document.body.addEventListener("click", () => {
        const length = 5;

        for (let i = 0; i < length; i++) {
            let x = document.createElement("article");

            count += length;
            x.setAttribute("id", "myArticle" + count);
            document.body.appendChild(x);

            let text = "some text..." + count;

            document.getElementById("myArticle" + count).innerHTML = text;
            document.getElementById("myArticle" + count)
                .classList.add("message");
        }
    });
    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        alert("boom");
    });
});