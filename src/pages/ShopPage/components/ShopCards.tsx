import React from 'react'
import '../../ShopPage/shop.scss'




export default function ShopCards(props:any) {
    return (
        <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-3">
        <div className=" card-one card-img">
            <img src={props.src} alt="" />
          
            <div className="txt txt-one">
                <div className="d-flex justify-content-between align-items center">
                    <h5 className="fitness">{props.name}</h5>
                    <i className=" right-arrow fa-solid fa-arrow-right-long"></i>
                </div>
            </div>
        </div>
    </div>
    )
}
//
//