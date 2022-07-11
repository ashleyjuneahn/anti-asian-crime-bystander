mapboxgl.accessToken = 'pk.eyJ1IjoiYXNobGV5YWhuIiwiYSI6ImNsNWI3eHZ4ODA0enkzY284bjNlaDhmMjMifQ.HozjJ6nE5RCH77MlJ4h3Aw'

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/light-v10', // style URL
    center: [-100, 39.51753445043968], // starting position [lng, lat]
    zoom: 3 // starting zoom
});

map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl());

const geojson = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-87.62630524694008,41.89064589159602]
        },
        properties: {
          title: 'small',
          description: 'Chiacago, Illinois: <b>0%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-98.50570788900608,29.430572296569338]
        },
        properties: {
          title: 'small',
          description: 'San Antonio, Texas: <b>0%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-112.08578176858391,33.4413641329149]
        },
        properties: {
          title: 'small',
          description: 'Phoneix, Arizona: <b>50%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.42233910138688,37.77970856265972]
        },
        properties: {
          title: 'small',
          description: 'San Francisco, California: <b>50%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-122.33126738062842,47.60430590605284]
        },
        properties: {
          title: 'small',
          description: 'Seattle, Washington: <b>56%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-118.24442225118108,34.05268676753737]
        },
        properties: {
          title: 'medium',
          description: 'Los Angeles, California: <b>114%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-71.05787315306213,42.35994003591094]
        },
        properties: {
          title: 'medium',
          description: 'Boston, Massachussetts: <b>133%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-121.89280855274713,37.33702362186325]
        },
        properties: {
          title: 'medium',
          description: 'San Jose, California: <b>150%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-73.60553992293117,45.50141988023452]
        },
        properties: {
          title: 'medium',
          description: 'Montreal, Quebec: <b>167%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.16441099123949,39.95165791619044]
        },
        properties: {
          title: 'medium',
          description: 'Philadelphia, Pennsylvania: <b>200%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-81.69404990628824,41.50429267838402]
        },
        properties: {
          title: 'medium',
          description: 'Cleveland, Ohio: <b>200%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-79.38222113785059,43.65693385677503]
        },
        properties: {
          title: 'medium',
          description: 'Toronto, Ontario: <b>280%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-75.6908578270016,45.42012975989627]
        },
        properties: {
          title: 'big',
          description: 'Ottawa, Ontario: <b>600%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-121.49549078506978,38.58231526505065]
        },
        properties: {
          title: 'big',
          description: 'Sacramento, California: <b>700%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-123.11225299759843,49.255625814704445]
        },
        properties: {
          title: 'big',
          description: 'Vancouver, British Columbia: <b>717%</b>'
        }
      },
      {
        type: 'Feature',
        geometry: {
          type: 'Point',
          coordinates: [-73.98739483043857,40.73124616921035]
        },
        properties: {
          title: 'big',
          description: 'New York, New York: <b>800%</b>'
        }
      }

    ]
  };

// add markers to map
for (const feature of geojson.features) {
    // create a HTML element for each feature
    const el = document.createElement('div');
    el.className = 'marker';
    el.id = feature.properties.title;

    //create popup
    const popup = new mapboxgl.Popup({ offset: 25, closeButton: false, closeOnClick: false })
        .setLngLat(feature.geometry.coordinates)
        .setHTML(
        `<p>${feature.properties.description}</p>`
        );
    
    //create marker and add to map
    new mapboxgl.Marker(el).setLngLat(feature.geometry.coordinates).addTo(map);

    //add hover event 
    el.addEventListener('mouseenter', (e) => popup.addTo(map));
    el.addEventListener('mouseleave', (e) => popup.remove());
}

//add legend to map
const numbers = [
  '0-99%',
  '100-200%',
  '200%+'
];
const sizes = [
  'small',
  'medium',
  'big'
];
index = 0;
for (let i = 0; i < 3; i++) {
  const item = document.createElement('div');
  item.className = 'legend-value';
  const key = document.createElement('span');
  key.id = sizes[index];
  key.className = 'legend-key';

  const value = document.createElement('span');
  value.innerHTML = numbers[index];
  value.className = 'legend-value';
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
  index += 1;
};