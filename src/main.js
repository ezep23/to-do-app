const tareas = [];

function insertarHTML(){
    document.getElementById("container").innerHTML = tareas.join().replaceAll(",", "");
};

const añadirTarea = () => { 
    const nuevaTarea = document.getElementById("inputTarea").value;
    
    if(nuevaTarea != ""){
        contador = tareas.length + 1;
        const containerTarea = `<hr>
                                    <div class="flex flex-column justify-between m-4">
                                        <p>${nuevaTarea}</p>
                                        <button onclick="eliminarTarea(${contador})" class="bg-gray-500 text-white rounded-3xl p-1">✓</button>
                                    </div>
                                    <hr>`;
        tareas.push(containerTarea);

        insertarHTML();
    
    } else{
        alert("¡Ingrese un valor!")
    }
};

const eliminarTarea = (num) => {
    id = num - 1;
    eliminar = delete tareas[id];
    insertarHTML();
}