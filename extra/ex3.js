const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
let peliculaPequeña=[];
let peliculaMediana=[];
let peliculaGrande=[];

for (let index = 0; index < movies.length; index++) {
    const time = movies[index];
    if ( time.durationInMinutes < 100) 
    { peliculaPequeña.push(time);

    }
    else if (time.durationInMinutes >= 100  && time.durationInMinutes < 200)
    {
        peliculaMediana.push(time)
    }
    else {peliculaGrande.push(time)}
    };
    console.log(peliculaPequeña,peliculaMediana,peliculaGrande);
    

    
