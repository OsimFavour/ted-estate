import React from 'react'
import Header from './Header'
import Search from '../../components/Search'
import Category from './Category'
import PropertyListing from './PropertyListing'
import PropertyAgents from './PropertyAgents'
import Testimonials from './Testimonials'
import SwipeToSlide from './SwipeToSlide'
import Description from '../../components/Description'
import CallToAction from '../../components/CallToAction.jsx'

const Home = () => {
    return ( 
        <>
            <Header/>
            <Search/>
            <Category/>
            <Description/>
            <PropertyListing/>
            <CallToAction/>
            <PropertyAgents/>
            <Testimonials/>
            <SwipeToSlide/>
        </>
    )
}

export default Home