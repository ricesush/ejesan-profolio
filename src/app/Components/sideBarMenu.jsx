'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from '../../img/profilePic.png'
import { usePathname } from 'next/navigation';
// import ProfilePicuter

export default function SideBarMenu() {
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

    const contactDetails = [
        {
            details: "Quezon City, Philippines",
            icon: "bi-geo-alt-fill",
        },
        {
            details: "English, Filipino",
            icon: "bi-translate",
        },
        {
            details: "Pixelartme@gmail.com",
            icon: "bi-envelope-at-fill",
        },
        {
          details: "+63999-551-4413",
          icon: "bi-telephone-fill",
        }
    ];

  return (
    <section className='shadow'>
        <div className="card rounded-0 border-0" >
          <div className="card-header bg-white border-0 text-start  d-flex align-items-center container">
            <section className=''>
              <div className='d-flex align-items-center'>
                <Image
                  src={ProfilePic}
                  alt='EJ Esan Profile Picture'
                  width={150}
                  className='mx-4 my-3'
                ></Image>
                <div className=''>
                  <p className='fw-bold fs-4 p-0 m-0 text-dark'>Erick-john Santosidad</p>
                  <p className='fs-6 fw-bold p-0 m-0 border-top border-secondary border-opacity-50  text-secondary'><i className="bi bi-laptop text-dark"></i> Full Stack Web Developer</p>
                  <button className='btn btn-orange shadow-sm rounded-5 btn-sm mt-2 fw-medium d-flex align-items-center py-0'>Download Resume <i className="bi bi-cloud-arrow-down ms-2 fs-5 bg-transparent"></i></button>
                </div>
              </div>
              <nav className="container">
                  <ul className="list-group list-group-horizontal d-flex align-items-center border-0">
                      {navLink.map(({pageName, pageLink}) => (
                          <li key={pageName} className="list-group-item bg-transparent border-0 nav-item text-center">
                            <Link className={`nav-link fs-6 fw-bold text-secondary px-2 border-bot-hover ${pathName == pageLink ? "activePage" : ""}`} aria-current="page" href={pageLink}>{pageName}</Link>
                          </li>
                      ))}
                  </ul>
              </nav>
            </section>

            <section className='col-3 ms-auto text-dark border-start ps-4 d-md-block d-none'>
              <table className="table table-borderless fs-6">
                <tbody>
                  {contactDetails.map(({icon, details}) => (
                      <tr key={icon}>
                        <td className='col-1 bg-transparent'><i className={`bi ${icon} text-orange`}></i></td>
                        <td className='text-dark  bg-transparent'>{details}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </div>
        </div>
    </section>
  )
}
