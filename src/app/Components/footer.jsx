import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className='shadow pt-5 bg-dark-gray'>
        <section className='container d-lg-flex align-items-center pt-2 border-top'>
          <div className="d-lg-block d-flex justify-content-between align-items-center">
            <Link className="navbar-brand fw-bold " href='/'>e<span className='text-orange'>-</span>jesan<span className='text-orange'>.</span></Link>
            <ul className="d-lg-none d-flex list-group list-group-horizontal">
              <li className="list-group-item border-0 bg-transparent">
                <Link className="nav-link active" aria-current="page" href='/'><i className="fs-5 bi bi-github"></i></Link>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <Link className="nav-link" href='/'><i className="fs-5 bi bi-linkedin"></i></Link>
              </li>
              <li className="list-group-item border-0 bg-transparent">
                <Link className="nav-link" href='/'><i className="fs-5 bi bi-facebook"></i></Link>
              </li>
            </ul>
          </div>
          <div className='mx-auto d-lg-block d-none align-middle mt-2'>
            <p className='fs-6'>Created by <strong className='fs-6 text-orange'>PIXELARTME</strong></p>
          </div>
          <ul className="d-lg-flex d-none list-group list-group-horizontal">
            <li className="list-group-item border-0 bg-transparent">
              <Link className="nav-link active" aria-current="page" href='/'><i className="fs-5 bi bi-github"></i></Link>
            </li>
            <li className="list-group-item border-0 bg-transparent">
              <Link className="nav-link" href='/'><i className="fs-5 bi bi-linkedin"></i></Link>
            </li>
            <li className="list-group-item border-0 bg-transparent">
              <Link className="nav-link" href='/'><i className="fs-5 bi bi-facebook"></i></Link>
            </li>
          </ul>
        </section>
    </section>
  )
}
