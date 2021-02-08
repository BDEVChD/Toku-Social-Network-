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

  showLatestPosts = () => {
    if(this.props.initialData.latestPosts != undefined) {
      
      return this.props.initialData.latestPosts.map((item, index) => {
        let post = item.posts
        let user = item.users
       
        return (
          <div className="update-container" key={index}>
              <div className="author-info">
                <a href="#" className="user-img" style={{backgroundImage: `url('${user.profile_img}')`}}/>
                <div className="info" style={{position: 'relative', left: '10px'}}>
                  <a href="/profile">{user.first_name} {this.props.initialData.userInfo.last_name} </a>shared a <a href="#">{(post.type == 'text' ? 'story' : 'image')}</a>
                </div>
              </div>
              <div className="media">
                <div className={`${(post.type == 'text' ? 'story' : 'image')}`} style={{background: 'url("https://res.cloudinary.com/practicaldev/image/fetch/s--lgZmvJZg--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/q8novxdgkl806no68265.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} />
              </div>
              <div className="grey-container">
                <div className="update-info">
                  <h3>How to become a developer</h3>
                  <p>
                    {post.content}
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
            </div>)

      })
    }
  }
      
  
  


  render () {
    return (
     <section id="posts">
          {this.showLatestPosts()}
        </section>
       )
  }
}
