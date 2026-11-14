
document.addEventListener("DOMContentLoaded", () => {

    // =================================
    // ACTIVITY CHART
    // =================================

    const canvas = document.getElementById("activityChart");

    if (canvas && typeof Chart !== "undefined") {

        new Chart(canvas, {
            type: "line",

            data: {
                labels: [
                    "09:00", "10:00", "11:00",
                    "12:00", "13:00", "14:00",
                    "15:00", "16:00"
                ],

                datasets: [{
                    label: "Normal activity",
                    data: [24, 38, 31, 52, 45, 65, 58, 76],
                    borderColor: "#a78bfa",
                    backgroundColor: "rgba(167,139,250,0.10)",
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2
                }, {
                    label: "Suspicious activity",
                    data: [5, 8, 6, 13, 9, 17, 12, 20],
                    borderColor: "#f5a45d",
                    backgroundColor: "rgba(245,164,93,0.06)",
                    fill: true,
                    tension: 0.4,
                    borderWidth: 2
                }]
            },

            options: {
                responsive: true,
                maintainAspectRatio: false,

                plugins: {
                    legend: {
                        labels: {
                            color: "#aaa5bd",
                            usePointStyle: true,
                            boxWidth: 7,
                            font: { size: 10 }
                        }
                    }
                },

                scales: {
                    x: {
                        grid: {
                            color: "rgba(255,255,255,0.04)"
                        },
                        ticks: { color: "#89869e" }
                    },

                    y: {
                        beginAtZero: true,
                        grid: {
                            color: "rgba(255,255,255,0.05)"
                        },
                        ticks: { color: "#89869e" }
                    }
                }
            }
        });

    } else {
        console.warn("Activity chart is unavailable.");
    }


    // =================================
    // GLOBAL INTELLIGENCE MAP
    // =================================

    const mapElement = document.getElementById("worldMap");

    if (mapElement && typeof L !== "undefined") {

        const map = L.map("worldMap").setView([25, 15], 2);

        L.tileLayer(
            "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
            {
                attribution: "&copy; OpenStreetMap contributors",
                maxZoom: 19
            }
        ).addTo(map);

        const demoLocations = [
            { name: "Demo location: India", coords: [28.61, 77.20] },
            { name: "Demo location: United Kingdom", coords: [51.50, -0.12] },
            { name: "Demo location: USA", coords: [40.71, -74.00] },
            { name: "Demo location: Japan", coords: [35.68, 139.69] },
            { name: "Demo location: Brazil", coords: [-23.55, -46.63] }
        ];

        demoLocations.forEach(location => {

            L.circleMarker(location.coords, {
                radius: 7,
                color: "#42f5a1",
                fillColor: "#42f5a1",
                fillOpacity: 0.8
            })
            .addTo(map)
            .bindPopup(location.name);

        });

    } else {
        console.warn("Leaflet map is unavailable.");
    }

});
