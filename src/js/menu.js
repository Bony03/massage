export function menuHandler() {
  if (document.body.classList.contains("menu-opened")) {
    document.body.classList.remove("menu-opened");
    return;
  }
  document.body.classList.add("menu-opened");
}
