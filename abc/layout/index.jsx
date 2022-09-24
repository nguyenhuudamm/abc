import React from 'react'
import Header from '../components/Header/header.component'
import Footer from '../components/Footer/footer.component'

export default function Layout({children}) {
  return (
    <div>
        <Header/>
          {children}
        <Footer/>
    </div>
  )
}
