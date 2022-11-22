import React from 'react'
import ShopCards from './components/ShopCards'

export default function ShopPage() {
    return (
        <section className="shoppages">
        <div className="head-category">
            <span>Category</span>
            <h1> Shop by Category</h1>
        </div>
        <div className="my-container">
            <div className="row justify-content-between align-items-center">
             <ShopCards src="https://demo.themewinter.com/wp/bascart/sports/wp-content/uploads/sites/2/2021/10/category_image4.jpg" name="FITNESS & TRAINING"/>
             <ShopCards src='https://demo.themewinter.com/wp/bascart/sports/wp-content/uploads/sites/2/2021/10/category_image3.jpg' name='FOOTBALL'/>
             <ShopCards src='https://demo.themewinter.com/wp/bascart/sports/wp-content/uploads/sites/2/2021/10/category_image1.jpg' name='RUNNING'/>
             <ShopCards src='https://demo.themewinter.com/wp/bascart/sports/wp-content/uploads/sites/2/2021/10/category_image2.jpg' name='WOMEN'/>
            
               </div>
        </div>
    </section>
    )
}
