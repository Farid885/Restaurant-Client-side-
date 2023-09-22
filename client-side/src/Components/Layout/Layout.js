import React from 'react'
import About from '../Pages/about/About'
import Home from '../Pages/Home'
import Header from './Header'
import Footer from './Footer'

function Layout(props) {
    return (
        <div>
            <Layout>
              <Home/>
              
              {props.children}
              <Footer/>
            </Layout>
        </div>
    )
}

export default Layout