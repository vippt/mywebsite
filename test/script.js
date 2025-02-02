async function fetchTruyen() {
    const url = "https://nettruyenrr.com";  // URL của NetTruyenRR
    const proxy = "https://api.allorigins.win/get?url=" + encodeURIComponent(url);

    try {
        let response = await fetch(proxy);
        let data = await response.json();
        let parser = new DOMParser();
        let doc = parser.parseFromString(data.contents, "text/html");

        let truyens = doc.querySelectorAll(".item .title a");
        let html = "";

        truyens.forEach(truyen => {
            let name = truyen.textContent;
            let link = truyen.href;
            html += `<p><a href="${link}" target="_blank">${name}</a></p>`;
        });

        document.getElementById("truyen-list").innerHTML = html;
    } catch (error) {
        console.error("Lỗi tải dữ liệu:", error);
    }
}

fetchTruyen();
