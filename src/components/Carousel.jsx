import React from 'react'
// import './style.css'
const Carousel = () => {
  return (
    <>
    <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://png.pngtree.com/png-vector/20191212/ourlarge/pngtree-neon-lights-with-a-variety-of-sparkling-colors-png-image_2055849.jpg" height='600' className="d-block w-100" alt="neon light" />
            <div className="carousel-caption d-none d-md-block">
              <h5>NEON LIGHTS</h5>
              {/* <p>Some representative placeholder content for the first slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://www.bhmpics.com/downloads/colored-smoke-backgrounds-/14.abstract-3d-frame-with-puffs-colorful-smoke-neon-light-black-background-ai-generated_88188-2843.jpg" className="d-block w-100" height='600' alt="neon color" />
            <div className="carousel-caption d-none d-md-block">
              <h5>SMOKE NEON COLOR</h5>
              {/* <p>Some representative placeholder content for the second slide.</p> */}
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://t4.ftcdn.net/jpg/01/89/29/21/360_F_189292123_gsMnCPkesuyISwvv6pokpefWMCA1nTTJ.jpg" height='600' className="d-block w-100" alt="neon" />
            <div className="carousel-caption d-none d-md-block">
              <h5>SPLASHED COLOR</h5>
              {/* <p>Some representative placeholder content for the third slide.</p> */}
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Carousel