import React from "react";
import './BlogCategories.css'

export default class BlogCategories extends React.Component{
    render(){
        return(
        <>
            <div className="blogCategories">
              <span style={{fontSize:"1.3em",fontWeight:"500",marginLeft:"7%"}}>{this.props.title}</span>
              <div className="blogCatDiv2">
                <div className="catColumn1">
                  <a style={{textDecoration:"none"}} href={this.props.href}>{this.props.text}</a>
                  <a style={{textDecoration:"none"}} href={this.props.href}>{this.props.text}</a>
                  <a style={{textDecoration:"none"}} href={this.props.href}>{this.props.text}</a>
                  <a style={{textDecoration:"none"}} href={this.props.href}>{this.props.text}</a>
                </div>
                <div className="catColumn2">
                  <a style={{textDecoration:"none"}} href={this.props.href}>{this.props.text}</a>
                  <a style={{textDecoration:"none"}} href={this.props.href}>{this.props.text}</a>
                  <a style={{textDecoration:"none"}} href={this.props.href}>{this.props.text}</a>
                  <a style={{textDecoration:"none"}} href={this.props.href}>{this.props.text}</a>
                </div>
              </div>
            </div>
        </>
        );
    }
}