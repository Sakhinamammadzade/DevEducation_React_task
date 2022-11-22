

export default function TrendingCards() {
    return (
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">
        <div className="card card-img image-one " id="item1">
            <div className="heart-icon">
                <i className="heart fa-solid fa-heart"></i>
            </div>
            <img className="img-fluid img-one" src="https://demo.themewinter.com/wp/bascart/sports/wp-content/uploads/sites/2/2021/08/product_image6.jpg" alt="" />
            <img className="img-fluid img-two" src="https://demo.themewinter.com/wp/bascart/sports/wp-content/uploads/sites/2/2021/08/product_image6.jpg" alt="" />
          
            <div className="cart">
                <div className="d-flex justify-content-around align-items-center">
                    <div className="icon-1">
                        <i className="fa-solid fa-eye"></i>
                    </div>
                    <div className="txt">
                        <button className="btn"> ADD TO CART</button>
                    </div>
                    <div className="icon-2">
                        <i className="fa-solid fa-arrow-right-arrow-left"></i>
                    </div>
                </div>
            </div>
            <div className="product-title">
                <a href="#"> Off Shoulder Ruched Slit Casual Tube Dress </a>
                <p>$90 <del>$120</del></p>
            </div>
        </div>
    </div>
   
    )
}
