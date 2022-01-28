import React, { useState } from 'react';
import axios from 'axios';

function Form() {

    const [ state, setState ] = useState({
        url: "",
        slug:"",
        error:false
    })
    
    function handleChange(event) {
        if(isValidURL(event.target.value))
            setState({ ...state, [event.target.name]: event.target.value ,error:false});
        else{
            setState({ ...state, error: true,[event.target.name]: event.target.value });
        }    
    }
    async function handleSubmit(e) {
        e.preventDefault();
       const {data} = await axios.post(`${process.env.REACT_APP_ENDPOINT}createURl`,{url:state.url});
       setState({...state,slug:data.data.slug});
    }
    function isValidURL(string) {
        var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
      };
    
    return (
        <div className='container'>
            <div className='row'>
                <h6>Welcome to Website Shortner</h6>
                <form onSubmit={handleSubmit}>    
                <input value={state.url} placeholder={'Enter Website URL'} name="url" type={`text`} className='form form-control' onChange={handleChange} required/>
                    {state?.error && <span className="text-danger">Please enter valid website url</span>}
                    <br />
                    
                    <div className="text-center">
                    <input type="submit" value="Save"/>
                    </div>
                </form>
                </div>
                {state.slug && <p>Short URL :{`${window.location.href}${state?.slug}`}</p>}
            
        </div>
    );
}

export default Form;
