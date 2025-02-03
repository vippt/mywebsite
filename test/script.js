document.addEventListener("DOMContentLoaded", function () {
    const truyenList = document.getElementById("truyen-list");

    fetch("https://api.toptruyentv.net/truyen-moi-nhat") // API giả định, cần thay bằng API thật
        .then(response => response.json())
        .then(data => {
            data.forEach(truyen => {
                const truyenDiv = document.createElement("div");
                truyenDiv.innerHTML = `<a href="truyen.html?id=${truyen.id}">${truyen.title}</a>`;
                truyenList.appendChild(truyenDiv);
            });
        })
        .catch(error => console.error("Lỗi tải dữ liệu:", error));
});
