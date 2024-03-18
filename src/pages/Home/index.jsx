import React from 'react'
import Header from './Header'
import Search from '../../components/Search'
import Category from './Category'
import Description from './Description'
import PropertyListing from './PropertyListing'
import CallToAction from './CallToAction'
import PropertyAgents from './PropertyAgents'

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
        </>
    )
}

export default Home