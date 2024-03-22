import React from 'react'
import BreadCrumb from '../BreadCrumb'

const SubHeader = ({headerTitle, breadcrumbTitle}) => {
  return (
    <div class="container-fluid header bg-white p-0">
        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5">
                <h1 class="display-5 animated fadeIn mb-4">{headerTitle}</h1> 
                    <BreadCrumb title={breadcrumbTitle}/>
            </div>
            <div class="col-md-6 animated fadeIn">
                <img class="img-fluid" src="img/header.jpg" alt=""/>
            </div>
        </div>
    </div>
  )
}

export default SubHeader