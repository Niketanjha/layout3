import React from 'react';
import './Texts.css'

class Texts extends React.Component{
    render(){
        return(
            <>
                <h3 className="firstLorem">{this.props.text}</h3>
                <span className="loremText">{this.props.text}</span>
                <span className="loremText">{this.props.text}</span>
                <span className="loremText">{this.props.text}</span>
                <span className="loremText">{this.props.text}</span>
            </>
        );
    }
}

export default Texts;

{/* <h3 className="firstLorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi?</h3>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span>
            <span className="loremText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</span> */}