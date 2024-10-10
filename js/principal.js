/*El promedio de notas resulta de dividir el acumulado de notas entre la cantidad de materias.
Se tiene de todo estudiante su nombre, acumulado notas y cantidad materias.
Un estudiante deportista es admitido en el equipo universitario de beisbol si su promedio de
notas es superior a 14 y tiene más de 21 años; para el equipo de fútbol ingresa con 19 años y
promedio mínimo de 12 (1=beisbol - 2=fútbol).
Diseñe las clases Cl_estudiante y Cl_deportista, usando herencia, de manera que procese un
estudiante y reporte si es admitido en el equipo que solicita. */ 

import CL_deportista from "./CL_deportista.js";
let deportista1 = new CL_deportista( "Juan", 132, 8, 1,21);
let deportista2 = new CL_deportista( "felix", 110, 10, 2, 20);

let salida= document.getElementById("Salida");

salida.innerHTML+= `
<br> nombre del estudiante : ${deportista1.nombre}
<br> acumulado de notas : ${deportista1.acumnota}
<br> cantidad de materias: ${deportista1.cantMateria}
<br> deporte 1(beisbol) 2(futbol):   ${deportista1.deporte} 
<br> edad:   ${deportista1.edad} 
<br> nota promedio:   ${deportista1.promedio()} 
<br> ${deportista1.nombre}  ${deportista1.admision()}
<br>
<br> nombre del estudiante : ${deportista2.nombre}
<br> acumulado de notas: ${deportista2.acumnota}
<br> cantidad de materias: ${deportista2.cantMateria}
<br> deporte 1(beisbol) 2(futbol):   ${deportista2.deporte} 
<br> edad:   ${deportista2.edad} 
<br> nota promedio:   ${deportista2.promedio()} 
<br> ${deportista2.nombre}  ${deportista2.admision()}
`;

