import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Posts extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <section id="posts">
      <div className="update-container">
        <div className="author-info">
          <a href="#" className="user-img" />
          <div className="info">
            <a href="#">James Doe </a>shared a <a href="#">story</a>
          </div>
        </div>
        <div className="media">
          <div className="image" style={{background: 'url("https://res.cloudinary.com/practicaldev/image/fetch/s--lgZmvJZg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/q8novxdgkl806no68265.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} />
        </div>
        <div className="grey-container">
          <div className="update-info">
            <h3>How to become a developer</h3>
            <p>
              DIY wayfarers pinterest salvia plaid, hella ethical drinking vinegar slow-carb sustainable. Crucifix master cleanse quinoa godard.
            </p>
          </div>
          <div className="update-stats">
            <div className="icon-section">
              <div className="like-circle">
                <i className="fas fa-thumbs-up" />
              </div>
            </div>
            <div className="other-users">Sarah Russell and 23 others liked update</div>
            <div className="comments-stats">4 comments</div>
          </div>
          <div className="compose-comment">
            <i className="fas fa-comment" />
            <textarea name rows={8} cols={70} defaultValue={""} />
            <div className="buttons">
              <div className="repost-btn"><i className="fas fa-redo" /></div>
              <div className="like-btn"> <i className="fas fa-thumbs-up" /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="update-container">
        <div className="author-info">
          <a href="#" className="user-img" />
          <div className="info">
            <a href="#">James Doe </a>shared a <a href="#">story</a>
          </div>
        </div>
        <div className="media">
          <div className="image" style={{background: 'url("https://res.cloudinary.com/practicaldev/image/fetch/s--lgZmvJZg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/q8novxdgkl806no68265.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} />
        </div>
        <div className="grey-container">
          <div className="update-info">
            <h3>How to become a developer</h3>
            <p>
              DIY wayfarers pinterest salvia plaid, hella ethical drinking vinegar slow-carb sustainable. Crucifix master cleanse quinoa godard.
            </p>
          </div>
          <div className="update-stats">
            <div className="icon-section">
              <div className="like-circle">
                <i className="fas fa-thumbs-up" />
              </div>
            </div>
            <div className="other-users">Sarah Russell and 23 others liked update</div>
            <div className="comments-stats">4 comments</div>
          </div>
          <div className="compose-comment">
            <i className="fas fa-comment" />
            <textarea name rows={8} cols={70} defaultValue={""} />
            <div className="buttons">
              <div className="repost-btn"><i className="fas fa-redo" /></div>
              <div className="like-btn"> <i className="fas fa-thumbs-up" /></div>
            </div>
          </div>
        </div>
        <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img" />
            <div className="info">
              <a href="#">James Doe </a>shared a <a href="#">story</a>
            </div>
          </div>
          <div className="media">
            <div className="image" style={{background: 'url("https://res.cloudinary.com/practicaldev/image/fetch/s--lgZmvJZg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/q8novxdgkl806no68265.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} />
          </div>
          <div className="grey-container">
            <div className="update-info">
              <h3>How to become a developer</h3>
              <p>
                DIY wayfarers pinterest salvia plaid, hella ethical drinking vinegar slow-carb sustainable. Crucifix master cleanse quinoa godard.
              </p>
            </div>
            <div className="update-stats">
              <div className="icon-section">
                <div className="like-circle">
                  <i className="fas fa-thumbs-up" />
                </div>
              </div>
              <div className="other-users">Sarah Russell and 23 others liked update</div>
              <div className="comments-stats">4 comments</div>
            </div>
            <div className="compose-comment">
              <i className="fas fa-comment" />
              <textarea name rows={8} cols={70} defaultValue={""} />
              <div className="buttons">
                <div className="repost-btn"><i className="fas fa-redo" /></div>
                <div className="like-btn"> <i className="fas fa-thumbs-up" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       )
  }
}
