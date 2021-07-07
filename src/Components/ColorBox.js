import React from "react";
import './ColorBox.css'

class  ColorBox extends React.Component{
    render(){
        return(
            <>
                <div style={{height:this.props.height,width:this.props.width,
                backgroundColor:this.props.backgroundColor}} className="colorBox">
                    <span className="boxText" >{this.props.text}</span>
                </div>
            </>
        );
    }
}

export default ColorBox

