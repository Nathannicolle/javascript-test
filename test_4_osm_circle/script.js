window.addEventListener("load", () => {
   // Initialisation de la carte
   let map = L.map('map').setView([49.18660241815089, -0.36225316822461645], 13);

   // Ajout de la partie "crédits" (copyright OSM...)
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap (test.fr)'
   }).addTo(map);

   // Ajout du marqueur de position
   var marker = L.marker([49.18660241815089, -0.36225316822461645]).addTo(map);

   // Ajout d'un cercle
   var circle = L.circle([49.18660241815089, -0.36225316822461645], {
      color: '#033C49',
      fillColor: '#033C49',
      fillOpacity: 0.5,
      radius: 5000
   }).addTo(map);
});