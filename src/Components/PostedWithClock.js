import React from 'react';

export default class PostedWithClock extends React.Component{
    render(){
        return(
            <>
                <span style={{fontFamily:"sans-serif",fontSize:"1em",margin:"2% 0% 2% 0%"}}><i style={{paddingRight:"5px"}} class="fa fa-clock-o" aria-hidden="true"></i>
                {this.props.text}</span>
            </>
        );
    }
}