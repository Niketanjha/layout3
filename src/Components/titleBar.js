import React from 'react';
export default class TitleBar extends React.Component{
    render(){
        return(
        <>
            <h1 style={{fontFamily:"sans-serif",fontWeight:"normal" ,marginBottom:"1%",fontSize:"2.5em"}}>{this.props.title}</h1>
            <h2 style={{marginTop:"0%",fontFamily:"sans-serif",fontWeight:"normal"}}>by <a style={{textDecoration:"none"}} href="#">{this.props.by}</a></h2>
        </>);
    }
}
// Blog Post Title
//Test
