// This example adds a marker to indicate the position of Bondi Beach in Sydney,
// Australia.
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: { lat: -30, lng: -51 },
    });
    const image =
      "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
    

    const beachMarker = new google.maps.Marker({
      position: { lat: -29.937838, lng: -51.194845 },
      map,
      icon: {
        url: "./icons/red-dot.png",
        labelOrigin: new google.maps.Point(75, 32),
        size: new google.maps.Size(50, 50),
        anchor: new google.maps.Point(16,32)
      }
    });
    
    const beachMarker2 = new google.maps.Marker({
        position: { lat: -30.027947, lng: -51.163606 },
        map,
        icon: {
            url: "./icons/red-dot.png",
            labelOrigin: new google.maps.Point(75, 32),
            size: new google.maps.Size(50, 50),
            anchor: new google.maps.Point(16,32)
          }
    });
    const beachMarker3 = new google.maps.Marker({
        position: { lat: -30.050388, lng: -51.159263 },
        map,
        icon: {
            url: "./icons/red-dot.png",
            labelOrigin: new google.maps.Point(75, 32),
            size: new google.maps.Size(50, 50),
            anchor: new google.maps.Point(16,32)
          }
    });
    const beachMarker4 = new google.maps.Marker({
        position: { lat: -30.068281, lng: -51.215046 },
        map,
        icon: {
            url: "./icons/red-dot.png",
            labelOrigin: new google.maps.Point(75, 32),
            size: new google.maps.Size(50, 50),
            anchor: new google.maps.Point(16,32)
          }
    });

    beachMarker.addListener("click", () => {
        openModal({abrigo:"Igreja Divino Espírito Santo",
                    responsavel: "Alberto Batista",
                    telefone: "(51) 98764-4635",
                    numeroAbrigados: 230,
                    endereco: "Av. Cristóvão Colombo, s/n - Passo d'Areia, Porto Alegre - RS, 90480-120",
                    agua: 2,
                    alimentos: 1,
                    alimentos_infantis: 3,
                    roupas: 4,
                    agasalhos: 1,
                    higiene: 3,
                    higiene_feminina:2
                    });
    });
    beachMarker2.addListener("click", () => {
        openModal({abrigo:"Parque Esportivo PUCRS",
                    responsavel: "Mário Marques",
                    telefone: "(51) 93746-3355",
                    numeroAbrigados: 210,
                    endereco: "Av. Túlio de Rose, 80 - Passo d'Areia, Porto Alegre - RS, 91340-110",
                    agua: 1,
                    alimentos: 2,
                    alimentos_infantis: 2,
                    roupas: 1,
                    agasalhos: 3,
                    higiene: 1,
                    higiene_feminina:1
                    });
    });
    beachMarker3.addListener("click", () => {
        openModal({abrigo:"Grêmio Náutico União",
                    responsavel: "Luiza Carvalho",
                    telefone: "(51) 92635-6850",
                    numeroAbrigados: 90,
                    endereco: "R. Dom Pedro II, 861 - São João, Porto Alegre - RS, 90550-141",
                    agua: 4,
                    alimentos: 3,
                    alimentos_infantis: 2,
                    roupas: 1,
                    agasalhos: 1,
                    higiene: 3,
                    higiene_feminina:2
                    });
    });
    beachMarker4.addListener("click", () => {
        openModal({abrigo:"Abrigo Maria Solange",
                    responsavel: "Ana Maria Silveira",
                    telefone: "(51) 97365-1029",
                    numeroAbrigados: 100,
                    endereco: "Av. Soledade, 575 - Três Figueiras, Porto Alegre - RS, 90470-340",
                    agua: 2,
                    alimentos: 3,
                    alimentos_infantis: 1,
                    roupas: 1,
                    agasalhos: 2,
                    higiene: 2,
                    higiene_feminina:4
                    });
    });
  }
  
  window.initMap = initMap;