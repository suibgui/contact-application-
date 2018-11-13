import React, { Component } from 'react';
import './App.css';
 import Form from './components/Form';
 import ContactList from './components/ContactList';
 import axios from 'axios'
class App extends Component {
constructor(){
  super()
  this.state={
    _id:"",
    fname :"",
    lname:"",
    phone:"",
    email:"",
    addOrSave:"add",
    contacts:[],
    modal:false

  }
}

getData = ()=>{
  axios.get('/contacts').then((res)=>{

    this.setState({contacts:res.data})
    console.log("sdsd"+ res.data)
    })
}

componentDidMount(){

this.getData()

}

change = (e)=>{

this.setState({
  [e.id]:e.value
})
}
init=()=>{
  this.setState({
    _id:"",
    fname:"",
    lname:"",
    email:"",
    phone:"",
    addOrSave:"add"
  })
}

delete = (e)=>{

 if(window.confirm('sure !')){
  axios.delete(`/contacts/${e}`).then(this.getData)
}
}

edit = (e)=>{
  this.setState({
    addOrSave:"save",
    modal:true
  })
  this.setState({
    ...e,
  })
}

add = ()=>{

  let {_id,fname,lname,email,phone} = this.state
  if(this.check(this.state) ){
switch(this.state.addOrSave){

  case 'add':
  
  
axios.post('/contacts/new',{
  fname,lname,email,phone,
})
.then(this.setState({modal:false}))
.then(this.getData)
this.init()

  break;

  default:
  
 axios.put(`/contacts/${_id}`,{
   fname,lname,email,phone,
 })
 .then(this.setState({modal:false}))
 .then(this.getData)
  this.init()
}}else{
  alert("invalid format !")
}

}
 check = (c)=>{

if(c.fname.length<1 || c.fname.length > 15 || c.lname.length<1 || c.phone.length !==8 || isNaN(c.phone) )
{
  return false

 }
 return true}

 showModal = ()=>{
this.setState({modal: true})

 }

  render() {

    return (
      
   <div  className="container">
  <div className="modal" onClick={()=>this.setState({modal:false})}
   style={{display:this.state.modal?"block":"none"}}>
      <Form 
     
       lname={this.state.lname}
       fname={this.state.fname}
       email={this.state.email}
       phone={this.state.phone}
       reset= {this.reset}
       addOrSave = {this.state.addOrSave}
       change={this.change}
       reset={this.init}
       add = {this.add}
      />
</div>
    <ContactList 
    showModal= {this.showModal}
    contacts={this.state.contacts}
    edit={this.edit}
    delete={this.delete}
    />

   </div>
 
     
    );
  }
}

export default App;
