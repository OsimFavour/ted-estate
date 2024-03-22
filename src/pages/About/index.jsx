import React from 'react'
import Search from '../../components/Search'
import Description from '../../components/Description'
import CallToAction from '../../components/CallToAction.jsx'
import SubHeader from '../../components/SubHeader/index.jsx'

const About = () => {
    return (
        <>
            <SubHeader headerTitle='About Us' breadcrumbTitle='About'/>
            <Search/>
            <Description/>
            <CallToAction/>
        </>
    )
}

export default About