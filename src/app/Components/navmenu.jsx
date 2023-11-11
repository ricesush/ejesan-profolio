'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navmenu() {
    const pathName = usePathname();
    const navLink = [
        {
            pageName: "Home",
            pageLink: "/",
        },
        {
            pageName: "Projects",
            pageLink: "/projects",
        },
        {
            pageName: "Contact",
            pageLink: "/contact",
        }
    ];

    const socmedLinks = [
        {
            icon: "bi-github",
            link: "https://github.com/ricesush",
        },
        {
            icon: "bi-linkedin",
            link: "https://www.linkedin.com/in/ejsan/",
        },
        {
            icon: "bi-facebook",
            link: "https://www.facebook.com/RiceSush",
        }
    ];


  return (
    <section className='shadow-sm bg-dark-gray'>
        <nav className="navbar navbar-focus navbar-dark  navbar-expand-lg container">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-6" href='/'>e<span className='text-orange'>-</span>jesan<span className='text-orange'>.</span></Link>
                <button className="navbar-toggler navbar-focus" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="d-lg-none navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                        {navLink.map(({pageLink, pageName}) => (
                            <li key={pageName} className="nav-item border-bottom border-opacity-25 border-secondary">
                                <Link  className={`nav-link fs-6 fw-bold ${pathName == pageLink ? "activePage" : ""}`} aria-current="page" href={pageLink}>{pageName}</Link>
                            </li>
                        ))}
                    </ul>
                    <ul className="list-group list-group-horizontal d-flex align-items-center ms-auto me-lg-0 me-auto col-lg col-3">
                        {socmedLinks.map(({icon, link}) => (
                            <li key={icon} className="list-group-item bg-transparent border-0 ms-lg-0 ms-auto">
                                <Link  className="nav-link" target='_blank' href={link}><i className={`fs-5 bi ${icon}`}></i></Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}
