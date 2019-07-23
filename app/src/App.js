import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
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
    console.log(event.target.tagName)
    // alert(event)
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
  //   setTimeout(wait=>{ this.setState({
   
  //   })}, 0);

  // console.log("Component updated...")
  }
  render(){
    return (
      <div className="App flex-border-column-centered">
          <h1>LiteLearn</h1>
          <img src="https://res.cloudinary.com/eduprojectsil/image/upload/v1563860275/litelearnlogo_tbonbs_pkmsmh_c6muvc.png" className="App-logo" alt="logo" />

        {/* {
          this.state.current_portal === "landing" ? 
          <LoginPortal portal="landing" instruction="Log in"/>
          :
          this.state.currentPortal === "educator" ? 
          <LoginPortal portal="teacher" instruction="Enter Your Course" />
          :
          this.state.currentPortal === "student" ?
          <LoginPortal portal="student" instruction="Enter Your Course" />
          :
          null
        } */}
        <div id="fade-container" onClick={this.changePortal}>
          <LoginPortal portal="landing" anim={this.state.fade_landing} instruction="Select your role"/>
          <LoginPortal portal="student" anim={this.state.fade_student} instruction="Enter your course code"/>
          <LoginPortal portal="educator" anim={this.state.fade_educator} instruction="Create a classroom or enter your existing room"/>
          <LoginPortal portal="create_classroom" anim={this.state.fade_create_classroom} instruction="Create your classroom"/>
        </div>

          

    
      </div>
    );
  }
}

export default App;
          /* {
            this.state.current_portal === "landing" ?
            <LoginPortal portal="landing" instruction="Log in" animate={this.state.fadeStyle} />
            :
            this.state.current_portal === "educator" ?
            <LoginPortal portal="educator" instruction="Begin your session" animate={this.state.fadeStyle} />
            :
            this.state.current_portal === "student" ?
            <LoginPortal portal="student" instruction="Enter your classroom" animate={this.state.fadeStyle} />
            :
            null
          } */