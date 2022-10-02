import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import './profile.css'

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


    // const flight_details = [

    //     {
    //         departure_day: "2023-01-01",
    //         return_data: "2023-01-01",
    //         "season": "Winter",
    //         cabin: "Business",
    //         price: "2000",
    //         url: "https://google.com",
    //         destination: "França"
    //     },
    //     {
    //         departure_day: "2023-01-01",
    //         return_data: "2023-01-01",
    //         "season": "Winter",
    //         cabin: "Business",
    //         price: "2000",
    //         url: "https://google.com",
    //         destination: "França"
    //     },
    //     {
    //         departure_day: "2023-01-01",
    //         return_data: "2023-01-01",
    //         "season": "Winter",
    //         cabin: "Business",
    //         price: "2000",
    //         url: "https://google.com",
    //         destination: "França"
    //     },
    //     {
    //         departure_day: "2023-01-01",
    //         return_data: "2023-01-01",
    //         "season": "Winter",
    //         cabin: "Business",
    //         price: "2000",
    //         url: "https://google.com",
    //         destination: "França"
    //     },
    //     {
    //         departure_day: "2023-01-01",
    //         return_data: "2023-01-01",
    //         "season": "Winter",
    //         cabin: "Business",
    //         price: "2000",
    //         url: "https://google.com",
    //         destination: "França"
    //     },
    //     {
    //         departure_day: "2023-01-01",
    //         return_data: "2023-01-01",
    //         "season": "Winter",
    //         cabin: "Business",
    //         price: "2000",
    //         url: "https://google.com",
    //         destination: "França"
    //     },
    //     {
    //         departure_day: "2023-01-01",
    //         return_data: "2023-01-01",
    //         "season": "Winter",
    //         cabin: "Business",
    //         price: "2000",
    //         url: "https://google.com",
    //         destination: "França"
    //     },
    // ]

    const styles = {
        paperContainer: {
            backgroundImage: `url(${Image})`
        }
    };

    return (

        <div class="wrapper bg-white mt-sm-5">
            <h4 class="pb-4 border-bottom">Account settings</h4>
            <form method="post">
                <div class="d-flex align-items-start py-3 border-bottom">
                    <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        class="img" alt="" />
                    <div class="pl-sm-4 pl-2" id="img-section">
                        <b>Profile Photo</b>
                        <p>Accepted file type .png. Less than 1MB</p>
                        <button class="btn button border"><b>Upload</b></button>
                    </div>
                </div>
                <div class="py-2">
                    <div class="row py-2">
                        <div class="col-md-6">
                            <label for="firstname">First Name</label>
                            <input type="text" id="firstname" name="firstname" class="bg-light form-control" placeholder="Steve" />
                        </div>
                        <div class="col-md-6 pt-md-0 pt-3">
                            <label for="lastname">Last Name</label>
                            <input type="text" id="lastname" name="lastname" class="bg-light form-control" placeholder="Smith" />
                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-md-12">
                            <label for="email">Email Address</label>
                            <input type="text" id="email" name="email" class="bg-light form-control" placeholder="steve_@email.com" />

                        </div>

                    </div>
                    <div class="row py-2">
                        <div class="col-md-6">
                            <label for="passengers">Passengers</label>
                            <select name="passenger"
                                id="passengers"
                                class="bg-light">
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
                            <label for="max">Max Value</label>
                            <input type="tel"
                                id="max"
                                name="max"
                                class="bg-light form-control"
                                placeholder="Maximum Search Value?" />

                        </div>
                    </div>
                    <div class="row py-2">
                        <div class="col-md-6">
                            <label for="adults">Adults</label>
                            <select name="adults" id="adults" class="bg-light">
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
                                <select name="child" id="child" class="bg-light">
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
                        <button class="btn btn-primary mr-3" type="submit" value="submit">Save Changes</button>
                    </div>
                    <div class="d-sm-flex align-items-center pt-3" id="deactivate">
                        <div>
                            <b>Deactivate your account</b>
                            <p>Details about your company account and password will be deleted!</p>
                        </div>
                        <div class="ml-auto">
                            <button class="btn danger" type="submit" value="submit" href="/login.html">Deactivate</button>
                        </div>
                    </div>
                </div>
            </form>
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