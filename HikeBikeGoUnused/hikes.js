const ArequestURL = 'https://melissahalldesign.github.io/WDD330/HikeBikeGo/json/archeshikes.json';
fetch(ArequestURL) 
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const archeshikes = jsonObject['archeshikes'];
        for (let i = 0; i < archeshikes.length; i++) { 
            let hike = document.createElement('div');
            let h3 = document.createElement('h3'); //Hike Names
            h3.setAttribute('id', archeshikes[i].hikeName);
            h3.addEventListener('click', (e) => {
                console.log(e.target.id);
            });
            let h4 = document.createElement('h4'); //'Show Details'
            h4.setAttribute('id', archeshikes[i].details);
            let hike1 = document.createElement('div');
            hike1.setAttribute('id', 'hikeDetails');
            hike1.addEventListener('click', (e) => {
                console.log(e.target.id);
            });
            let details = document.createElement('p');
            //hike1.className = 'hidden';
            //hike1.className = 'show';
            let h5 = document.createElement('h5'); // Hike location aka Moab etc
            let hikeName = document.createElement('p');
            let location = document.createElement('p');
            let difficulty = document.createElement('p');
            let length = document.createElement('p');
            let elevation = document.createElement('p');
            let description = document.createElement('p');
            h3.textContent = archeshikes[i].hikeName;
            //h4.textContent = 'Show Details ' + archeshikes[i].details;
            h4.textContent = archeshikes[i].details;
            h5.textContent = 'Location: ' + archeshikes[i].location;
            //location.textContent = 'Location: ' + hikes[i].location;
            difficulty.textContent = 'Difficulty: ' + archeshikes[i].difficulty;
            length.textContent = 'Length: ' + archeshikes[i].length;
            elevation.textContent = 'Elevation: ' + archeshikes[i].elevation;
            description.textContent = 'Description: ' + archeshikes[i].description;
            hike.appendChild(h3);
            hike.appendChild(h4);
            hike.appendChild(details);
            hike1.appendChild(hikeName);
            hike1.appendChild(h5);
            hike1.appendChild(location);
            hike1.appendChild(difficulty);
            hike1.appendChild(length);
            hike1.appendChild(elevation);
            hike1.appendChild(description);
            hike.appendChild(hike1);
            document.querySelector('section.AhikeDisplay').appendChild(hike);
        }
    });


    //h3.setAttribute('id', 'favorite'); //id of 'favorite' set to h3 hike names
//let h4 = document.createElement('h4'); //'Show Details'
            //h4.setAttribute('id', archeshikes[i].details);
            //h4.setAttribute('id', 'showDetails'); //id of 'showDetails' set to h4 show details
            // h4.addEventListener('click', (e) => {
            //     console.log(e.target.id);
            // });

            // let h4 = document.createElement('h4'); //'Show Details'
            // h4.setAttribute('id', 'Details');
            //h4.setAttribute('id', archeshikes[i].details);
            // h4.addEventListener('click', (e) => {
            //     console.log(e.target.id);
            // });
    