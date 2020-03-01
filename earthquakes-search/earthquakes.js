const https = require('https');

const magnitude = process.argv[2]; //all 1.0 2.5 4.5 significant 

if(magnitude != 'all' && magnitude != '1.0' && magnitude != '2.5' && magnitude != '4.5' && magnitude != 'significant') {
    console.log("Introduce uno de los siguientes: all / 1.0 / 2.5 / 4.5 / significant")
    process.exit();
}

https.get('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/' + magnitude + '_hour.geojson', res => {
    let data = '';
    res.on("data", chunk => {
        data += chunk;
        const earthquakes = JSON.parse(data)
        // console.log(earthquakes);
        console.log(`
            ${earthquakes.metadata.title}
            ----------------------------------------------------------------
            Total de terremotos registrados: ${earthquakes.metadata.count}
            Status: ${earthquakes.metadata.status}
            ----------------------------------------------------------------
            
        `);
        earthquakes.features.forEach( earthquake => {
            console.log(`
                =======================================
                ${earthquake.properties.title}
                ${new Date(earthquake.properties.time).toLocaleString("es-ES")}
                Magnitud: ${earthquake.properties.mag}
                Lugar: ${earthquake.properties.place}
                Coordenadas: ${earthquake.geometry.coordinates[0]}, ${earthquake.geometry.coordinates[1]}
                =======================================
            `);
        });
    });
}).on('error', err => {
    console.log(err);
})