// import React from 'react'
import "./Delivary.css";
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import img from "../../assets/03.png";
const Delivary = () => {
    return (
        <>
            <Box className="devsec">
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box className="maindelivary1">
                                <Typography variant="body1" className="delivary">
                                    Delivery
                                </Typography>
                                <Typography variant="body1" className="choose">
                                    Choose what you want
                                </Typography>
                                <Typography variant="body1" className="delivtext">
                                    Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet
                                    luctus turpis porttitor. Ut libero ante, varius quis ligula.
                                </Typography>
                                <Button className="orderbtn">ORDER ONLINE</Button>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} >
                            <Box className="devimg" sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <img src={img} alt="" />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <Box  className="maindelivary1">
                                <Typography variant="body1" className="delivary" sx={{ textAlign: "right" }}>
                                    Reward
                                </Typography>
                                <Typography variant="body1" className="choose1" >
                                    Earn points every order
                                </Typography>
                                <Typography variant="body1" className="delivtext1" >
                                    Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet
                                    luctus turpis porttitor. Ut libero ante, varius quis ligula.
                                </Typography>
                                <Box className="btnorder">
                                    <Button className="orderbtn">LEARN MORE</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Delivary