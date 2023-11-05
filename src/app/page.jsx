import Image from 'next/image'
import styles from './page.module.css'
import Projects from './homeComponent/projects'
import ProfilePic from './../img/profilePic.png'
import DreamFields from './../img/DF.webp'



export default function Home() {
  return (
    <main className='body-min-height'>
      {/* <section className='col-lg-9 col-12'>
        <Projects
        source={ProfilePic}
        content={DreamFields}
        />
      </section> */}
    </main>
  )
}
