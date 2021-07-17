
import {React, Component} from 'react';
import './Style.css';

class Movingbox2 extends Component{
    state = {
         count: 0,
         backgroundColor:"#d04ef8",
         running:false,
         alert:false,
         animation:false,
    }
    
    changeColor = e =>{
      this.setState({
        backgroundColor:'#' + Math.floor(Math.random() * 16777215).toString(16),
        count:this.state.count + 1,
        running:!this.state.running,
        animation:true
      })
    }
    
    removeAnimation = e =>{
      this.setState({
        alert:true,
        animation:false,
        count:0,
        backgroundColor:"#00bfff",
      })
    }
     
      stopProp = e =>{
      e.stopPropagation()
    }
    
    render(){
      return(
        <div className = "app">
        <div className = "wrapper">
        <p className = "heading"> Class Based Moving Square</p>
        </div>
         {this.state.alert ? <PopUpTable/> : null}
        <button className = {`button ${this.state.animation && "animated"} ${this.state.running ? "running" : "paused"}`}
         onClick = {this.changeColor}
         onAnimationEnd = {this.removeAnimation}
         style = {{ backgroundColor:this.state.backgroundColor}}>
          <p onClick = {this.stopProp}>{this.state.count}</p>
        </button>
        </div>
      )
    }
      
  }
  const PopUpTable = () => {
      const handelDelete = (e) =>{
        e.target.parentElement.style.display = "none"
      }
      return (  
          <div className="popUpTable">
              <p>GAME OVER</p>
              <span onClick={handelDelete}>X</span>
            </div>
      );
    }
 export default Movingbox2