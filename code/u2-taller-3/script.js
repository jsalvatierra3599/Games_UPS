var btn = document.getElementById('btn'),
caja = document.getElementById('cuadro'),
contador=0;

function agregar()
{ 
    if (contador==0)
{
    cuadro.classList.add('azul');
    contador=1;

}
else{
    caja.classList.remove('azul');
contador=0;
}
}
btn.addEventListener('click',true)