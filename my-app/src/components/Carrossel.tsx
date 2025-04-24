'use client'; 
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

const Carrossel = () => {
  useEffect(() => {
    import('bootstrap'); 
  }, []);

  return (
    <section className="d-flex justify-content-center mt-4">
      <div id="carouselExampleIndicators" className="carousel slide w-2/3" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner justify-center">
          <div className="carousel-item active">
            <div className='d-flex justify-content-center'>
              <Image
                src="/images/gatinho.jpg"
                alt="Imagem do gatinho"
                width={800}
                height={600}
                style={{
                  objectFit: 'cover', 
                  width: '100%',
                  height: '500px'
                }}
              />
            </div>
          </div>

          <div className="carousel-item">
            <div className='d-flex justify-content-center'>
              <Image 
                src="/images/cachorroteste.jfif"
                alt="Imagem do cachorro"
                width={800}
                height={600}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '500px',
                }}
              />
            </div>
          </div>

          <div className="carousel-item">
            <div className='d-flex justify-content-center'>
              <Image 
                src="/images/test.png"
                alt="Imagem de teste"
                width={800}
                height={600}
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '500px',
                }}
              />
            </div>
          </div>
        </div>

        <button className="carousel-control-prev bg-transparent border-2"
          type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon bg-[#ff8110] rounded-l-4xl p-4 m-2 hover:scale-150" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" 
          type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon bg-[#ff8110] rounded-e-4xl p-4 m-2 hover:scale-150" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
};

export default Carrossel;