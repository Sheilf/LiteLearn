import React from 'react';
import './App.css';
import './firebase-config';
import LoginPortal from './LoginPortal/LoginPortal';
import './styles/flex-border.css'

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state={
      current_portal: "landing",
      fade_landing: 'fade-in',
      fade_educator: 'fade-out',
      fade_student: 'fade-out',
      fade_create_classroom: 'fade-out'
    
    
    }
    this.changePortal = this.changePortal.bind(this)
  }

  componentDidMount(){

  }
  changePortal(event){
    if(event.target.id==="educator"){
      this.setState({
        fade_landing: 'fade-out',
        fade_educator: 'fade-in',
        fade_student: 'fade-out',
        fade_create_classroom: 'fade-out'
      })
    }else if(event.target.id==='student'){
      this.setState({
        fade_landing: 'fade-out',
        fade_educator: 'fade-out',
        fade_student: 'fade-in',
        fade_create_classroom: 'fade-out'
      }) 
    }else if(event.target.id==="create_classroom"){
      this.setState({
        fade_landing: 'fade-out',
        fade_educator: 'fade-out',
        fade_student: 'fade-out',
        fade_create_classroom:'fade-in'
      }) 
    }else if(event.target.id==="reset_portal" || event.target.tagName==="path"){
      this.setState({
        fade_landing: 'fade-in',
        fade_educator: 'fade-out',
        fade_student: 'fade-out',
        fade_create_classroom:'fade-out'
      })
    }
  }

  componentDidUpdate(){

  }
  render(){
    return (
      <main className="App flex-border-column">
          <h1>LiteLearn</h1>
          <img src="https://res.cloudinary.com/eduprojectsil/image/upload/v1563860275/litelearnlogo_tbonbs_pkmsmh_c6muvc.png" className="App-logo" alt="logo" />

        <div id="fade-container" onClick={this.changePortal}>
          <LoginPortal portal="landing" anim={this.state.fade_landing} instruction="Select your role"/>
          <LoginPortal portal="student" anim={this.state.fade_student} instruction="Enter your course code"/>
          <LoginPortal portal="educator" anim={this.state.fade_educator} instruction="Create a classroom or enter your existing room"/>
          <LoginPortal portal="create_classroom" anim={this.state.fade_create_classroom} instruction="Create your classroom"/>
        </div>

          

    
      </main>
    );
  }
}

export default App;
        