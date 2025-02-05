async function loadTruyenMoi() {
    let url = "https://api.allorigins.win/raw?url=https://nettruyenrr.com/";

    let response = await fetch(url);
    let text = await response.text();

    let parser = new DOMParser();
    let doc = parser.parseFromString(text, "text/html");

    let truyenList = doc.querySelectorAll(".item > figure > a");

    let html = "";
    truyenList.forEach(truyen => {
        let title = truyen.getAttribute("title");
        let link = truyen.getAttribute("href");
        let img = truyen.querySelector("img").getAttribute("src");

        html += `<div>
            <img src="${img}" width="150" />
            <h3><a href="https://nettruyenrr.com${link}" target="_blank">${title}</a></h3>
        </div>`;
    });

    document.getElementById("truyen-list").innerHTML = html;
}

window.onload = loadTruyenMoi;
