document.getElementById("mostrarCanciones").addEventListener("click", function() {
    const genero = document.getElementById("seleccionGenero").value;
    const listaCanciones = document.getElementById("canciones");
    listaCanciones.innerHTML = "";
    
    const canciones = {
        pop: [
            { titulo: "Blinding Lights",             artista: "The Weeknd", 
            src: "The Weeknd - Blinding Lights (Official Audio) - TheWeekndVEVO.mp3" },
            { titulo: "Levitating", artista: "Dua Lipa", src: "Dua Lipa - Levitating (Official Lyrics Video) - Dua Lipa.mp3" }
        ],
        rock: [
            { titulo: "Bohemian Rhapsody", artista: "Queen", src: "Queen – Bohemian Rhapsody (Lyrics) - The Greatest Songs.mp3" },
            { titulo: "Smells Like Teen Spirit", artista: "Nirvana", src: "Nirvana - Smells Like Teen Spirit [Nevermind] [HQ Sound] - Lucatone18.mp3" }
        ],
        electro: [
            { titulo: "Titanium", artista: "David Guetta", src: "David Guetta - Titanium (Lyrics) ft. Sia - 7clouds.mp3" },
            { titulo: "Animals", artista: "Martin Garrix", src: "Maroon 5 - Animals (Lyrics) - 7clouds.mp3" }
        ],
        jazz: [
            { titulo: "Take Five", artista: "Dave Brubeck", src: "Dave Brubeck - Take Five - buckinny.mp3" },
            { titulo: "So What", artista: "Miles Davis", src: "Miles Davis - So What (Official Audio) - MilesDavisVEVO.mp3" }
        ]
    };

    canciones[genero].forEach(cancion => {
        const li = document.createElement("li");
        li.innerHTML = `${cancion.titulo} - ${cancion.artista} <audio controls src="${cancion.src}"></audio>`;
        listaCanciones.appendChild(li);
    });
});
