function toggleMode() {
  const sound = document.getElementById("som")
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/avatar-light.png")
    img.setAttribute("alt", "goku")

    //se estiver light mode adicionar a imagem light
  } else {
    img.setAttribute("src", "/assets/avatar.png")
    img.setAttribute("alt", "goku dark")
    sound.currentTime = 0
    sound.play()
    //se estiver sem light mode manter a imagem normal
  }
}
