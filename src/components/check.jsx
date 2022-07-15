import React, {useState,useEffect} from 'react';
import '../style.css'
import axios from 'axios';
import url from '../baseurl'




function CheckForm() {


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
        
        
        
        
    }

    const handleSubmit  = async () => {
       
        try{
      var data=await axios.get(url,{ params: { "rollno": rollno } });
      window.alert("Name:  "+data.data.name+"\n"+"DateOfBirth:  "+data.data.dob+"\n"+"Address:  "+data.data.address)

  }catch(error){
    console.log(error);
  } 
    }


    return(
      <div className="checkform">
          <div className="checkform-body">
          <h1>getStudent details</h1>
              <div className="rollno">
                  <label className="form__label" for="rollno">Rollno </label>
                  <input className="form__input" onChange = {(e) => handleInputChange(e)} type="text" id="rollno" placeholder=""/>
              </div>
              
          </div>
          <div class="footer">
              <button type="submit" onClick={()=>handleSubmit()} class="btn">Register</button>
          </div>
      </div>      
    )       
}
export default CheckForm;