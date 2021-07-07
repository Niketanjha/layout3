import React from 'react';
export default class HorizontalLine extends React.Component{
    render(){
        return(
            <>
                <hr style={{
                    marginTop:this.props.marginTop,
                    width:"100%",border:"solid #F0F0F0",borderWidth:"0.1px"}}></hr>
            </>
        );
    }
}