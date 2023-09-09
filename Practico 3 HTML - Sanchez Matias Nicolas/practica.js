// Captura los datos enviados por la página que llama
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap(str) {
  if (!str) return null;
  let temp = str.trim();
  return temp[0].toUpperCase() + temp.substring(1);
}

// Assigning the variables with values used in the story
const tipoCarne = cleanAndCap(words.get("tipo-carne"));
const cantidad = cleanAndCap(words.get("cantidad"));

const queso = cleanAndCap(words.get("queso"));
const conjunction = queso === "Si" ? "con queso" : "sin queso";

const coccion = words.get("coccion");
let puntoCoccion=''; 

const ingredientes = words.get("ingredientes");

const aderezo = cleanAndCap(words.get("aderezo"));
const quote = words.get("extra");

if(coccion == 1)
  puntoCoccion = "Poco cocida";
else if(coccion == 2)
  puntoCoccion ="Termino medio";
else
  puntoCoccion = "Bien cocida";

const story = `<p>El cliente solicitó, ${cantidad} hamburguesa de ${tipoCarne} ${conjunction} ${ingredientes} ${aderezo}. Con el siguiente punto de cocción:${puntoCoccion}</p>`;



let articulo = document.getElementById("pedido");

articulo.innerHTML = story;
