import React from 'react'
import Banner from '../../components/Banner/Banner'
import Header from '../../components/Header/Header'
import ShopPage from '../ShopPage/ShopPage'
import TrendingPages from '../TrendingPages/TrendingPages'


const Home = () => {
    return (
    <>
    <Header/>
    <Banner title='Trening' discount='50%off' desc='loremimpunloremlorem' />
    <ShopPage/>
    <TrendingPages/>
       
    </>
     
    )
}

export default Home
