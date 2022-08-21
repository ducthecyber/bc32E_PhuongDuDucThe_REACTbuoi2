import React, { Component } from 'react'
import data from './dataGlasses.json'
import Content from './Content'
import Header from './Header'
import Footer from './Footer'
import './style.css'

export default class BaiTapThuKinh extends Component {
  render() {
    return (
      <div className='page position-absolute'> 
        <Header/>
        <Content/>
        {/* <Footer/> */}
      </div>
    )
  }
}
