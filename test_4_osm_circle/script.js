window.addEventListener("load", () => {
   let map = L.map('map').setView([49.18660241815089, -0.36225316822461645], 13);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
   }).addTo(map);
});