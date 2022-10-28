import * as React from 'react';

import { postData } from '../apicall';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css'


export default function Home() {

    // const [auth, setAuth] = useState(false);
    // const navigate = useNavigate();

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const data = new FormData(event.currentTarget);
    //     const auth = {
    //         username: data.get('username'),
    //         password: data.get('password'),
    //     };
    //     console.log(auth)
    //     const response = postData("http://127.0.0.1:5000/login", auth)
    //     response.then((data) => setAuth(data.data.inserted))

    // };

    // useEffect(() => {
    //     if (auth) {
    //         navigate('/search');
    //     }
    // }, [auth])
    const navigate = useNavigate();
    return (
        <div class="box-form" style={{ marginTop: 50 }}>
            <div class="left">
                <div class="overlay">
                    <h1>Flight Search.</h1>
                    <p>A melhor viagem que cabe no seu bolso!
                    </p>
                    <span onClick={() => { navigate('/signin') }}>
                        <a href=""><i class="fa fa" aria-hidden="true"></i> 	Login</a>
                    </span>
                </div>
            </div>
            <div class="right" style={{ marginTop: 40, display: "flex", flexDirection: 'column' }}>

                {/* <h2>
                    Cidade
                </h2> */}
                {/* <span style={{ paddingLeft: 20, paddingTop: 7 }}>
                    <p>
                        Saida: 10/10/2020
                    </p>
                    <p>
                        Volta: 10/10/2021
                    </p>
                    <p>Preço: 10000R$</p>
                    <p>quantidade para três pessoas</p>

                </span> */}

                {/* <button type="submit" style={{ marginTop: 145 }} >

                    <a href='https://google.com' style={{ color: 'white' }}>
                        <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                        {" "}Comprar

                    </a>

                </button> */}

            </div>
        </div>
    );
}