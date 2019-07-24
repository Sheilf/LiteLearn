import React from 'react';
import './LoginPortal.css';
import '../firebase-config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo } from '@fortawesome/free-solid-svg-icons'


class LoginPortal extends React.Component{
  constructor(props){
      super(props)
      this.state={
        
      }
  }
  componentDidMount(){

  }


  render(){

    return (
    <section id="id" className={"LoginPortal flex-border-column-centered "+this.props.anim}>
        <h3>{this.props.instruction}</h3>
        <FontAwesomeIcon id="reset_portal" icon={faRedo} />
        {
            this.props.portal === "landing" ? 
            (
            <div>
                <button id="educator">Educators</button>
                <button id='student'>Students</button>
            </div>
            )
            :
            this.props.portal==="educator" ?
            (
            <div>
                
                <button id="create_classroom">Create class</button>
                <p style={{color: '#60ffe1', fontWeight: 'bolder', textShadow: '1px 1px 1px #000'}}>OR</p>
                <p>
                <form>
                    <input type="text" placeholder="Enter course code" className="input-course-codes"/>
                </form>
                </p>
            </div>
            )
            :
            this.props.portal==="student" ?
            ( 
            <form>
                <input type="text" placeholder="edmonton#1458" className="input-course-codes"/>
            </form>
            )
            :
            this.props.portal==="create_classroom" ?
            (
                <form>
                    <input type="text" placeholder="create classroom code" className="input-course-codes"/>
                </form>
            )
           :
            null
        }
        
    </section>
      );
  }

}

export default LoginPortal;
