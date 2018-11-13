import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
       
    }
    render() { 
        return ( 

            <div className="panel" 
             onClick={(e)=>e.stopPropagation()}>
            <div className="panel-header">User</div>
            <div className="panel-body">
                <div className="wrapper">
                    <label>first name</label>
                    <input
                     value={this.props.fname}
                     onChange={(e)=>this.props.change(e.target)}
                      id='fname' type="text" />
                </div>
                <div className="wrapper">
                    <label>last name</label>
                    <input 
                    value={this.props.lname}
                    onChange={(e)=>this.props.change(e.target)}
                    id="lname" type="text" />
                </div>
                <div className="wrapper">
                    <label>phone number</label>
                    <input 
                    value={this.props.phone}
                    onChange={(e)=>this.props.change(e.target)}
                    id="phone" type="" />
                </div>
                <div className="wrapper">
                    <label>email</label>
                    <input 
                    value={this.props.email}
                    onChange={(e)=>this.props.change(e.target)}
                    id="email" type="email" />
                </div>
            </div>
            <div className="panel-footer">
                <button className="reset" onClick={this.props.reset} >reset</button>
                <button onClick={this.props.add} className="add">{this.props.addOrSave} </button>
            </div>
        </div>
         );
    }
}
 
export default Form;