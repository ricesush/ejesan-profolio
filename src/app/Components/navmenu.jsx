'user client'

import React from 'react'
import Link from 'next/link'

export default function Navmenu() {
  return (
    <section className='shadow-sm bg-dark-gray'>
        <nav className="navbar navbar-expand-lg container">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-6" href='/'>e<span className='text-orange'>-</span>jesan<span className='text-orange'>.</span></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <ul className="d-lg-flex d-none navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item border-end-orange">
                            <Link className="nav-link fs-6 fw-bold active" aria-current="page" href='/'>Home</Link>
                        </li>
                        <li className="nav-item border-end-orange">
                            <Link className="nav-link fs-6 fw-bold" href='/projects'>Projects</Link>
                        </li>
                        <li className="nav-item border-end-orange">
                            <Link className="nav-link fs-6 fw-bold" href='/about'>About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-6 fw-bold" href='/contact'>Contact</Link>
                        </li>
                    </ul> */}
                    <ul className="d-lg-none navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item border-bottom border-opacity-25 border-secondary">
                            <Link className="nav-link fs-6 fw-bold active" aria-current="page" href='/'>Home</Link>
                        </li>
                        <li className="nav-item border-bottom border-opacity-25 border-secondary">
                            <Link className="nav-link fs-6 fw-bold" href='/projects'>Projects</Link>
                        </li>
                        <li className="nav-item border-bottom border-opacity-25 border-secondary">
                            <Link className="nav-link fs-6 fw-bold" href='/about'>About Me</Link>
                        </li>
                        <li className="nav-item border-bottom border-opacity-25 border-secondary">
                            <Link className="nav-link fs-6 fw-bold" href='/contact'>Contact</Link>
                        </li>
                    </ul>
                    <ul className="list-group list-group-horizontal d-flex align-items-center ms-auto">
                        <li className="list-group-item bg-transparent border-0 ms-lg-0 ms-auto">
                            <Link className="nav-link active" aria-current="page" href='/'><i className="fs-5 bi bi-github"></i></Link>
                        </li>
                        <li className="list-group-item bg-transparent border-0">
                            <Link className="nav-link" href='/'><i className="fs-5 bi bi-linkedin"></i></Link>
                        </li>
                        <li className="list-group-item  bg-transparent border-0 me-lg-0 me-auto">
                            <Link className="nav-link" href='/'><i className="fs-5 bi bi-facebook"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
  )
}
