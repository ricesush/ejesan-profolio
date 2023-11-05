import React from 'react'
import Image from 'next/image'
import ProfilePic from '../../img/profilePic.png'
// import ProfilePicuter

export default function SideBarMenu() {
  return (
    <section className='rounded shadow my-3'>
        <div className="card bg-white " >
          <div className="card-header text-center shadow-sm">
            <Image
              src={ProfilePic}
              alt='EJ Esan Profile Picture'
              width={100}
              className='m-4'
            ></Image>
            <p className='fw-bold fs-6 p-0 m-0  text-dark'>Erick-john Santosidad</p>
            <p className='fs-6 fw-bold p-0 m-0 border-top border-secondary border-opacity-50  text-secondary'><i className="bi bi-laptop text-dark"></i> Full Stack Web Developer</p>
          </div>
          <div className="card-body">
          <table className="table table-borderless fs-6">
            <tbody>
              <tr>
                <td className='col-1'><i className="bi bi-geo-alt-fill text-orange"></i></td>
                <td className='text-dark'>Quezon City, Philippines</td>
              </tr>
              <tr>
                <td className='col-1'><i className="bi bi-translate text-orange"></i></td>
                <td className='text-dark'>English, Filipino</td>
              </tr>
              <tr>
                <td className='col-1'><i className="bi bi-envelope-at-fill text-orange"></i></td>
                <td className='text-dark'>Pixelartme@gmail.com</td>
              </tr>
              <tr>
                <td className='col-1'><i className="bi bi-telephone-fill text-orange"></i></td>
                <td className='text-dark'>+63999-551-4413</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
    </section>
  )
}
