const Persona = {
    1: {
        cedula: '0956693964',
        nombres: 'Jose',
        apellidos: 'Salvatierra Parra',
        direccion : 'Guayaquil',
    },
    2: {
        cedula: '0956693964',
        nombres: 'Jose',
        apellidos: 'Salvatierra Parra',
        direccion : 'Guayaquil',
    },
    3: {
        cedula: '0985969696',
        nombres: 'Maria',
        apellidos: 'Zuñiga',
        direccion : 'Guayaquil',
    },
    4: {
        cedula: '0985979798',
        nombres: 'Maria',
        apellidos: 'Zuñiga',
        direccion : 'Guayaquil',
    }
}

const tabla = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');

tabla.appendChild(thead);
tabla.appendChild(tbody);

document.getElementById('body').appendChild(tabla);

const fila1 = document.createElement('tr');
const th1 = document.createElement('th');
th1.innerHTML = "Cedula";
const th2 = document.createElement('th');
th2.innerHTML = "Nombres";
const th3 = document.createElement('th');
th3.innerHTML = "Apellidos";
const th4 = document.createElement('th');
th4.innerHTML = "Direccion";

fila1.appendChild(th1);
fila1.appendChild(th2);
fila1.appendChild(th3);
fila1.appendChild(th4);
thead.appendChild(fila1);

const fila2 = document.createElement('tr');
const cedula = document.createElement('td');
cedula.innerHTML = Persona[1]['cedula'];
const nombres = document.createElement('td');
nombres.innerHTML = Persona[1]['nombres'];
const apellidos = document.createElement('td');
apellidos.innerHTML = Persona[1]['apellidos'];
const direccion = document.createElement('td');
direccion.innerHTML = Persona[1]['direccion'];

fila2.appendChild(cedula);
fila2.appendChild(nombres);
fila2.appendChild(apellidos);
fila2.appendChild(direccion);
tbody.appendChild(fila2);
