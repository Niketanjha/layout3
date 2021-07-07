import React from 'react'
import './NavBar.css'

class NavBar extends React.Component{
    myFunction=()=> {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
        console.log(x);
      }  

    render(){
        return(
        <div style={{
            backgroundColor:this.props.backgroundColor
        }} className="topnav" id="myTopnav">
          <a style={{fontSize:"1.2em",color:this.props.color}} href="#home" className="active">{this.props.mainText}</a>
          <a style={{color:this.props.color}} href="#">{this.props.text1}</a>
          <a style={{color:this.props.color}} href="#">{this.props.text2}</a>
          <a style={{color:this.props.color}} href="#">{this.props.text3}</a>
          <a style={{color:this.props.color}} href="#" className="icon" onClick={this.myFunction}>
            <i className="fa fa-bars"></i>
          </a>
        </div>      
        );
    }
}

export default NavBar; 
