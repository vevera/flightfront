import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './profile.css'
import { useState, useEffect } from "react"
import { useLocation, useNavigate } from 'react-router-dom';
import { postData } from '../apicall';

const theme = createTheme();


const RenderItem = ({ props }) => {

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: "#4272f5",
                padding: 2,
                margin: 1,
                width: "100%",
                borderRadius: 3
            }}
        >
            <h4 style={{ margin: 0, padding: 1, color: "white" }}>{props.destination}</h4>


            <div style={{ margin: 0, padding: 2, fontSize: 14, paddingLeft: 7, color: "#cec5db" }}>
                <p style={{}}><b>Flight day:</b> {props.departure_day}, <b>Return day:</b> {props.return_data}</p>
                <p style={{}}><b>Cabin:</b> {props.cabin}, <b>Price:</b> {props.price}</p>
                <a href={props.url} style={{ color: "#9ef542" }}>{props.url}</a>
            </div>

        </Box >
    );

};



export default function View() {

    const { state } = useLocation();
    const navigate = useNavigate();
    //const [state, setState] = useState();

    const [firstName, setFirstName] = useState(state ? state.firstname : null);
    const [lastName, setlastName] = useState(state ? state.lastname : null);
    const [email, setEmail] = useState(state ? state.email : null);
    const [passengers, setPassengers] = useState();
    const [adults, setAdults] = useState();
    const [childs, setChilds] = useState();
    const [maxPrice, setMaxPrice] = useState();

    const [picture, setPicture] = useState(undefined);
    const [preview, setPreview] = useState(undefined);
    const [selectedFile, setSelectedFile] = useState(false);
    //const { id, color } = state;
    // console.log(id);
    // console.log(color);
    const handleSave = () => {
        const user_data = {
            firstname: firstName,
            lastname: lastName,
            email: email,
            id: 3,
            picture: preview ? preview.split(',')[1] : ""
            //picture: preview.split(',')[1]
        };
        const response = postData("http://127.0.0.1:5000/update", user_data)
        response.then((data) => {
            navigate('/search', { state: data.data });
            //setState(data.data);
            //setSignUp(data.data.inserted);
        })

    };




    useEffect(() => {
        if (state == null) {
            navigate("/signin");
        }

    }, [state]);


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

    const onDrop = (picture) => {
        setPicture(picture);
        setSelectedFile(true)
    }
    return (

        <div class="wrapper bg-white mt-sm-5">
            <input
                id="filePicker2"
                style={{ visibility: "hidden" }}
                type="file"
            // onChange={(event) => {
            //     onDrop(event.target.files[0]);
            // }}
            />
            <h4 class="pb-4 border-bottom">Account settings</h4>

            <div class="d-flex align-items-start py-3 border-bottom">
                <img src={preview ? preview : state.pic}
                    class="img" alt="" />
                <div class="pl-sm-4 pl-2" id="img-section">
                    <b>Profile Photo</b>
                    <p>Accepted file type .png. Less than 1MB</p>
                    <label class="btn button border" htmlFor="filePicker2">
                        <b>Upload</b>
                    </label>


                </div>
            </div>
            <div class="py-2">
                <div class="row py-2">
                    <div class="col-md-6">
                        <label for="firstname">First Name</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            class="bg-light form-control"
                            placeholder={state ? state.firstname : null}
                            value={firstName}
                            onChange={(event) => { setFirstName(event.target.value) }}

                        />
                    </div>
                    <div class="col-md-6 pt-md-0 pt-3">
                        <label for="lastname">Last Name</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            class="bg-light form-control"
                            placeholder={state ? state.lastname : null}
                            value={lastName}
                            onChange={(event) => { setlastName(event.target.value) }}
                        />
                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-md-12">
                        <label for="email">Email Address</label>
                        <input
                            type="text"
                            id="email" name="email"
                            class="bg-light form-control"
                            placeholder={state ? state.email : null}
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}

                        />

                    </div>

                </div>
                <div class="row py-2">
                    <div class="col-md-6">
                        <label for="passengers">Babies</label>
                        <select name="passenger"
                            id="passengers"
                            class="bg-light"
                            defaultValue={state ? state.baby : 'Select'}
                            onChange={(event) => { setPassengers(event.target.value) }}>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                    </div>

                    <div class="col-md-6 pt-md-0 pt-3">
                        <label for="max">Max Value</label>
                        <input type="tel"
                            id="max"
                            name="max"
                            class="bg-light form-control"
                            placeholder="Maximum Search Value?"
                            onChange={(event) => { setMaxPrice(event.target.value) }} />

                    </div>
                </div>
                <div class="row py-2">
                    <div class="col-md-6">
                        <label for="adults">Adults</label>
                        <select
                            name="adults"
                            id="adults"
                            class="bg-light"
                            defaultValue={state ? state.adults : 'Select'}
                            onChange={(event) => { setAdults(event.target.value) }}
                        >

                            <option value="0" selected>0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                    </div>
                    <div class="col-md-6 pt-md-0 pt-3">
                        <label for="child">Child (+3 years old)</label>
                        <div class="arrow">
                            <select
                                name="child"
                                id="child"
                                class="bg-light"
                                defaultValue={state ? state.child : 'Select'}
                                onChange={(event) => { setChilds(event.target.value) }}
                            >
                                <option value="0" selected>0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="py-3 pb-4 border-bottom">
                    <button class="btn btn-primary mr-3" type="submit" value="submit" onClick={handleSave}>Save Changes</button>
                </div>
                <div class="d-sm-flex align-items-center pt-3" id="deactivate">
                    <div>
                        <b>Start Search</b>
                        <p>We'll send to your email when we found a good deal!</p>
                    </div>
                    <div class="ml-auto">
                        <button class="btn danger" type="submit" value="submit" href="/login.html">Start</button>
                    </div>
                </div>
            </div>

        </div>


        // <ThemeProvider theme={theme} >
        //     <Container component="main" maxWidth="xl" >
        //         <CssBaseline />
        //         <Box
        //             sx={{
        //                 // marginTop: 8,
        //                 // display: 'flex',
        //                 // flexDirection: 'column',
        //                 // alignItems: 'center',
        //                 // width: "100%",
        //                 // height: "100%",
        //                 // backgroundColor: "#000000",
        //                 // backgroundSize: "cover",
        //                 // backgroundRepeat: "no-repeat",
        //                 backgroundColor: "#000000",
        //                 //backgroundImage: `url(https://source.unsplash.com/1600x900/?travel)`,
        //                 // backgroundAttachment: "fixed",
        //                 //fontFamily: "roboto",
        //                 //color: "#333333",
        //             }}
        //         >

        //             {/* <List
        //                 sx={{ width: '100%', bgcolor: 'background.paper' }}
        //                 component="nav"
        //                 aria-labelledby="nested-list-subheader"
        //             // subheader={
        //             //     <ListSubheader component="div" id="nested-list-subheader">
        //             //         Nested List Items
        //             //     </ListSubheader>
        //             // }
        //             >


        //                 {flight_details.map(d => <RenderItem props={d} />)}

        //             </List> */}

        //         </Box>
        //     </Container>
        // </ThemeProvider >
    );


};