import React, { Component} from 'react';


class ContactList extends Component {
    constructor(props) {
        super(props);
    }
    render() { 
        return (
            <div className="panel">
            <div className="panel-header">
                List of Users
                <button onClick={this.props.showModal} className="add">new</button>
            </div>
            <div className="panel-body">
                <table>
                    <tr className="table-head">
                     <th>first name</th>
                       <th>last name</th>
                       <th>phone number</th>
                       <th>email</th>
                       <th>action</th>
                    </tr>
                    {this.props.contacts.map(x=>
                     <tr key={x._id}>
                     <td>{x.fname}</td>
                    <td>{x.lname}</td>
                    <td>{x.phone}</td>
                    <td>{x.email}</td>
                    <td>
                        <button onClick={()=> this.props.edit(x)} className="edit" >edit</button>
                        <button onClick={()=> this.props.delete(x._id)} className="remove" >remove</button>
                    </td>
                                           
                </tr>
                    )}
                   

                </table>
            </div>

        </div>

          );
    }
}
 
export default ContactList;