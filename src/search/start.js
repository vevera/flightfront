import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './style.css'
import View from './view';

const theme = createTheme();
export default function Start() {

    const handleStart = (event) => {
        event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     username: data.get('username'),
        //     password: data.get('password'),
        //     firstName: data.get('firstName'),
        //     lastName: data.get('lastName'),
        //     babies: data.get('babies'),
        //     adults: data.get('adults'),
        //     children: data.get('children'),
        //     email: data.get('email')
        // });
    };

    return (

        <div className='box-form'>
            <View />
        </div>





    );


};