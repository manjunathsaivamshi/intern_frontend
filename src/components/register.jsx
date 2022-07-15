import React, {useState,useEffect} from 'react';
import '../style.css'
import axios from 'axios';
import url from '../baseurl'




function RegistrationForm() {


  const [rollno, setRollno] = useState(null);
    const [name,setName] = useState(null);
    const [dob,setDob] = useState(null);
    const [address,setAddress] = useState(null);

const handleInputChange = async (e) => {
        e.preventDefault();
        
        const {id , value} = e.target;
        if(id === "rollno"){
            setRollno(value);
        }
        if(id === "name"){
            setName(value);
        }
        if(id === "dob"){
            setDob(value);
        }
        if(id === "address"){
            setAddress(value);
        }
        
        
    }

    const handleSubmit  = async () => {
        
        try{
      var data=await axios.post(url,{
            "rollno":rollno,
            "name":name,
            "dob":dob,
            "address":address
        });
      
      window.alert(data.data.success)

  }catch(error){
     window.alert(error)
  } 
    }


    return(
      <div className="regform">
          <div className="regform-body">
          <h1>Register</h1>
              <div className="rollno">
                  <label className="form__label" for="rollno">Rollno </label>
                  <input className="form__input" value={rollno} onChange = {(e) => handleInputChange(e)} type="text" id="rollno" placeholder=""/>
              </div>
              <div className="name">
                  <label className="form__label" for="name">name</label>
                  <input  type="text" name="" id="name"  onChange = {(e) => handleInputChange(e)} className="form__input"placeholder=""/>
              </div>
              <div className="dob">
                  <label className="form__label" for="dob">date of birth</label>
                  <input  type="email" id="dob" onChange = {(e) => handleInputChange(e)} className="form__input" placeholder=""/>
              </div>
              <div className="address">
                  <label className="form__label" for="address">address </label>
                  
                  <textarea onChange = {(e) => handleInputChange(e)} id="address"/>
              </div>
              
          </div>
          <div class="footer">
              <button type="submit" onClick={()=>handleSubmit()} class="btn">Register</button>
          </div>
      </div>      
    )       
}
export default RegistrationForm;