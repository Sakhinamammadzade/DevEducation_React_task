import React from 'react';
import '../Banner/Banner.scss'

interface IDetail{
    title:string;
    desc:string;
    discount:string;
}

 function Banner(props:IDetail){
    const{title,desc,discount}=props
  
    return(
        <section className="training">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="text">
                       <h3>{title}</h3>
                        <h1>{discount}</h1>
                        <h2>{desc}</h2>
                        <a href="#">Shop Now <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    ) 
}
    


export default Banner