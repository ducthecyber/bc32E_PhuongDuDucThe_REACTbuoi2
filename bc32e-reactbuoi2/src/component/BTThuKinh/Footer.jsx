import React, { Component } from 'react'
import data from './dataGlasses.json'


export default class footer extends Component {

  render() {
    return (
      <div className="footer p-5 container">
        <div className="row bg-white p-4">
          {
            data.map((glass) => {
              return (
                <div key={glass.id} className="selected col-2 mb-3 border border-info d-flex p-1 align-items-center" onClick={
                  () => {
                    this.setState({ glass })
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
    )
  }
}
