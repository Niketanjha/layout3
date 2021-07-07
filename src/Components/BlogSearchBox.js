import React from "react";
import './BlogSearchBox.css'

export default class BlogSearchBox extends React.Component{
    render(){
        return(
            <>
                <div className="blogSearch">
                    <span style={{fontFamily:"sans-serif",fontSize:"1.2em",marginTop:"6%",
                        marginLeft:"8%",marginBottom:"2%"}} >{this.props.text}</span>
                    <div className="searchIcon">
                        <input type="text" style={{width:"80%",height:"32px"}}></input>
                        <button type="submit" className="searchButton"><i style={{}} class="fa fa-search fa-xs"></i></button>
                    </div>
                </div>           
            </>
        );
    }
}