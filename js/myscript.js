// Data una lista della spesa;
const listaSpesa = ["Uova", "Latte", "Carne", "Pesce", "Pane"];

// richiamare ul
let contLista = document.querySelector(".container > ul");

// richiamo il mio bottone
let button = document.querySelector(".my_button")

// aggiungo evento al click
button.addEventListener("click",
    function() {
        // dare valore a indicatore i
        let i = 0;

        // finchè i è minore della lunghezza dell'array
        while(i < listaSpesa.length) {

            // stampo in console elementi array
            console.log(listaSpesa[i]);
            
            // creo li
            let items = document.createElement("li");

            // metto contenuto in li
            items.append(listaSpesa[i]);

            // metto li nell'ul
            contLista.append(items);

            // aumento ogni volta il valore di i
            i++;
        }
    }
)
