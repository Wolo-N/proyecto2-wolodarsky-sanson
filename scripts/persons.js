function kmAy(km){
  const maxDistance = 2200; // Maximum distance (km) corresponding to y = 0
  const maxY = 600; // Maximum value of y
  const minKm = 1; // Minimum non-zero km value to avoid taking log of zero
  const logBase = 10; // Base of the logarithm used for scaling

  // Calculate log values for normalization
  const minLog = Math.log10(minKm);
  const maxLog = Math.log10(maxDistance);

  // Adjusting the exponent to stretch the lower end further down
  const exponent = 2; // Increasing this number stretches the lower end more

  // Logarithmically map the km value to a y value using an exponent to stretch the scale
  const logValue = Math.log10(Math.max(km, minKm));
  const normalizedLog = (logValue - minLog) / (maxLog - minLog);
  const stretchedLog = Math.pow(normalizedLog, exponent);

  const y = maxY * (1 - stretchedLog);

  return y;
}
const persons = [
    {
      "Nombre Completo": "Tomás Gallo",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Tucumán, Yerba Buena",
      "Lugar de residencia actual": "Belgrano",
      "Distancia a UTDT": 1250,
      "x": 2
    },
    {
      "Nombre Completo": "Tomas Curzio",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Buenos Aires, Zarate",
      "Lugar de residencia actual": "Palermo",
      "Distancia a UTDT": 81,
      "x": 2
    },
    {
      "Nombre Completo": "Iara Guglielmetti",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, Tandil",
      "Lugar de residencia actual": "Nuñez",
      "Distancia a UTDT": 360,
    },
    {
      "Nombre Completo": "Mariano Sanson",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Tucuman, Yerba Buena",
      "Lugar de residencia actual": "Belgrano",
      "Distancia a UTDT": 1250,
    },
    {
      "Nombre Completo": "Nicolas Wolodrasky",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Buenos Aires, Tigre",
      "Lugar de residencia actual": "Pacheco",
      "Distancia a UTDT": 23,
    },
    {
      "Nombre Completo": "Carlos Ignacio Araujo",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Santa Fe, Rosario",
      "Lugar de residencia actual": "Chacarita",
      "Distancia a UTDT": 290,
    },
    {
      "Nombre Completo": "Jaime Amigo",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Buenos Aires, CABA",
      "Lugar de residencia actual": "San Fernando",
      "Distancia a UTDT": 22,
    },
    {
      "Nombre Completo": "Ivan Mondrzak",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Buenos Aires, CABA",
      "Lugar de residencia actual": "Palermo",
      "Distancia a UTDT": 5,
    },
    {
      "Nombre Completo": "Federico Peitti",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Buenos Aires, CABA",
      "Lugar de residencia actual": "Coghlan",
      "Distancia a UTDT": 3,
    },
    {
      "Nombre Completo": "Benjamin Toledo",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Corrientes, Corrientes",
      "Lugar de residencia actual": "Colegiales",
      "Distancia a UTDT": 900,
    },
    {
      "Nombre Completo": "Mariana Zunino",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, Mercedes",
      "Lugar de residencia actual": "Belgrano",
      "Distancia a UTDT": 105,
    },
    {
      "Nombre Completo": "Emiliana Verdun",
      "Genero": "Otro",
      "Lugar de nacimiento": "Mendoza, Godoy Cruz",
      "Lugar de residencia actual": "Recoleta",
      "Distancia a UTDT": 1052,
    },
    {
      "Nombre Completo": "Ezequiel grinblat",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Buenos Aires, Vicente López",
      "Lugar de residencia actual": "Vicente López",
      "Distancia a UTDT": 20,
    },
    {
      "Nombre Completo": "Manuel Milde",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Misiones, Oberá",
      "Lugar de residencia actual": "Recoleta",
      "Distancia a UTDT": 1020,
    },
    {
      "Nombre Completo": "Felipe caracoix",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Buenos Aires, Tandil",
      "Lugar de residencia actual": "Recoleta",
      "Distancia a UTDT": 360,
    },
    {
      "Nombre Completo": "Estanislao Rios Zgaib",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Rio Negro, Gral Roca",
      "Lugar de residencia actual": "Belgrano",
      "Distancia a UTDT": 1100,
    },
    {
      "Nombre Completo": "Maria Gimenez Costa",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires,",
      "Lugar de residencia actual": "Palermo",
      "Distancia a UTDT": 5,
    },
    {
      "Nombre Completo": "Serena Marelli",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, Haedo",
      "Lugar de residencia actual": "Haedo",
      "Distancia a UTDT": 25,
    },
    {
      "Nombre Completo": "Valentina Vitetta",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, CABA",
      "Lugar de residencia actual": "Versalles",
      "Distancia a UTDT": 15,
    },
    {
      "Nombre Completo": "Joaquin Schanz",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Santa Fe, Rafaela",
      "Lugar de residencia actual": "Villa Urquiza",
      "Distancia a UTDT": 531,
    },
    {
      "Nombre Completo": "Franco Setti",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Neuquén, Neuquén",
      "Lugar de residencia actual": "Recoleta",
      "Distancia a UTDT": 1138,
    },
    {
      "Nombre Completo": "Juana Copello",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, Recoleta",
      "Lugar de residencia actual": "San Isidro",
      "Distancia a UTDT": 6,
    },
    {
      "Nombre Completo": "Caterina Villegas",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, Vicente López",
      "Lugar de residencia actual": "Olivos",
      "Distancia a UTDT": 15,
    },
    {
      "Nombre Completo": "Camilo Suarez",
      "Genero": "Masculino",
      "Lugar de nacimiento": "San Juan, San Juan",
      "Lugar de residencia actual": "Belgrano",
      "Distancia a UTDT": 1112,
    },
    {
      "Nombre Completo": "Valentina Gayo",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, CABA",
      "Lugar de residencia actual": "Palermo",
      "Distancia a UTDT": 5,
    },
    {
      "Nombre Completo": "Isabel Nuñez",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, Palermo",
      "Lugar de residencia actual": "Vicente Lopez",
      "Distancia a UTDT": 5,
    },
    {
      "Nombre Completo": "Tomas Ward",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Buenos Aires, Tigre",
      "Lugar de residencia actual": "Rincon de Milberg",
      "Distancia a UTDT": 25,
    },
    {
      "Nombre Completo": "Camila Cauzzo",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, capital federal",
      "Lugar de residencia actual": "Villa Urquiza",
      "Distancia a UTDT": 6,
    },
    {
      "Nombre Completo": "Catalina Dolhare",
      "Genero": "Femenino",
      "Lugar de nacimiento": "Buenos Aires, CABA",
      "Lugar de residencia actual": "Belgrano",
      "Distancia a UTDT": 6,
    },
    {
      "Nombre Completo": "Tadeo Yapoudjian",
      "Genero": "Masculino",
      "Lugar de nacimiento": "CABA",
      "Lugar de residencia actual": "Nuñez",
      "Distancia a UTDT": 3,
    },
    {
      "Nombre Completo": "Guido David Salem",
      "Genero": "Masculino",
      "Lugar de nacimiento": "CABA",
      "Lugar de residencia actual": "Palermo",
      "Distancia a UTDT": 5,
    },
    {
      "Nombre Completo": "Lara Barijhoff",
      "Genero": "Femenino",
      "Lugar de nacimiento": "CABA",
      "Lugar de residencia actual": "Recoleta",
      "Distancia a UTDT": 7,
    },
    {
      "Nombre Completo": "Lucas Brea",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Sao Paulo, Brasil",
      "Lugar de residencia actual": "Palermo",
      "Distancia a UTDT": 2200,
    },
    {
      "Nombre Completo": "Nazaret Seranusoglu",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Ciudad Autonoma de Buenos Aires",
      "Lugar de residencia actual": "Palermo",
      "Distancia a UTDT": 5,
    },
    {
      "Nombre Completo": "Gonzalo Garcia Vence",
      "Genero": "Masculino",
      "Lugar de nacimiento": "Buenos Aires, Capital Federal",
      "Lugar de residencia actual": "Flores",
      "Distancia a UTDT": 25,
    },
    {
      "Nombre Completo": "Juan Ignacio Castore",
      "Genero": "Masculino",
      "Lugar de nacimiento": "San Juan, San Juan",
      "Lugar de residencia actual": "Recoleta",
      "Distancia a UTDT": 1112,
    }
  ]