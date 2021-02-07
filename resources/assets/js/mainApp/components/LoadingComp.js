import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class LoadingComp extends Component {
  constructor () {
    super()
    this.state = {
      dropdown: false,
      name: 'Joe'
    }
  }
 
  render () {
    return (
    
        <section id="loading-comp" className={(this.props.initialData == 'loading') ? 'active': ''}>
          <div className="loading-icon">
            <div className="lds-heart" style={{width: '200px', height: '200px'}}><div></div></div>
          </div>
          <div className="loading-text">
            Loading! 
          </div>

        </section>
       )
  }
}
