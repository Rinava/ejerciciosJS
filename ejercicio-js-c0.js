  function Computadora(ram, cpu, disco, monitor, gpu) {
    this.ram = ram;
    this.cpu = cpu;
    this.disco = disco;
    this.monitor = monitor;
    this.gpu = gpu;
  }

  const compu1 = new Computadora('8gb', 'i9', '512gb', 'Samsung Ultrawide 32', false);
  const compu2 = new Computadora('8gb', 'i9', '256gb', 'Samsung 24', true);
  const compu3 = new Computadora('16gb', 'i7', '512gb', 'Samsung Ultrawide 29', false);
  const compu4 = new Computadora('32gb', 'i9', '1TB', 'Samsung Ultrawide 32', true);
  const compu5 = new Computadora('8gb', 'i7', '512gb', 'Dell Ultrawide 32', false);

  let computadoras = [compu1, compu2, compu3, compu4, compu5];
  console.log("cantidad: " + computadoras.length)
  computadoras.forEach((computadora, i) => console.log("Compu " + i + " " + JSON.stringify(computadora)));

  let compuGPU = computadoras.filter(compu => compu.gpu);

  compuGPU.forEach((computadora, i) => console.log("Compu " + i + " " + JSON.stringify(computadora)));

  //Crear un array que contenga números del 1 al 10.
  //Retornar un nuevo array que contenga todos los números multiplicados por dos
  let numeros1a10 = [];
  for (let index = 1; index < 11; index++) {
    numeros1a10.push(index);
  }

  console.log("Numeros del 1 al 10: " + numeros1a10);
  const numeros1a10Doble = numeros1a10.map(function (num) {
    return num * 2;
  });
  console.log("Numeros del 1 al 100 multiplicados por 2 : " + numeros1a10Doble);

  // Del array que devuelve el ejercicio número 5, filtrar los que sean mayores a 5

  const numerosMayoresA5 = numeros1a10Doble.filter((num) => num > 5);
  console.log("Numeros mayores a 5: " + numerosMayoresA5);

  //Del array que devuelve el ejercicio 6, buscar el primero que sea mayor a 10
  const numeroMayorA10 = numerosMayoresA5.find((element) => element > 10);
  console.log("Primer mayor a 10: " + numeroMayorA10);

  // Dado el siguiente array filtremos a los pokemones con poder menor a 10.

  let pokemones = [{
      nombre: "pikachu",
      poder: 12
    },
    {
      nombre: "bulbasaur",
      poder: 6
    },
    {
      nombre: "charizard",
      poder: 19
    },
    {
      nombre: "squirtle",
      poder: 3
    },
    {
      nombre: "metwo",
      poder: 6
    },
  ];


  const pokemonesDebiles = pokemones.filter(pokemon => pokemon.poder < 10);
  console.log("Pokemones con poder menor a 10: ");
  pokemonesDebiles.forEach(pokemon => {
    console.log(pokemon)
  });