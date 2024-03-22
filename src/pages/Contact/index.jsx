import React from 'react'
import SubHeader from '../../components/SubHeader'
import Search from '../../components/Search'
import ContactDetails from './ContactDetails'

const Contact = () => {
    return (
        <>
            <SubHeader headerTitle='Contact Us' breadcrumbTitle='Contact'/>
            <Search/>
            <ContactDetails/>
        </>
    )
}

export default Contact