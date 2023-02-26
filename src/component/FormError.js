import React, { Component } from 'react'

export default class FormError extends Component {
    constructor(props){
        super(props);
        console.log(this.props.errorName);

    }
  render() {
    return (
      <>
        {(()=>{
                return(
                <div style={{color: 'rgb(255 100 114)'}}>{this.props.errorName}</div>
                )
                   })()}
      </>
    )
  }
}
