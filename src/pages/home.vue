<template>
    <div class="home">
        <main>
            <h1>Home</h1>
            <h2>Selamat Datang di Halaman Home <br> By Ahmad Farohi </h2>
            <p>Pada Website ini, menampilkan beberapa menu Widget yang dapat kamu berikut menunya: <br>1. Weather <br>2. Location <br>3. Stopwatch <br>4. Tic Tac Toe <br>5. Photo</p>
            <h3>Selamat Menggunakan :)</h3>
        </main>
    </div>
</template>

<style>
.home {
    background-image: url('../assets/home.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.home main {
    min-height: 100vh;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-left:  500px;
    padding-right:  500px;
}

.home main h1,
.home main h2,
.home main p,
.home main h3 {
    color: lime;
    text-align: center;
    font-weight: bold;
}

</style>