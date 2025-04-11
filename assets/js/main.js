const formDatiEl = document.getElementById("form-dati-passeggero");

const nomeCognomeEl = document.getElementById("nome-cognome-passeggero");
const kmDaPercorrereEl = document.getElementById("km-da-percorrere");
const fasciaDiEtaEl = document.getElementById("fascia-di-eta");

const buttonAnnullaEl = document.getElementById("btn-annulla");

const cardBigliettoEl = document.getElementById("card-biglietto");

const nomePasseggeroBigliettoEl = document.getElementById(
  "nome-passeggero-biglietto"
);

const tipoOffertaEl = document.getElementById("tipo-offerta");

const costoBigliettoEl = document.getElementById("costo-biglietto");

formDatiEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = nomeCognomeEl.value;
  const km = parseInt(kmDaPercorrereEl.value);
  const fasciaDiEta = fasciaDiEtaEl.value;

  let prezzoBiglietto = km * 0.21;
  let scontoMinorenni = (prezzoBiglietto / 100) * 20;
  let scontoOver = (prezzoBiglietto / 100) * 40;

  if (fasciaDiEta === "Minorenne") {
    prezzoBiglietto -= scontoMinorenni;
  } else if (fasciaDiEta === "Over 65") {
    prezzoBiglietto -= scontoOver;
  }

  console.log(`Nome: ${nome}`);
  console.log(`Km: ${km}`);
  console.log(`Fascia di età: ${fasciaDiEta}`);
  console.log(`Prezzo Biglietto: ${prezzoBiglietto.toFixed(2)}`);
  console.log(scontoMinorenni);
  console.log(scontoOver);

  nomePasseggeroBigliettoEl.innerText = nome;

  if (fasciaDiEta === "Minorenne") {
    tipoOffertaEl.innerText = "Sconto minorenni - 20%";
  } else if (fasciaDiEta === "Over 65") {
    tipoOffertaEl.innerText = "Sconto over 65 - 40%";
  } else {
    tipoOffertaEl.innerText = "Biglietto Standard";
  }

  costoBigliettoEl.innerText = `€ ${prezzoBiglietto.toFixed(2)}`;

  cardBigliettoEl.classList.remove("d-none");
});

buttonAnnullaEl.addEventListener("click", function () {
  cardBigliettoEl.classList.add("d-none");
  formDatiEl.reset();
});
