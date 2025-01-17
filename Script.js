function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "shinji feliz")
    //se estiver light mode adicionar a imagem light
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "shinji triste")
    //se estiver sem light mode manter a imagem normal
  }
}
