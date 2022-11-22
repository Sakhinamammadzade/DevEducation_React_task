import React from 'react'
import './header.scss'

import logo from '../../assets/logo.png'
import { BsBagFill} from "react-icons/bs";
import { BsPerson} from "react-icons/bs";
import { BsHeartFill} from "react-icons/bs";
import { Link } from 'react-router-dom';


function Header (){
    return (
        <div id="header">
        <div className="container">
            <div className="top-header">
                <div className="left">
                    <ul className="list-unstyled">
                        <li className=" list-title first-li"><a href="#"><i className="fa-solid fa-circle dot"></i> Sale has
                                started! Up to 50% off <span>Shop Now</span> </a> </li>
                        <li className="list-title second-li"><a href="#"><i className="fa-solid fa-circle dot"></i>Free european
                                shipping over 99€</a></li>
                    </ul>
                </div>
                <div className="right-side">
                    <ul className="d-flex list-unstyled main-ul">
                        <li className="main-li help">Help</li>
                        <li id="language" className="main-li">
                            En<i className="fa-solid fa-angle-down"></i>
                            <ul className="list-unstyled">
                                <li>FR</li>
                                <li>BN</li>
                                <li>SP</li>
                            </ul>
                        </li>

                        <li id="currency" className="main-li">
                            EUR <i className="fa-solid fa-angle-down"></i>
                            <ul className="list-unstyled">
                                <li>USD</li>
                                <li> AUD</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="middle-header">
            <div className="left">
                <img className="img-fluid"
                    src={logo}
                    alt=""/>
            </div>

            <div className="right">
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                <input type="text" placeholder="Search for Products"/>

                <div className="elementor">
                    <div className="left">
                        <div className="d-flex">
                         <BsPerson/>
                            <p>ACCOUNT</p>
                        </div>
                    </div>
                    <div className="middle">
                        <div className="d-flex">
                           <BsHeartFill/>
                            <p>Wishlist</p>
                        </div>
                    </div>
                    <div className="shop-bag">
                         <BsBagFill className='user'/>
                        <span>0</span>

                        <div className="shop-list">

                        </div>
                    </div>
                    <div className="bar-icon">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
            </div>
        </div>
        <div className="big-menu">
            <div className="container">
                <div className=" d-flex justify-content-between align-items-center">
                    <div className="left">
                        <ul className="d-flex align-items-center">
                            <li><Link className='home' to='/'>Home</Link></li>
                            <li><Link to='/Man'>Man</Link></li> 
                            <li><Link to='/Women'>Women</Link></li> 
                            <li><Link to='/Pages' className='page-li'>Pages</Link></li>
                            <li><Link to='/shop'>Shop</Link></li>
                            <li><Link to='/layouts'>LAYOUTS</Link></li>
                            <li><Link to='/giftcards'>GIFT CARDS</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                           </ul>
                    </div>
                    <div className="big-menu-right-side">
                        <span className="call-us">Call us:</span>
                        <span className="tel">+38 (121) 553420</span>
                    </div>
                </div>

            </div>

        </div>
       
    </div>
    )
}

export default Header
