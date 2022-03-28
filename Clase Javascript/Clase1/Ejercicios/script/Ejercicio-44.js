'use strict';

/**
 *  =======================
 *  ··· P E R S O N A S ···
 *  =======================
 */
const persons = [
    {
        name: 'Pedro',
        age: 35,
        code: 'ES',
        infected: true,
        petName: 'Troski',
    },
    {
        name: 'Elisabeth',
        age: 14,
        code: 'UK',
        infected: true,
        petName: 'Firulais',
    },
    {
        name: 'Pablo',
        age: 25,
        code: 'ES',
        infected: false,
        petName: 'Berritxu',
    },
    {
        name: 'Angela',
        age: 18,
        code: 'DE',
        infected: false,
        petName: 'Noodle',
    },
    {
        name: 'Boris',
        age: 50,
        code: 'UK',
        infected: true,
        petName: 'Leon',
    },
    {
        name: 'Donald',
        age: 69,
        code: 'US',
        infected: false,
        petName: 'Pence',
    },
    {
        name: 'Pepito',
        age: 36,
        code: 'ES',
        infected: false,
        petName: 'Carbón',
    },
];

/**
 *  =======================
 *  ··· M A S C O T A S ···
 *  =======================
 */
const pets = [
    {
        petName: 'Troski',
        type: 'perro',
    },
    {
        petName: 'Firulais',
        type: 'perro',
    },
    {
        petName: 'Berritxu',
        type: 'loro',
    },
    {
        petName: 'Noodle',
        type: 'araña',
    },
    {
        petName: 'Leon',
        type: 'gato',
    },
    {
        petName: 'Pence',
        type: 'perro',
    },
    {
        petName: 'Carbón',
        type: 'gato',
    },
];

/**
 *  =======================
 *  ··· A N I M A L E S ···
 *  =======================
 */
const animals = [
    {
        type: 'perro',
        legs: 4,
    },
    {
        type: 'araña',
        legs: 8,
    },
    {
        type: 'gato',
        legs: 4,
    },
    {
        type: 'loro',
        legs: 2,
    },
    {
        type: 'gallina',
        legs: 2,
    },
];

/**
 *  ===================
 *  ··· P A Í S E S ···
 *  ===================
 */
const countries = [
    {
        code: 'CN',
        name: 'China',
        population: 1439,
        infected: 81999,
    },
    {
        code: 'US',
        name: 'Estados Unidos',
        population: 331,
        infected: 112468,
    },
    {
        code: 'DE',
        name: 'Alemania',
        population: 83,
        infected: 56202,
    },
    {
        code: 'ES',
        name: 'España',
        population: 46,
        infected: 72248,
    },
    {
        code: 'UK',
        name: 'Reino Unido',
        population: 67,
        infected: 17301,
    },
];

/**
 *  ###########################
 *  ## E J E R C I C I O   1 ##
 *  ###########################
 *
 *  Número total de infectados del array de personas.
 *
 */

const Persona_infectada = countries.reduce((i, country) => {
    return (i += country.infected);
}, 0);

console.log('Personas infectadas: ' + Persona_infectada);
/**
 *  ###########################
 *  ## E J E R C I C I O   2 ##
 *  ###########################
 *
 *  Número total de infectados en el array de países.
 *
 */

const Paises_infectados = countries.reduce((i) => {
    return (i += 1);
}, 0);
console.log('Paises infectados: ' + Paises_infectados);
/**
 *  ###########################
 *  ## E J E R C I C I O   3 ##
 *  ###########################
 *
 *  País con más infectados.
 *
 */

const Nombre_pais_mas_infectado = countries.map((con) => con.infected);
const Mas_Infectado = countries.map((country) => country.name);

for (let i = 0; i < countries.length; i++) {
    if (Mas_Infectado[i] > Mas_Infectado[i + 1]) {
        console.log(Mas_Infectado[i] + ' - ' + Nombre_pais_mas_infectado[i]);
    }
}

/**
 *  ###########################
 *  ## E J E R C I C I O   4 ##
 *  ###########################
 *
 *  Array con el nombre de todas las mascotas.
 *
 */

const Nombre_mascotas = pets.map((mp) => mp.petName);
console.table(Nombre_mascotas);

/**
 *  ###########################
 *  ## E J E R C I C I O   5 ##
 *  ###########################
 *
 *  Array de españoles con perro.
 *
 */

const Perro_name = persons
    .filter((ps) => ps.code === 'ES')
    .map((ls) => ls.petName);

for (let i = 0; i < pets.length; i++) {
    if (pets[i].type === 'perro' && pets[i].petName === Perro_name[i]) {
        console.log(
            `Nombre: '${persons[i].name}',\ncountry: '${persons[i].code}',\nNombre Mascota: '${Perro_name[i]}'`
        );
    }
}

/**
 *  ###########################
 *  ## E J E R C I C I O   6 ##
 *  ###########################
 *
 *  Array con las personas. A mayores, este array debe incluír el objeto con los datos de su mascota.
 *
 *  {
 *      name: 'Pedro',
 *      age: 35,
 *      country: 'ES',
 *      infected: true,
 *      petName: {
 *          petName: 'Troski',
 *          type: 'perro',
 *      }
 *  }
 *
 */

/**
 *  ###########################
 *  ## E J E R C I C I O   7 ##
 *  ###########################
 *
 *  Número total de patas de las mascotas.
 *
 */

/**
 *  ###########################
 *  ## E J E R C I C I O   8 ##
 *  ###########################
 *
 *  Array con las personas que tienen animales de 4 patas
 *
 */

// Obtenemos a las mascotas de 4 patas.

// Obtenemos a las personas con mascotas de 4 patas.

/**
 *  ###########################
 *  ## E J E R C I C I O   9 ##
 *  ###########################
 *
 *  Array de países que tienen personas con loros como mascota.
 *
 */

// Obtenemos a las personas con loros como mascotas.

// Obtenemos los países que tienen personas con loros.

/**
 *  #############################
 *  ## E J E R C I C I O   1 0 ##
 *  #############################
 *
 *  Número de infectados totales (en el array de países) de los países con mascotas de ocho patas.
 *
 */

// Filtro a las mascotas de 8 patas.

// En base al array anterior filtro a las personas con mascotas de 8 patas.

// Calculo el número de infectados totales de los países con mascotas de  patas.
