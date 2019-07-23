import React from 'react';
import './LoginPortal.css';
import * as firebase from 'firebase';
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
    <div id="id" className={"LoginPortal flex-border-column-centered "+this.props.anim}>
        <h3>{this.props.instruction}</h3>
     
        {
            this.props.portal === "landing" ? 
            (
            <div>
                <FontAwesomeIcon id="reset_portal" icon={faRedo} />
                <button id="educator">Educators</button>
                <button id='student'>Students</button>
            </div>
            )
            :
            this.props.portal==="educator" ?
            (
            <div>
                <FontAwesomeIcon id="reset_portal" icon={faRedo} />
                <button id="create_classroom">Create class</button>
                <span>OR &nbsp;
                <input type="text" placeholder="Enter course code" className="input-course-codes"/>
                </span>
            </div>
            )
            :
            this.props.portal==="student" ?
            ( 
            <div>
                <FontAwesomeIcon id="reset_portal" icon={faRedo} />
                <input type="text" placeholder="edmonton#1458" className="input-course-codes"/>
            </div>
            )
            :
            this.props.portal==="create_classroom" ?
            (
                <form>
                    <FontAwesomeIcon id="reset_portal" icon={faRedo} />
                    <input type="text" placeholder="create classroom code" className="input-course-codes"/>
                </form>
            )
           :
            null
        }
        
    </div>
      );
  }

}

export default LoginPortal;
