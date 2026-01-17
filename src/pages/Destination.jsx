import React from 'react'
import one from "../assets/description/sm-1.jpg"
import two from "../assets/description/sm-2.jpg"
import three from "../assets/description/sm-3.jpg"
import four from "../assets/description/sm-4.jpg"
import five from "../assets/description/sm-5.jpg"
import six from "../assets/description/sm-6.jpg"
import nletter from "../assets/description/1.jpg"

function Destination() {
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
 {/* group tour section */}
<section className="container lik flex ai sb">
  <h2 className='mb'>Group Tour</h2>
  <div>
    <i class="bi bi-caret-left"></i>
     <i class="bi bi-caret-right"></i>
  </div>
</section>
{/* group tour image section */}

<section className='container mik flex sb'>
    <div>
      <img src={one} alt="" />
      <h3 className='jc ai flex'>Venice</h3>
      <p className='jc ai flex'>306 Tours</p>
      </div>
       <div>
      <img src={two} alt="" />
      <h3 className='jc ai flex'>Bali</h3>
      <p className='jc ai flex'>256 Tours</p>
      </div>
       <div>
      <img src={three} alt="" />
      <h3 className='jc ai flex'>James Bond Island</h3>
      <p className='jc ai flex'>256 Tours</p>
      </div>
       <div>
      <img src={four} alt="" />
      <h3 className='jc ai flex'>Phuket</h3>
      <p className='jc ai flex'>256 Tours</p>
      </div>
       <div>
      <img src={five} alt="" />
      <h3 className='jc ai flex'>Chiang Mai</h3>
      <p className='jc ai flex'>226 Tours</p>
      </div>
       <div>
      <img src={six} alt="" />
      <h3 className='jc ai flex'>Bana Hills</h3>
      <p className='jc ai flex'>126 Tours</p>
      </div>
</section>

{/* family tour section */}
<section className="container lik flex ai sb">
  <h2 className='mb'>Family Tour</h2>
  <div>
    <i class="bi bi-caret-left"></i>
     <i class="bi bi-caret-right"></i>
  </div>
</section>
{/* group tour image section */}

<section className='container mik flex sb'>
       <div>
      <img src={four} alt="" />
      <h3 className='jc ai flex'>Phuket</h3>
      <p className='jc ai flex'>256 Tours</p>
      </div>
       <div>
      <img src={five} alt="" />
      <h3 className='jc ai flex'>Chiang Mai</h3>
      <p className='jc ai flex'>226 Tours</p>
      </div>
       <div>
      <img src={six} alt="" />
      <h3 className='jc ai flex'>Bana Hills</h3>
      <p className='jc ai flex'>126 Tours</p>
      </div>
      <div>
      <img src={one} alt="" />
      <h3 className='jc ai flex'>Venice</h3>
      <p className='jc ai flex'>306 Tours</p>
      </div>
       <div>
      <img src={two} alt="" />
      <h3 className='jc ai flex'>Bali</h3>
      <p className='jc ai flex'>256 Tours</p>
      </div>
       <div>
      <img src={three} alt="" />
      <h3 className='jc ai flex'>James Bond Island</h3>
      <p className='jc ai flex'>256 Tours</p>
      </div>
</section>

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