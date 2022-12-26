import React from 'react'
import Navbar from './Website/Navbar'
import './music.css'
import ImageM1 from '../asset/Yamahaf280.jpg'

const Music_section = () => {
  // const [devicedata, setdevicedata] = useState([])

  return (
    <>
    <Navbar/>
    <div className='body_music'>
            <div className="card1" style={{width:"18rem"}}>
                 <img src={ImageM1} className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">YAMAHA F280</h5>
                 <p className="card-text">PURE Acoustic begginer Guitar</p>
                <p>Cost:₹ 8500</p>
                 <a href="#" className="btn btn-primary">BUY NOW &nbsp;</a> &nbsp;
                 <a href="#" className="btn btn-primary">Wishlist</a>
            </div>
           </div>   
            {/* card2 */}
           <div className="card2" style={{width:"18rem"}}>
                 <img src={ImageM1} className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">YAMAHA F280</h5>
               <p className="card-text">PURE Acoustic begginer Guitar</p>
                <p>Cost:₹ 8500</p>
               <a href="#" className="btn btn-primary">BUY NOW &nbsp;</a> &nbsp;
            <a href="#" className="btn btn-primary">Wishlist</a>
            </div>
          </div>
          {/* card3 */}
          <div className="card3" style={{width:"18rem"}}>
                 <img src={ImageM1} className="card-img-top" alt="..."/>
             <div className="card-body">
                 <h5 className="card-title">YAMAHA F280</h5>
               <p className="card-text">PURE Acoustic begginer Guitar</p>
               <p>Cost:₹ 8500</p>
               <a href="#" className="btn btn-primary">BUY NOW &nbsp;</a> &nbsp;
            <a href="#" className="btn btn-primary">Wishlist</a>
            </div>
          </div>
    </div>
    </>
  )
}

export default Music_section
