// Data una lista della spesa;
const listaSpesa = ["Uova", "Latte", "Carne", "Pesce", "Pane"];

// richiamare ul
let contLista = document.querySelector(".container > ul");

// estrapolare elementi array
for(i = 0; i < listaSpesa.length; i++) {
    console.log(listaSpesa[i]);

    // creo li
    let items = document.createElement("li");

    // metto contenuto in li
    items.append(listaSpesa[i]);

    // metto li nell'ul
    contLista.append(items);
}
