import React from 'react'
import Navbar from '../components/Website/Navbar'
import './headphone_section.css'
import Mobile1 from '../asset/Mobile1.webp'
import Mobile2 from '../asset/MOBILE2.avif'
import Mobile3 from '../asset/MOBILE3.avif'

const Headphone_section = () => {
  return (
    <>
      <Navbar/>
    <div className='Body_headphone'>
            <div className="cardH1" style={{width:"18rem"}}>
                 <img src={Mobile1} className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">SAMSUNG GALAXY M53</h5>
                 <p className="card-text">8GB RAM,128GB,BLUE</p>
                <p>Cost:₹30999</p>
                 <a href="#" className="btn btn-primary">BUY NOW &nbsp;</a> &nbsp;
                 <a href="#" className="btn btn-primary">Wishlist</a>
            </div>
           </div>
           {/* CARD2 */}
           <div className="cardH2" style={{width:"18rem"}}>
                 <img src={Mobile2} className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">APPLE IPHONE 14 PLUS</h5>
                 <p className="card-text">8GB RAM,128GB,MIDNIGHT</p>
                <p>Cost:₹85,490</p>
                 <a href="#" className="btn btn-primary">BUY NOW &nbsp;</a> &nbsp;
                 <a href="#" className="btn btn-primary">Wishlist</a>
            </div>
           </div>
           {/* CARD3 */}
           <div className="cardH3" style={{width:"18rem"}}>
                 <img src={Mobile3} className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">OnePlus Nord CE2 Lite 5G</h5>
                 <p className="card-text">8GB RAM, 128GB, Blue Tide</p>
                <p>Cost:₹20,999</p>
                 <a href="#" className="btn btn-primary">BUY NOW &nbsp;</a> &nbsp;
                 <a href="#" className="btn btn-primary">Wishlist</a>
            </div>
           </div>
           
    </div>
    </>
  )
}

export default Headphone_section
