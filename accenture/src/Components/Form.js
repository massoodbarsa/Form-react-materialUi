import React, { Component } from 'react';
import Result from './Result';

class Form extends Component {

    state={

        result:false,
        firstName:'',
        lastName:'',
        email:'',
        phoneNumber:'',
        city:'',
        postcode:'',
        adres:''
    }

    handleResult=()=>{
        this.setState({
            result:true
        })
    }

    handleChange=input=>e=>{
        this.setState({
           [input]:e.target.value
        })
    }
    render() {
        const {result}=this.state
        const{firstName,lastName,email,phoneNumber,city,postcode,adres}=this.state
        const values={firstName,lastName,email,phoneNumber,city,postcode,adres}

        if (result==false){
            return (
                <div>               
                  <Result/>
                  
                </div>
              );
        }
  
    }
}

export default Form;