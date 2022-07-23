class Destinos {
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
listaDestinos.push(new Destinos("malasia", 1000));
listaDestinos.push(new Destinos("everest", 2000));
listaDestinos.push(new Destinos("egipto", 3000));
listaDestinos.push(new Destinos("niza", 3500));
listaDestinos.push(new Destinos("malaga", 2500));
console.log(listaDestinos);
localStorage.setItem("destinos",JSON.stringify(listaDestinos));

let destinoElegido;
let pay;
let travelForm = document.getElementById("formulario");
travelForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let info = e.target;
    destinoElegido = info.children[0].value;
    const resultado = listaDestinos.find((el) => el.name === destinoElegido);
    localStorage.setItem("destinofavo", JSON.stringify(resultado));
    resultado.vender();
    let cuota = info.children[1].value;
    totalPago= resultado.precio * 1.21;
    pay = (totalPago / cuota).toFixed(2);
    console.log(pay);  
    
    let consulta = document.getElementById("consulta");
    let resulDest = document.createElement("div");
    resulDest.innerHTML = `<h2> Tu destino es ${destinoElegido}</h2>
                            <img src="./img/7.jpg">
                                <p> El monto a abonar es $${totalPago} mas impuestos, lo abonas en ${cuota} cuotas de $${pay}. `;
    consulta.append(resulDest);
});

let destFav = document.getElementById("fav1")
let fav = document.createElement("h3");
fav.innerHTML = localStorage.getItem("destinofavo");
destFav.append(fav);