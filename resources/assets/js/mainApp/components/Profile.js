'use strict'

import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import axios from 'axios'
import ComposeSection from './ComposeSection'
import Posts from './Posts'




export default class Profile extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',

    }
  }
  
  componentWillMount(){
    const { match, location, history} = this.props.routeProps
   
    const self = this

    const getUser = async function(){

      
  
      // const user = await User.query().where('id', '=', request.params.id).fetch()
      // badabing = user.toJSON()
      // console.log(badabing)
      try{
        const userProfile = await axios.get('/api/user/profile/${match.params.id}')
        console.log(self.props.initialData.userInfo['profile_img']) 
       
        self.setState({
          initialData: self.props.initialData,
          userProfile: self.props.initialData.userInfo,
          first_name: self.props.initialData.userInfo['first_name'],
          last_name: self.props.initialData.userInfo['last_name'],
          profile_img: self.props.initialData.userInfo['profile_img']
          
        }), () => {
          console.log(self.state)
        }

      } catch(error){
        console.log(error)
      }
      
  
    }

    getUser()
  }
  
    render () {
      // if(this.state.userProfile !== undefined){
       
        return (
          <div className="testersec profile-page">
            <div className="user-img"><img src={`${this.state.profile_img}`}   /></div>
            <div className="info">
        <h1>{this.state.first_name} {this.state.last_name}</h1>
            <div className="follow-btn">Follow</div>

            </div>
 
          </div>)
        }
       
      }


   
  
/** 
        console.log(this.props)
        const {match, location, history, profile_img} = this.props.routeProps
        const self = this

        const getUser = async function(){
          
          try{
            const user = await axios.get(`/api/user/profile/${match.params.id}`)
            self.setState({
              initialData: self.props.initialData, 
              userProfile: userProfile.data[0],
              // following: userProfile.data.following
              
             
          }, () => {
            console.log(self.state)
          })

          } catch(error){

            console.log(error)
          }
  
        }
        getUser()
    }

    followUser =  async () => {
      
      const {match, location, history, profile_img} = this.props.routeProps
      const self = this
      if(this.state.following) {
        try{
          const userProfile = await axios.get(`/api/user/${match.params.id}/unfollow`)
          self.setState({
            following: !self.state.following
          })  
          console.log(userProfile.data)
        } catch(error){
  
            console.log(error)
          }
      } else {
        try{
          const userProfile = await axios.get(`/api/user/${match.params.id}/follow`)
          self.setState({
            following: !self.state.following
          })  
          console.log(userProfile.data)
        } catch(error){
  
            console.log(error) 
          }
      }
  
}

  render () {
    // if(this.state.userProfile !== undefined){
      return (
        <div className="testersec profile-page">
          <div className="user-img"><img src="" /></div>
          <div className="info">
          <h1>Joe Santos</h1>
          <div className="follow-btn">Follow</div>



          </div>
         
          
      
         
        </div>)
      }
    }
    
  
  /**   
     else {
      return (  <div className="testersec profile-page">
              <div className="user-img"><img src={`${this.state.userProfile.profile_img}`} /></div>
<div className="info">
  <h1>{`${this.state.userProfile.first_name} ${this.state.userProfile.last_name}`}</h1>
  <div className="follow-btn" onClick={this.followUser}>{(this.state.following) ? 'Unfollow' : 'Follow'}</div>
</div>
</div>
      )}
  }} */ 
    

    
  


  
