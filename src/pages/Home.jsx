import React from 'react'
import one from "../assets/image/1.jpg"
import two from "../assets/image/2.jpg"
import three from "../assets/image/3.jpg"
import four from "../assets/image/4.jpg"
import defining from "../assets/image/featured/defining.jpg"
import definingsm from "../assets/image/featured/defining-sm1.jpg"
import { gTours, popDestination, tourPackage } from '../Data'


function Home() {
  const layoutClasses = ["a", "b", "c", "d"];
  return (
    <>
     <div>
  <section className="hero">
    <div className="grid dis">
      <h1>Discover The World Enjoy <br /> The Journey Feel Alive.</h1>
      <p>It inspires you to explore new places and cultures, embrace every <br />moment, and feel truly alive.</p>
      <div className="flex ai">
        <button>Discover More</button>
        <h2>Watch Video</h2>
      </div>
      <div className="hawa-hub gtc2 grid">
        <div className=" flex ai relative">
          <img className="hawa-img1" src={one} alt />
          <img className="hawa-img2" src={two} alt />
          <img className="hawa-img3" src={three} alt />
          <img className="hawa-img4" src={four} alt />
          <div className="plus">+</div>
        </div>
        <p>1260 people used <strong>Hawaa</strong> <br /> <strong>Hub</strong> in the last <strong>24
            hours</strong></p>
      </div>
    </div>
    <div className="hero-right" />
  </section>
  {/* hero section end */}
  {/* travel page starts here */}
  <section className="con1">
    <div className="hero-feat gg margin">
      <div className="flex ">
        <div className="pl">
          <i className="bi bi-airplane-fill" />
        </div>
        <div>
          <h2>Travels &amp; Tours</h2>
          <p>Discover the world's wonders with our personalized travel experiences.</p>
        </div>
      </div>
      <div className="flex ">
        <div className="pl">
          <i className="bi bi-water" />
        </div>
        <div>
          <h2>Enjoy Flexibility</h2>
          <p>Plan freely and adapt your journey with options tailored to your style.</p>
        </div>
      </div>
      <div className="flex ">
        <div className="pl">
          <i className="bi bi-luggage-fill" />
        </div>
        <div>
          <h2>Hotel Reservation</h2>
          <p>Secure stays worldwide with seamless booking support made for comfort.</p>
        </div>
      </div>
    </div>
  </section>
  {/* popular page starts here */}
  <section className="pop con">
    <h1>Explore Our Popular Destinations</h1>
    <div className="flex sb ai mb">
      <p>Favorite destinations based on customer reviews</p>
      <button>View All</button>
    </div>
  </section>
  {/* pop des thumbnail page starts */}
  <section className="con gg">
    <div className="pop-des p12 flex">
      {popDestination.map((a)=>(
      <div className="kk" key={a.id}>
        <div className="rr">
          <img src={a.image} alt />
        </div>
        <div className="flex sb">
          <div className>
            <h2>{a.name}</h2>
            <p>{a.des}</p>
          </div>
          <div className="btn1">
            <button><i className="bi bi-arrow-up-right" /></button>
          </div>
        </div>
      </div>
       ))}
    </div>
  </section>
  {/* featured tours page starts here */}
  <section className="pop con">
    <h1>Our Featured Tours</h1>
    <div className="flex sb ai mb">
      <p>Favorite destinations based on customer reviews</p>
      <button>View All Package</button>
    </div>
  </section>
  {/* featured button page starts here */}
  <section className="con mb">
    <div className="flex gap ">
      <a href className="feat-btn2">Group Tour</a>
      <a href className="feat-btn1">Family Tour</a>
      <a href className="feat-btn1">Honeymoon Tour</a>
      <a href className="feat-btn1">Wildlife and Safari</a>
    </div>
  </section>
  {/* featured card page starts here */}
  <section className="con gg ">


       {gTours.map((a)=>(
    <div className="card-con" key={a.id}>
      <div className="rrr flex flex-dir">
        <img src={a.image} alt />
      </div>
      <div className="card-bot">
        <h2>{a.name}</h2>
        <div className="flex gap40 gray mb">
          <p>{a.des}</p>
          <p>{a.des1}</p>
        </div>
        <div className="flex sb ai gap">
          <p> <span className="bold">{a.price}</span> <span className="gray">{a.person}</span></p>
          <button>{a.button}</button>
        </div>
      </div>
    </div>
    ))}
  </section>
  {/* featured card page ends here */}
  {/* defining page starts here */}

  <section className="container def flex py gtc2">
    <div className="ttl">
      <img className="def-big-img" src={defining} alt />
      <img className="def-small-img" src={definingsm} alt />
    </div>
    <div className="sen">
      <h2>Our Defining Qualities</h2>
      <p>Aenean feugiat ante ident augue bibendum, bibendum interdum dunatont fermentum. Integer auctor enim eget excet eleifend tristique. Suspendisse sed elit tortor. Nunc luctus, tellus acces elementum accumsan, diam dolor accumsan eros, sit amet porttitor diam ante ac augue.</p>
      <div className="kkk">
        <div className="def-icon">
          <i className="bi bi-gear" />
        </div>
        <div className="def-icon1">
          <h3>Exceptional Service</h3>
          <p>Every journey is tailored to meet your unique needs, preferences, and dreams.</p>
        </div>
      </div>
      <div className="kkk">
        <div className="def-icon">
          <i className="bi bi-person-check" />
        </div>
        <div className="def-icon1">
          <h3>Trusted Expertise</h3>
          <p>Years of experience and a network of reliable partners ensure you are in safe hands.</p>
        </div>
      </div>
      <div className="kkk">
        <div className="def-icon">
          <i className="bi bi-globe-asia-australia" />
        </div>
        <div className="def-icon1">
          <h3>Seamless Travel</h3>
          <p>We are committed to promoting eco-friendly tours and responsible tourism.</p>
        </div>
      </div>
    </div>
  </section>
  {/* defining page ends here */}
  {/* destination page starts here */}
  <section className="desti">
    <div className="con py gtc5">
      <div>
        <h2>168k</h2>
        <p>Happy Clients</p>
      </div>
      <div>
        <h2>450k+</h2>
        <p>Destinations</p>
      </div>
      <div>
        <h2>49+</h2>
        <p>Global Branch</p>
      </div>
      <div>
        <h2>26k+</h2>
        <p>Campaigns</p>
      </div>
    </div>
  </section>
  {/* destination page ends here */}
  {/* family tour page starts here */}
  <section className="con ">
    <div className="father">
  {tourPackage.map((tour, index) => {
    const letterClass = layoutClasses[index];
    const isMiddleCard = index === 1 || index === 2;
    const innerClass = isMiddleCard ? "absolute mm flex" : "absolute jj";

    return (
      <div className={`son ${letterClass} relative`} key={tour.id}>
        <img 
          className="www" 
          src={tour.image} 
          alt={tour.title} 
          style={index === 0 || index === 3 ? { height: 342 } : {}} 
        />
        
        <div className={innerClass}>
          {isMiddleCard ? (
            <>
              <div>
                <p className="cursive">{tour.title}</p>
                <h2>{tour.heading}</h2>
                <p className="ss">{tour.des}</p>
              </div>
              <div>
                <button className="goku-son1">{tour.button}</button>
              </div>
            </>
          ) : (
            <>
              <p className="cursive">{tour.title}</p>
              <h2>{tour.heading}</h2>
              <p className="ss">{tour.des}</p>
              <button className="goku-son">{tour.button}</button>
            </>
          )}
        </div>
      </div>
    );
  })}
</div>
  </section>
  {/* family tour page ends here */}
  <div className="con">
    <div className="sub">
      <div className="img-box">
      </div>
      <div>
        <h2>Subscribe to get information, latest news and other interesting offers about  Hawaa</h2>
      </div>
      <div className="flex hub">
        <div className="flex">
          <i className="bi bi-envelope" />
          <form action>
            <input className="inp" type="text" name placeholder="your email" />
          </form>
        </div>
        <button type="submit">subscribe</button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Home