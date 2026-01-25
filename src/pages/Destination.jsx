import React, { useState } from 'react'
import nletter from "../assets/description/1.jpg"
import { desFamily, desTours } from '../Data'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

function Destination() {
 const [swiperRef, setSwiperRef] = useState(0);
 const [familySwiper, setFamilySwiper] = useState(0);

const nextSlide = () => {
  if (swiperRef) swiperRef.slideNext();
};

const prevSlide = () => {
  if (swiperRef) swiperRef.slidePrev();
};

const nexttSlide = () => {
  if (familySwiper) familySwiper.slideNext();
};
const prevvSlide = () => {
  if (familySwiper) familySwiper.slidePrev();
};


  return (
    <>

     
   <section className=' dis-hero mb'>
    <h2 className='sir absolute'>Destination </h2>
    <div className='flex absolute ai gap saki'>
      <h3>Home</h3>
      <h4>&gt;</h4>
      <p className='gin'>Destination</p>
    </div>
   </section>

   <section className="container pik mb">
    <h1 className='mb'>Explore Our Popular Destinations</h1>
    <div className='flex sb'>
      <p>Favorite destinations based on customer reviews.</p>
      <button>View All Destination</button>
    </div>
   </section>

<section className="container lik flex ai sb">
  <h2 className='mb'>Group Tour</h2>
  <div>
    <i onClick={prevSlide} className="bi bi-caret-left"></i>
    <i onClick={nextSlide} className="bi bi-caret-right"></i>
  </div>
</section>

{/* group tour image section  starts here*/}

<section className='container mik flex sb'>
    <Swiper
    onSwiper={setSwiperRef}
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
  {desTours.map((a=>(
    <SwiperSlide>
      <div>
      <img src={a.image} alt="" />
      <h3 className='jc ai flex'>{a.name}</h3>
      <p className='jc ai flex'>{a.des}</p>
      </div>
      </SwiperSlide>
       )))}
       </Swiper>
      
</section>
{/* group tour image section ends here */}

<section className="container lik flex ai sb">
  <h2 className='mb'>Family Tour</h2>
  <div>
    <i onClick={prevvSlide} className="bi bi-caret-left"></i>
    <i onClick={nexttSlide} className="bi bi-caret-right"></i>
  </div>
</section>

{/* family tour image section starts here*/}

<section className='container mik flex sb'>
<Swiper
  onSwiper={setFamilySwiper} 
  slidesPerView={6}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {desFamily.map((a=>(
        <SwiperSlide><div>
      <img src={a.image} alt="" />
      <h3 className='jc ai flex'>{a.name}</h3>
      <p className='jc ai flex'>{a.des}</p>
      </div></SwiperSlide>
       )))}
      </Swiper>
    
      
       
</section>
{/* group tour image section ends here*/}
    <section className="container pika flex ai ">
      <div className='pichu'>
        <img src={nletter} alt="" />
      </div>
      <div className='pika1'>
        <button>Join Our Newsletter</button>
        <h2>Unlock exclusive deals — prices drop as soon as you subscribe!</h2>
        <form action="">
          <input className='kk' type="text" placeholder='input your email' />
          <button>subscribe</button>
        </form>
        <p>Your email is safe with us — no spam, just useful travel insights.</p>
      </div>
    </section>

       </>
  )
}

export default Destination