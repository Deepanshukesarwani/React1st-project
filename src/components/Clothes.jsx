import React from 'react'
import Navbar from '../components/Website/Navbar'
import './clothes.css'
import Clothes1 from '../asset/clothes1.webp'
import Clothes2 from '../asset/clothes2.webp'

const Clothes = () => {
  return (
    <>
    <Navbar/>
    <div className='body_clothes'>
          <div className="cardC1" style={{width:"15rem"}}>
                 <img src={Clothes1} className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">Men's Black Game Over Minimal Typography Hoodie</h5>
                 <p className="card-text">SIZE M</p>
                <p>Cost:₹14,99</p>
                 <a href="#" className="btn btn-primary">BUY NOW &nbsp;</a> &nbsp;
                 <a href="#" className="btn btn-primary">Wishlist</a>
            </div>
           </div>
           {/* CARD2 */}
           <div className="cardC2" style={{width:"15rem"}}>
                 <img src={Clothes2} className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">Men's Gardenia Christmas Typography Oversized Sweatshirt</h5>
                 <p className="card-text">SIZE M</p>
                <p>Cost:₹13,99</p>
                 <a href="#" className="btn btn-primary">BUY NOW &nbsp;</a> &nbsp;
                 <a href="#" className="btn btn-primary">Wishlist</a>
            </div>
           </div>
    </div>
    </>
  )
}

export default Clothes
