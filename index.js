class destinos {
    constructor(name, precio) {
        this.name = name;
        this.precio = precio;
        this.vendido = false;
    }
    vender() {
        this.vendido = true;
    }
}

const listaDestinos = [];
listaDestinos.push(new destinos("malasia", 1000));
listaDestinos.push(new destinos("everest", 2000));
listaDestinos.push(new destinos("egipto", 3000));


const ventaViaje = (destinos) => {
    let viajeVendido = [];
    for (const destinos of listaDestinos) {
        viajeVendido.push(destinos.name);
    }
    let travelSolt = viajeVendido.indexOf(destinos);
    let travelFind = listaDestinos[travelSolt];
    travelFind.vender();
}

/* let viaje = prompt('ingrese el destino que desea viajar: 1- Malasia. 2- Everest. 3- Egipto.').toLowerCase();
if ((viaje === "malasia") || (viaje === "everest") || (viaje === "egipto")){
    alert(`su destino es : ${viaje}`);
}else{
    alert('usted no eligio ningun destino!');
}   
console.log(listaDestinos);

let pay;
if(viaje === "malasia"){
    pay = 1000 * 1.21;
    console.log(`usted eligio Malasia, el monto a abonar mas impuestos es ${pay}`);
    ventaViaje(viaje);
}else if (viaje === "everest"){
    pay = 2000 * 1.21;
    console.log(`usted eligio Everest, el monto a abonar mas impuestos es ${pay}`);
    ventaViaje(viaje);
}else if(viaje === "egipto"){
    pay = 3000 * 1.21;
    console.log(`usted eligio Egipto, el monto a abonar mas impuestos es ${pay}`);
    ventaViaje(viaje);
}else{
    console.log("usted no eligio ningun destino");
} */
let consulta = document.getElementById("consulta");
let pay;
let travelForm = document.getElementById("formulario");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let info = e.target;
    if (info.children[0].value === "malasia") {
        let ev = "malasia";
        pay = 1000 * 1.21;
        let info = document.createElement("h2");
        info.innerHTML = `El costo Para Malasia mas impuestos es $ ${pay}`;
        ventaViaje(ev);
        console.log(listaDestinos);
        info.className = "consulta"
        consulta.appendChild(info);
    } else if (info.children[0].value === "everest") {
        let ev = "everest";
        pay = 2000 * 1.21;
        let info = document.createElement("h2");
        info.innerHTML = `El costo Para Everest mas impuestos es $ ${pay}`
        ventaViaje(ev);
        info.className = "consulta"
        consulta.appendChild(info);
    } else if (info.children[0].value === "egipto") {
        let ev = "egipto";
        pay = 3000 * 1.21;
        let info = document.createElement("h2");
        info.innerHTML = `El costo Para Egipto mas impuestos es $ ${pay}`
        ventaViaje(ev);
        info.className = "consulta"
        consulta.appendChild(info);
    } else {
        let info = document.createElement("h2");
        info.innerHTML = "No eligio un destino disponible"
        info.className = "consulta"
        consulta.appendChild(info);
    }

});