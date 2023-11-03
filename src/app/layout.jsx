import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Navmenu from './components/navmenu'
import Footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import SideBarMenu from './components/sideBarMenu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EJ ESAN',
  description: 'Porfolio Created by Erick Santosidad',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous"></link>
      </Head>
      <body className={inter.className}>
      <Navmenu />
      <section className='d-flex container'>
        <section className='d-lg-block d-none col-3'>
          <SideBarMenu />
        </section>
        <section>
          {children}
        </section>
      </section>
        
      <Footer />
      </body>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></Script>
    </html>
  )
}
