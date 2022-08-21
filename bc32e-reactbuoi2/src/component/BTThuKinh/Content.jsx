import React, { Component } from 'react'
import data from './dataGlasses.json'

export default class body extends Component {

  state = {
    isShow: 'none',
    opacity:0,
    kinh: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }

  render() {
    return (
      <div className='body'>
        <div className='d-flex align-items-center p-5'>
          <div className="col-6">
            <div className='model-sample position-relative'>
              <img className="" src='/glassesImage/model.jpg' width={'50%'} alt="" />
              <img id='glassSelected' className="position-absolute" src='/glassesImage/v1.png' width={'30%'} alt="" />
              <div className="info position-absolute p-2 text-left">
                <span className='text-primary text-uppercase mr-2 font-weight-bold'>Fendi</span>
                <span className='text-primary fw-bold'>8750</span>
                <div className="description text-white">
                  <span>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className='model-sample position-relative'>
              <img src='/glassesImage/model.jpg' width={'50%'} alt="" />
              <img id='glassSelected' className="position-absolute" style={{opacity:this.state.opacity,display:this.state.display }} src={this.state.kinh.url} width={'30%'} alt="" />
              <div className="info position-absolute p-2 text-left" style={{opacity:this.state.opacity }}>
                <span className='text-primary text-uppercase mr-2 font-weight-bold'>{this.state.kinh.name}</span>
                <div className="description text-white">
                  <span>{this.state.kinh.desc}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer p-3 container">
          <div className="row bg-white p-4">
            {
              data.map((glass) => {
                return (
                  <div key={glass.id} className="selected col-2 mb-3 border border-info d-flex p-1 align-items-center" onClick={
                    () => {
                      this.setState({ kinh: glass,opacity:1,display:'block' })

                      console.log(glass)
                    }
                  }>
                    <img src={glass.url} alt="glass.name" width={'100%'} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}
