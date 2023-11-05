import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProfilePic from '../../img/profilePic.png'
// import ProfilePicuter

export default function SideBarMenu() {
  return (
    <section className='shadow'>
        <div className="card rounded-0 border-0" >
          <div className="card-header bg-white border-0 text-start  d-flex align-items-center container">
            <section className=''>
              <div className='d-flex align-items-center'>
                <Image
                  src={ProfilePic}
                  alt='EJ Esan Profile Picture'
                  width={100}
                  className='m-4'
                ></Image>
                <div className=''>
                  <p className='fw-bold fs-6 p-0 m-0 text-dark'>Erick-john Santosidad</p>
                  <p className='fs-6 fw-bold p-0 m-0 border-top border-secondary border-opacity-50  text-secondary'><i className="bi bi-laptop text-dark"></i> Full Stack Web Developer</p>
                  <button className='btn btn-orange btn-sm mt-2 fw-medium d-flex align-items-center py-0'>Download Resume <i className="bi bi-cloud-arrow-down ms-2 fs-5"></i></button>
                </div>
              </div>
              <nav className="container">
                  <ul className="list-group list-group-horizontal d-flex align-items-center border-0">
                      <li className="list-group-item bg-transparent border-0 nav-item text-center">
                        <Link className="nav-link fs-6 fw-bold text-secondary px-2 border-bot-hover active" aria-current="page" href='/'>Home</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 nav-item text-center">
                        <Link className="nav-link fs-6 fw-bold text-secondary px-2 border-bot-hover" href='/projects'>Projects</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 nav-item text-center">
                        <Link className="nav-link fs-6 fw-bold text-secondary px-2 border-bot-hover" href='/about'>About Me</Link>
                      </li>
                      <li className="list-group-item bg-transparent border-0 nav-item text-center">
                        <Link className="nav-link fs-6 fw-bold text-secondary px-2 border-bot-hover" href='/contact'>Contact</Link>
                      </li>
                  </ul>
              </nav>
            </section>

            <section className='col-3 ms-auto text-dark border-start ps-4'>
              <table className="table table-borderless fs-6">
                <tbody>
                  <tr>
                    <td className='col-1 bg-transparent'><i className="bi bi-geo-alt-fill text-orange"></i></td>
                    <td className='text-dark  bg-transparent'>Quezon City, Philippines</td>
                  </tr>
                  <tr>
                    <td className='col-1 bg-transparent'><i className="bi bi-translate text-orange"></i></td>
                    <td className='text-dark bg-transparent'>English, Filipino</td>
                  </tr>
                  <tr>
                    <td className='col-1 bg-transparent'><i className="bi bi-envelope-at-fill text-orange"></i></td>
                    <td className='text-dark bg-transparent'>Pixelartme@gmail.com</td>
                  </tr>
                  <tr>
                    <td className='col-1 bg-transparent'><i className="bi bi-telephone-fill text-orange"></i></td>
                    <td className='text-dark bg-transparent'>+63999-551-4413</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
    </section>
  )
}
