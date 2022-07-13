var a=0
function agregar_elemento() {
    var h1 = document.createElement('h1')
    var texto = document.createTextNode(a=a+1)
    h1.appendChild(texto)
    var container = document.getElementById('container')
    container.appendChild(h1)
}
