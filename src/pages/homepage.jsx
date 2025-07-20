
import React from 'react';
const Homepage = () => {
  return (
    <div className='d-block w-100 overflow-hidden'>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://media.istockphoto.com/id/1351998505/photo/tools-put-up-for-sale-in-a-hardware-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=EeIcRlUbMV8WctjRTr8fXH6RqLsh0qZ_lRV_KVfLuxo=" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://media.istockphoto.com/id/1840468645/photo/tool-display-at-a-hardware-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=kWm8_7Eyj8YdfHeZEde5cx1EUtRbMBog_Q6WgLfbJnM=" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://media.istockphoto.com/id/1840468645/photo/tool-display-at-a-hardware-store.webp?a=1&b=1&s=612x612&w=0&k=20&c=kWm8_7Eyj8YdfHeZEde5cx1EUtRbMBog_Q6WgLfbJnM=" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
    
  );
};

export default Homepage;

