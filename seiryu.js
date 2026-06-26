const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
// メニューを開く
function openMenu(){
    sidebar.classList.add("show");
    overlay.classList.add("show");
    menuBtn.textContent="✕";
}
// メニューを閉じる
function closeMenu(){
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
    menuBtn.textContent="☰";
}
// ボタン
menuBtn.addEventListener("click",()=>{
    if(sidebar.classList.contains("show")){
        closeMenu();
    }else{
        openMenu();
    }
});
// 外側クリック
overlay.addEventListener("click",closeMenu);
// メニューを押したら閉じる
document.querySelectorAll(".sidebar a").forEach(link=>{
    link.addEventListener("click",()=>{
        closeMenu();
    });
});