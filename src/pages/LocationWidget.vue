<template>
  <div class="location-widget">
    <h2>Your Location</h2>
    <div v-if="latitude && longitude">
      <p>Latitude: {{ latitude }}</p>
      <p>Longitude: {{ longitude }}</p>
    </div>
    <div v-else>
      <p>Finding your location...</p>
    </div>

    <div class="location-input">
      <label for="latitude">Latitude:</label>
      <input type="text" id="latitude" v-model="inputLatitude" />
    </div>
    <div class="location-input">
      <label for="longitude">Longitude:</label>
      <input type="text" id="longitude" v-model="inputLongitude" />
    </div>

    <button class="hmm" @click="fetchLocationDetails">Find Location Details</button>

    <div v-if="foundLocation">
      <h3>Location Details</h3>
      <p>{{ foundLocation.components.country }}</p>
      <p>{{ foundLocation.components.city }}</p>
      <p>{{ foundLocation.components.street }}</p>
      <p>Postal Code: {{ foundLocation.components.postcode }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      inputLatitude: '',
      inputLongitude: '',
      foundLocation: null,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
  },
  methods: {
    getPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
    async fetchLocationDetails() {
      try {
        const apiKey = '92591005a7b94008909d59a64b6d2a49';
        const latitude = this.inputLatitude || this.latitude;
        const longitude = this.inputLongitude || this.longitude;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          latitude + ',' + longitude
        )}&key=${apiKey}`;

        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.results && data.results.length > 0) {
          const location = data.results[0];
          this.foundLocation = location;
          console.log('Location:', location);
          // Lakukan sesuatu dengan data lokasi yang ditemukan
        }
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    },
  },
};
</script>

<style>
.hmm {
  padding: 10px 20px;
  background-color: darkgrey;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
}
.hmm:hover {
  background-color: lightgrey;
}
.location-widget {
  background-image: url('../assets/lokasi.jpg');
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.location-widget h2 {
  color: white;
  font-size: 24px;
  margin-bottom: 20px;
}

.location-widget p {
  color: white;
}

.location-input {
  margin-top: 20px;
}

.location-input label {
  display: block;
  margin-bottom: 5px;
  color: white;
  font-size: 16px;
}

.location-input input {
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.location-details h3 {
  margin-bottom: 10px;
  color: white;
  font-size: 18px;
}

.location-details p {
  margin: 5px 0;
  color: white;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>

