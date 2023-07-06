<template>
  <div class="photo-widget">
      <h1 class="ket1">Photo widget</h1>
    <div class="image-container">
      <img :src="currentPhoto" :alt="currentPhoto" :style="{ width: '1000px', height: 'auto' }" />
    </div>
    <div class="controls-foto">
      <button @click="prevPhoto">Previous</button>
      <button @click="nextPhoto">Next</button>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      photos: [require('../assets/1.jpg'),require('../assets/2.jpg'),require('../assets/3.jpg'),require('../assets/4.jpg'),require('../assets/5.jpg')],
      currentIndex: 0,
    };
  },
  computed: {
    currentPhoto() {
      return this.photos[this.currentIndex];
    },
  },
  methods: {
    prevPhoto() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.photos.length - 1;
      }
    },
    nextPhoto() {
      if (this.currentIndex < this.photos.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
  },
};
</script>

<style>
.ket1 {
  font-weight: bold;
  margin-bottom: 10px;
  color: black;
}

.photo-widget {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
}
.image-container {
  margin-bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  max-width: 75%;
  max-height: 75%;
}

.controls-foto button {
  padding: 10px 20px;
  font-size: 18px;
  background-color: darkgrey;
  color: black;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-radius: 20px;
  margin-right: 10px;
}

.controls-foto button:hover {
  background-color: lightgray;
}

</style>