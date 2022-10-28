import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import ImageUploader from 'react-images-upload';
import { useState, useEffect } from 'react';
import { IconButton, selectClasses } from '@mui/material';
import { postData } from './../apicall'
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();


export default function SignUp() {

    const [picture, setPicture] = useState(undefined);
    const [preview, setPreview] = useState(undefined);
    const [selectedFile, setSelectedFile] = useState(false);
    const [userData, serUserData] = useState(null);
    const [wrongPass, setWrongPass] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        if (data.get('password') != data.get('cpassword')) {
            setWrongPass(true);
            return;
        }

        setWrongPass(false);
        const user = {
            username: data.get('username'),
            password: data.get('password'),
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            babies: data.get('babies'),
            adults: data.get('adults'),
            children: data.get('children'),
            email: data.get('email'),
            picture: preview ? preview.split(',')[1] : ""
        };

        const response = postData("http://127.0.0.1:5000/signup", user)
        response.then((data) => {
            serUserData(data.data);
            //
        })
    };


    useEffect(() => {
        if (!selectedFile) {
            setPreview(undefined)
            return
        }
        var reader = new FileReader();
        reader.onloadend = (e) => {
            setPreview(reader.result);
        }
        var url = reader.readAsDataURL(picture);
    }, [selectedFile])

    useEffect(() => {
        if (userData && userData.inserted) {
            console.log("UserData: ", userData);
            navigate('/search', { state: userData });
        }
    }, [userData])

    const onDrop = (picture) => {
        setPicture(picture);
        setSelectedFile(true)
    }

    const styles = {
        root: {
            '& .MuiFormLabel-root.Mui-disabled': {
                color: 'red',
            },
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        backgroundColor: "white",
                        padding: '30px 20px 35px 20px',
                        borderRadius: 5,
                        opacity: "75%"
                    }}
                >

                    <input
                        id="filePicker"
                        style={{ visibility: "hidden" }}
                        type="file"
                        onChange={(event) => {
                            onDrop(event.target.files[0]);
                        }}
                    />
                    <label htmlFor="filePicker">
                        <IconButton component='span'>
                            <Avatar
                                sx={{
                                    m: 1,
                                    bgcolor: 'secondary.main',
                                    width: 100,
                                    height: 100,
                                    display: "flex",
                                    alignItems: "center"
                                }}>
                                {selectedFile && <img src={preview} width={100} height={100} />}
                                {/*<LockOutlinedIcon />*/}
                            </Avatar>
                        </IconButton>
                    </label>

                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="username"
                                    label="Username"
                                    name="username"
                                    autoComplete="username"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="adults"
                                    label="How many adults are in your family?"
                                    name="adults"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="children"
                                    label="How many children are in your family?"
                                    name="children"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="babies"
                                    label="How many babies are in your family?"
                                    name="babies"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid
                                item xs={12}
                            >
                                <TextField
                                    required
                                    fullWidth

                                    sx={{
                                        input: { color: wrongPass ? 'red' : "black" }
                                    }}
                                    name="cpassword"
                                    label="Confirm your password"
                                    type="password"
                                    id="cpassword"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>

                                {/* <label htmlFor="filePicker" style={{ background: "grey", padding: "5px 10px" }}>
                                    My custom choose file label
                                </label> */}


                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signin" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>

                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider >
    );
}