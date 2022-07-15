import React, {useState,useEffect} from 'react';
import '../style.css'
import axios from 'axios';
import url from '../baseurl'




function DeleteForm() {


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
      var data=await axios.delete(url,{ params: { "rollno": rollno } });
      window.alert(data.data.success)

  }catch(error){
    console.log(error);
  } 
    }


    return(
      <div className="deleteform">
          <div className="deleteform-body">
          <h1>Delete</h1>
              <div className="rollno">
                  <label className="form__label" for="rollno">Rollno </label>
                  <input className="form__input" value={rollno} onChange = {(e) => handleInputChange(e)} type="text" id="rollno" placeholder=""/>
              </div>
              
          </div>
          <div class="footer">
              <button type="submit" onClick={()=>handleSubmit()} class="btn">Submit</button>
          </div>
      </div>      
    )       
}
export default DeleteForm;