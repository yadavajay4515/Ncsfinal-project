import React, { Component } from 'react'

export default class FormMessage extends Component {
  constructor(props) {
    super(props)
    console.log(this.props.message)

  }
  capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1)
  }
  render() {
    return (
      <>
      <div style={{marginTop: '75px'}}>
        <div className={`alert alert-${this.props.type} alert-dismissible fade show`} role="alert">
          <strong>{this.capitalize(this.props.type)}</strong>:{this.props.message}
        </div>
        </div>
      </>
    )
  }
}

// import React, { Component } from 'react'

// export default class FormMessage extends Component {
 

//   capitalize=(word)=>{
//            const lower=word.toLowerCase();
//              return lower.charAt(0).toUpperCase()+lower.slice(1)
//       }
//   render() {
//     return (
//       <div style={{height: '50px'}}>
   
//         {this.props.alert && <div className={`alert alert-${this.props.alert.type} alert-dismissible fade show`} role="alert">
//         <strong>{this.capitalize(this.props.alert.type)}</strong>:{this.props.alert.msg} 
//        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//        </div>}
//       </div>
//     )
//   }
// }

