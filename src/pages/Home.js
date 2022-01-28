import React, { useState, useEffect } from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const Home = () => {
    const params = useParams();

    useEffect(async () => {
        if (params.url) {
            (async function getData() {
                const { data } = await axios.get(`${process.env.REACT_APP_ENDPOINT}url/${params.url}`);
                window.location.replace(data.data.url);
            }());
        }
    }, [])
    return (
        <div className='container'>
            <div className="row justify-content-center">
                <div className='col-md-6'>
                    
                    <Form />
                </div>
            </div>
        </div>
    );
}

export default Home;
