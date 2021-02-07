import React, { Component} from 'react'
import ReactDOM from 'react-dom'

export default class Messenger extends Component {
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
    
        <section id="messenger">
          <div className="messenger-header">
            <div className="messenger-icon">
              <i className="fas fa-comments" />
            </div>
            <div className="title">
              Messenger
            </div>
            <div className="options-icon">
              <i className="fas fa-ellipsis-v" />
            </div>
          </div>
          <div className="users">
            <div className="users-container">
              <div className="user" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
              <div className="user active" style={{display: 'flex', alignItems: 'center', padding: '10px'}}>
                <div className="user-img" style={{background: 'url("https://randomuser.me/api/portraits/men/97.jpg")', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', position: 'relative', borderRadius: '50%', height: '30px', width: '30px'}} />
                <div className="user-name">James Doe</div>
                <div className="conversation">  <i className="fas fa-comment-dots" /></div>
              </div>
            </div>
          </div>
          <div className="search">
            <input type="text" />
          </div>
        </section>
       )
  }
}
