document.addEventListener("DOMContentLoaded", () => {
  // Initialize the map (centered roughly on Buffalo, NY)
  const map = L.map('map').setView([42.8864, -78.8784], 11);

  // Add standard Google Maps style tiles
  L.tileLayer('https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}', {
    attribution: '&copy; Google Maps',
    maxZoom: 19
  }).addTo(map);

  const vendorListEl = document.getElementById('vendor-list');
  const markers = {};

  // Custom marker icon
  const iceCreamIcon = L.divIcon({
    className: 'custom-div-icon',
    html: `<div style="background-color: var(--color-primary); width: 14px; height: 14px; border-radius: 50%; border: 2px solid white; box-shadow: 0 0 4px rgba(0,0,0,0.3);"></div>`,
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  });

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const todayName = days[new Date().getDay()];

  // Render Vendors
  vendors.forEach(vendor => {
    const todayHours = vendor.hours[todayName] || "Closed";

    // Generate full week hours HTML
    const hoursHtml = days.map(day => `
      <div class="hour-row ${day === todayName ? 'current-day' : ''}">
        <span>${day}</span>
        <span>${vendor.hours[day] || 'Closed'}</span>
      </div>
    `).join('');

    // 1. Add Marker to Map
    const marker = L.marker([vendor.location.lat, vendor.location.lng], { icon: iceCreamIcon })
      .addTo(map)
      .bindPopup(`
        <div class="popup-title">${vendor.name}</div>
        <div class="popup-desc">${vendor.location.address}</div>
        <div class="popup-desc"><strong>${vendor.price}</strong> • Today: ${todayHours}</div>
      `);
    
    markers[vendor.id] = marker;

    // 2. Create Sidebar Card
    const card = document.createElement('div');
    card.className = 'vendor-card';
    card.tabIndex = 0; // Make focusable
    
    // Generate flavor tags HTML
    const flavorsHtml = vendor.flavors.map(f => `<span class="flavor-tag">${f}</span>`).join('');

    card.innerHTML = `
      <div class="vendor-header">
        <h3 class="vendor-name">${vendor.name}</h3>
        <span class="vendor-rating">${vendor.rating}</span>
      </div>
      <div class="vendor-details">
        <div>📍 ${vendor.location.address}</div>
        <div>💵 ${vendor.price}</div>
        <details class="hours-details">
          <summary>🕒 Today: ${todayHours}</summary>
          <div class="hours-list">
            ${hoursHtml}
          </div>
        </details>
      </div>
      <div class="flavors-section">
        <div class="flavor-week">✨ Flavor of the Week: ${vendor.flavorOfTheWeek}</div>
        <div class="flavor-tags">
          ${flavorsHtml}
        </div>
      </div>
    `;

    // Click event to center map and open popup
    card.addEventListener('click', () => {
      map.flyTo([vendor.location.lat, vendor.location.lng], 14, {
        duration: 1.5
      });
      marker.openPopup();
      
      // Scroll to top on mobile when card is clicked (optional enhancement)
      if(window.innerWidth <= 768) {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }
    });

    vendorListEl.appendChild(card);
  });
});
