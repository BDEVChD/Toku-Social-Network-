import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class LeftMenu extends Component {
  constructor () {
    super()
    this.state = {
      dropdown: false,
      name: 'Joe'
    }
  }
  clickedDropdown = () => {
    this.setState({
      dropdown: !this.state.dropdown
    })
  }
  render () {
    return (
    
        <section id="left-menu">
          <div className="account-dropdown">
            <div className="logo">
              <i className="fab fa-typo3" />
            </div>
            <div className="name" onClick={this.clickedDropdown}>
             {`${this.props.initialData.first_name} ${this.props.initialData.last_name}`}
            </div>
            <div className="icon" onClick={this.clickedDropdown}>
              <i className="fas fa-chevron-down" />
            </div>
            <div className={`dropdown ${this.state.dropdown ? 'active' : ''}`}>
              <ul>
                <nav>
                  <a href="/account">account</a>
                  <a href="/logout">logout</a>
                </nav>
              </ul>
            </div>
          </div>
          <div className="groups">
            <div className="group">
              <div className="title">Favorites</div>
              <ul>
                <li><a href="/logout">Logout</a></li><li>
                </li><li>
                  <div className="iconside"><i className="fab fa-500px" /></div>
                  <div className="textside">Muzli</div>
                </li>
                <li>Fubiz</li>
                <li>Dribbble</li>
              </ul>
            </div>
            <div className="group">
              <div className="title">Pages(54)</div>
              <ul>
                <li>Awards</li>
                <li>Interactive Designs</li>
                <li>InVision</li>
                <li>Mashable</li>
              </ul>
            </div>
            <div className="group">
              <div className="title">Groups(32) </div>
              <ul>
                <li>Startup Stadium</li>
                <li>Designers Guild</li>
                <li>UX/UI</li>
                <li>Buy and Sell</li>
              </ul>
            </div>
            <div className="group">
              <div className="title">Birthdays(9) </div>
              <div className="socialicons">
                <i className="fab fa-adn" style={{background: 'red', fontSize: '30px', display: 'inline'}} />
                <i className="fab fa-adn" style={{background: 'red', fontSize: '30px', display: 'inline'}} />
                <i className="fab fa-adn" style={{background: 'red', fontSize: '30px', display: 'inline'}} />
              </div>
            </div>
          </div>
        </section>
       )
  }
}
