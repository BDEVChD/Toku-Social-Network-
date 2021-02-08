import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import axios from 'axios'
import LeftMenu from './components/LeftMenu'
import Home from './components/Home'
import Messenger from './components/Messenger'
import Profile from './components/Profile'
import SearchHeader from './components/SearchHeader'
import ComposeSection from './components/ComposeSection'
import Posts from './components/Posts'
import LoadingComp from './components/LoadingComp'


class Layout extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',

    }
  }
  
  componentWillMount(){
    const self = this
    const getInitialData = async function(){
      
      try {
        const initialData = await axios.get('/api/initialApp')
        console.log(initialData)
        self.setState({
            initialData: initialData.data
        }, () => {
          console.log(self.state)
        })
        
        } catch (error){
          console.log(error)
        }
      }
      getInitialData()
      
    }
   

  clickedBtn = () => {
    console.log('swag')
  }
  render () {
  
    return (
      <Router>
      <div className="app-container home-page">
        <LoadingComp initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData}/>
        <LeftMenu initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData}/>
        <section id="content-container">
         <SearchHeader />
        
         <Route exact path="/" component={(props) => <Home routeProps = {props}
         initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData} /> } />
             
          
          
         
          <Route exact path="/profile/:id" component={(props) => <Profile routeProps = {props}
         initialData={(this.state.initialData == undefined) ? 'loading' : this.state.initialData} /> } />
           <div className="testersec" > 
        </div>
        </section>
       <Messenger />
      </div>
      </Router>)
    
  }
}

const app = document.getElementById('app')

ReactDOM.render(<Layout />, app)
