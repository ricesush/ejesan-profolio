import React from 'react'
import ProfilePic from '../../img/profilePic.png'
import Image from 'next/image'

export default function Projects(props) {
  return (
    <section className=''>
        <section className='bg-secondary rounded m-3 shadow'>
          <div className='d-flex justify-content-between align-items-center p-3'>
            <div className='d-flex align-items-center fw-bold fs-6'>
              <Image
              src={props.source}
              width={40}
              className='me-2'
              />
              <div className='fs-6'>
                <div className='text-14px'>Erick-John Santosidad</div>
                <div className='text-12px'><i class="bi bi-globe-asia-australia me-2"></i>Public</div>
              </div>
              
            </div>
            <div className>
              <i className="bi bi-three-dots-vertical fs-4"></i>
              <i className="bi bi-x fs-4"></i>
            </div>
          </div>
          <div className='bg-white'>
            <Image
            src={props.content}
            className='img-fluid'
            />
          </div>
          <div className='d-flex align-items-center justify-content-around'>
            <div className='col text-center py-2 fw-bold'>
              <i className="bi bi-star-fill me-2 text-orange"></i> Send Star
            </div>
            <div className='col text-center py-2 fw-bold'>
              <i className="bi bi-chat-dots-fill me-2 text-orange"></i>Comment
            </div>
            <div className='col text-center py-2 fw-bold'>
              <i className="bi bi-share-fill me-2 text-orange"></i>Share
            </div>
          </div>
        </section>
    </section>
  )
}
