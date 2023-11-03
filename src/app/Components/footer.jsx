import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className='shadow pt-5 bg-dark-gray'>
        <section className='container d-lg-flex pt-2 border-top'>
          <div className="">
            <Link className="navbar-brand fw-bold " href='/'>e<span className='text-orange'>-</span>jesan<span className='text-orange'>.</span></Link>
          </div>
          <div className='mx-auto'>
            <p className='fs-6'>Created by <strong className='fs-6 text-orange'>PIXELARTME</strong></p>
          </div>
          <ul className="list-group list-group-horizontal">
            <li className="list-group-item border-0">
              <Link className="nav-link active" aria-current="page" href='/'><i className="text-dark fs-5 bi bi-github"></i></Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="nav-link" href='/'><i className="text-dark fs-5 bi bi-linkedin"></i></Link>
            </li>
            <li className="list-group-item border-0">
              <Link className="nav-link" href='/'><i className="text-dark fs-5 bi bi-facebook"></i></Link>
            </li>
          </ul>
        </section>
    </section>
  )
}
