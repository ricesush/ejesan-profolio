import React from 'react'
import Projects from '../homeComponent/projects'
import ProfilePic from '../../img/profilePic.png'
import DreamFields from '../../img/DF.webp'
import GGNext from '../../img/ggnext.webp'
import TGH from '../../img/tgh.webp'

export default function Page() {
  return (
    <main className='body-min-height'>
        <section className='col-lg-9 col-12'>
          <Projects
          source={ProfilePic}
          content={DreamFields}
          />
          <Projects
          source={ProfilePic}
          content={GGNext}
          />
          <Projects
          source={ProfilePic}
          content={TGH}
          />
        </section>
    </main>
  )
}
