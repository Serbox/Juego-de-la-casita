const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

document.addEventListener("DOMContentLoaded", function () {
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    // Función para comenzar a dibujar
    function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    // Función para dibujar líneas
    function draw(e) {
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    // Eventos de ratón para dibujar
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", () => isDrawing = false);
    canvas.addEventListener("mouseout", () => isDrawing = false);





})

//  vértices 
const vertices = [
    { x: 100, y: 300 },  // Vértice A
    { x: 300, y: 100 },  // Vértice B
    { x: 500, y: 300 },
    { x: 100, y: 600 },
    { x: 500, y: 600 }
];

//  Unir vértices
const aristas = [
    [4, 3],
    [0, 3],
    [4, 0],
    [2, 4],
    [2, 0],
    [0, 1],
    [1, 2],
    [2, 3]
];
//  vértices
function dibujarVertices() {
    ctx.fillStyle = "blue";
    vertices.forEach(vertex => {
        ctx.beginPath();
        ctx.arc(vertex.x, vertex.y, 5, 0, Math.PI * 2);
        ctx.fill();
    });
}

function dibujarAristasConRetraso() {
    ctx.strokeStyle = "black";
    let i = 0;
    function dibujarSiguienteArista() {
        if (i < aristas.length) {
            const [start, end] = aristas[i];
            const startVertex = vertices[start];
            const endVertex = vertices[end];
            ctx.beginPath();
            ctx.moveTo(startVertex.x, startVertex.y);
            ctx.lineTo(endVertex.x, endVertex.y);
            ctx.stroke();
            i++;
            setTimeout(dibujarSiguienteArista, 1000); // Dibujar la siguiente arista después de 1 segundo
        }
    }
    dibujarSiguienteArista();
}


dibujarVertices();

function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    dibujarVertices();
}
var cas = false;

function borrar(){
    limpiarCanvas();
}

function mostrarcasita() {
    if (cas === false) {
        dibujarAristasConRetraso()
        cas = true;
    } else {
        limpiarCanvas();
        cas = false;
    }
}