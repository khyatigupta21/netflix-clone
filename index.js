let more = document.getElementById("more");
if (more) {
  more.addEventListener("click", () => {
    let hide = document.getElementById("hide-para");
    more.style.visibility = "hidden";
    hide.style.visibility = "visible";
  });
}
