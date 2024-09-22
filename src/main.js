const tareas = [];

const añadirTarea = () => { 
    const nuevaTarea = document.getElementById("inputTarea").value;
    
    if(nuevaTarea != ""){
        const containerTarea = `<div class="flex flex-column justify-between m-4">
                                    <p>${nuevaTarea}</p>
                                    <button onclick="eliminarTarea()" class="bg-gray-500 text-white rounded-3xl">LISTO</button>
                                </div>`;
        tareas.push(containerTarea);

        function insertarHTML(){
            document.getElementById("container").innerHTML = tareas.join().replaceAll(",", "");
        };

        insertarHTML();
        
    } else{
        alert("¡Ingrese un valor!")
    }
};
