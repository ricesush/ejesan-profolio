import Image from 'next/image'
import styles from './page.module.css'
import Projects from './homeComponent/projects'


export default function Home() {
  return (
    <main className='body-min-height'>
      <section className='col-12'>
        <Projects />
      </section>
    </main>
  )
}
