import React from 'react'

const BreadCrumb = ({ title }) => {
    return (
        <nav aria-label="breadcrumb animated fadeIn">
            <ol class="breadcrumb text-uppercase">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a href="#">Pages</a></li>
                <li class="breadcrumb-item text-body active" aria-current="page">{title}</li>
            </ol>
        </nav>
    )
}

export default BreadCrumb