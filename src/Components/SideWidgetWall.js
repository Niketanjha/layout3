import React from "react";
import './SideWidgetWall.css'

export default class SideWidgetWall extends React.Component{
    render(){
        return(
            <>
            <div className="sideWidgetWall">
              <span style={{marginBottom:"0%",fontSize:"large",fontWeight:"500"}}>{this.props.title}</span>
              <div>
                <p style={{marginTop:"2%"}}>{this.props.text}
                </p>
              </div>
            </div>
            </>
        );
    }
}