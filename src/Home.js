import './Styles.css'
import React from "react";


function Home() {
  return (
  <>
  <div className="fu">
    <h1 className='recentProjects' style={{backgroundColor: '#061025', marginBottem:'20px'}}>Recent Projects</h1>
      <div className="full">
        
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false" >
          <div id="carouselExample" class="carousel slide" style={{width: '80%', marginLeft: '170px'}}>
            <div class="carousel-inner" style={{marginTop: '25px'}}>
              <div class="carousel-item active">
                <img src={require('./images/2.gif')} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={require('./images/1.gif')} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={require('./images/3.gif')} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={require('./images/4.gif')} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={require('./images/6.gif')} class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item">
                <img src={require('./images/vid2.gif')} class="d-block w-100" alt="..."/>
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        <br /><br />
          <h1 className='HireHeading' style={{borderBottom: 'none'}}>Order Now</h1>

          <div className='Hire'>
              <div className="pofileImg">
                  <img className="profileImg" src={require('./images/Profile_img.jpg')} alt="" />
              </div>

              <form className='hireform'>
              <div className='left'>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" placeholder='Full name' required />

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder='Your email' required />

                <label for="phone">Phone no:</label>
                <input type="tel" id="phone" name="phone" placeholder='Phone no' required />
              </div>

              <div className='right'>
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" placeholder='Your Age' required />

                <label for="budget">Budget:</label>
                <input type="number" id="budget" name="budget" placeholder='Budget in $' required />
                    
                <button className="hirebutton">Order</button>
              </div>
              </form>
          </div>

         <br /><br />
          <h1 className='sampleProjects'>Sample Projects</h1>

            <div className="circle">
              <div className="circl1">
                <img className="img" src={require('./images/27.jpg')} alt="" />
              </div>
              <div className="circl2">
                <img className="img" src={require('./images/11.jpg')} alt="" />
              </div>
              <div className="circl3">
                <img className="img" src={require('./images/12.jpg')} alt="" />
              </div>
              <div className="circl4">
                <img className="img" src={require('./images/13.jpg')} alt="" />
              </div>
              <div className="circl5">
                <img className="img" src={require('./images/31.jpg')} alt="" />
              </div>
              <div className="circl6">
                <img className="img" src={require('./images/18.jpg')} alt="" />
              </div>
              <div className="circl7">
                <img className="img" src={require('./images/16.jpg')} alt="" />
              </div>
              <div className="circl8">
                <img className="img" src={require('./images/32.jpg')} alt="" />
              </div>
              {/* <button className="MoreProjects" href={require('./Projects')}>More Projects</button> */}
            </div>
         </div>
        
      </div>
  </div>
        </>
        );
}

export default Home;