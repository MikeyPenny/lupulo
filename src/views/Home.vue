<template>
    <default-layout>
        <section slot="content">
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active center">
                        <img class="d-block w-100" src="../imgs/Carrusel1.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../imgs/Carrusel3.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../imgs/Carrusel2b.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div id="micrositio" class="row">
                <div class="col-lg-4">
                    <div class="card border-light">
                        <div id="vid" class="card-header">
                            Videos
                        </div>
                        <img src="../imgs/videos.png" alt="videos" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#/videos" class="btn btn-link">Leer más</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card border-light">
                        <div id="recips" class="card-header">
                            Recetas
                        </div>
                        <img src="../imgs/recetas.png" alt="videos" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#/recipes" class="btn btn-link">Leer más</a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="card border-light">
                        <div id="interv" class="card-header">
                            Entrevistas
                        </div>
                        <img src="../imgs/entrevistas.png" alt="videos" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#/interviews" class="btn btn-link">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="favoritos" class="row twocolordiv">
                
                <div class="col-lg-4">
                    <h2>
                        <span>Favoritos</span>
                    </h2>
                </div>
                <div class="col-lg-4">
                    <div class="card">    
                        <img src="../imgs/fav1.jpeg" alt="videos" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#/favorites" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-4">
                    <div class="card">    
                        <img src="../imgs/fav2.jpg" alt="videos" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#/favorites" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
            <div id="weekBeer" class="row">
                <div class="col-lg-6 col-md-12">
                    <img src="../imgs/brownAle.jpg" alt="BrownAle">
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="card border-light">    
                        <div class="card-body">
                            <h5 class="card-title ">Cerveza de la semana</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#/beerweek" class="btn btn-light">Leer más</a>
                        </div>
                    </div>
                    <div id="regCnt" class="card border-light">    
                        <div class="card-body">
                            <h5 class="card-title">Cuenta regresiva</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#/regresive" class="btn btn-light">Leer más</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div>
                    <h2 class="insta">Instagram</h2>
                </div>
            </div>    
            <div class="row">
                <div class="insta">
                   
                </div>
            </div>        
        </section>
    </default-layout>
</template>



<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import Vue from 'vue'

export default {
    name: 'HomeView',

    components: {
        DefaultLayout,
        
    }
}
</script>

