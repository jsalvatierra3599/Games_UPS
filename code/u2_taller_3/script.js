var randomColor = Math.floor(Math.random()*16777215).toString(16);
const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    color.innerHTML = "#" + randomColor;
  }

var a=0
function agregar_elemento() {
    var h1 = document.createElement('h1')
    var texto = document.createTextNode(a=a+1)
    h1.appendChild(texto)
    var container = document.getElementById('container')
    container.appendChild(h1)
    var h2 = document.createElement('h2')
    var texto = document.createTextNode()
    h2.appendChild(texto)
    var container = document.getElementById('container')
    container.appendChild(h2)
    var h3 = document.createElement('h3')
    var texto = document.createTextNode()
    h3.appendChild(texto)
    var container = document.getElementById('container')
    container.appendChild(h3)
}
