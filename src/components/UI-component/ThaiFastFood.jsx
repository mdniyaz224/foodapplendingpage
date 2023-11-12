import { Box, Container, Grid, Typography } from '@mui/material';
import img from "../../assets/01.jpg"

import CardContent from '@mui/material/CardContent';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./ThaiFastFood.css";
// import React from 'react'
import "./ThaiFastFood";
const ThaiFastFood = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box textAlign="center" className="newcomer">
                    <Typography variant='body1' className='newcomer_p' >
                        newcomer
                    </Typography>
                    <Typography variant='h2' className='thaifast'>
                        Thai fast food
                    </Typography>
                </Box>
                <Grid container spacing={5} sx={{ display: 'flex', justifyContent: 'center' }}>

                    <Grid item sm={6} md={4} className='grid1'>
                        <Box sx={{ position: 'relative' }}>
                            <img src={img} alt='' height="auto" width="100%" />
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box className="thaicombobox">
                                    <CardContent >
                                        <Box textAlign="center">
                                            <Typography variant='h4' className='thaicombo'>
                                                Thai Combo
                                            </Typography>
                                            <Typography variant='body1' className='thaibodytext'>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing
                                            </Typography>
                                            <Box >
                                                <span className='doller1'>$ 12</span>
                                            </Box>
                                            <Box className="card_icon">
                                                <AddShoppingCartIcon />
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={4} >
                        <Box sx={{ position: 'relative' }}>
                            <img src={img} alt='' height="auto" width="100%" />
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box  className="thaicombobox">
                                    <CardContent >
                                        <Box textAlign="center">
                                            <Typography variant='h4' className='thaicombo'>
                                                Thai Combo
                                            </Typography>
                                            <Typography variant='body1' className='thaibodytext'>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing
                                            </Typography>
                                            <Box >
                                                <span className='doller1'>$ 12</span>
                                            </Box>
                                            <Box className="card_icon">
                                                <AddShoppingCartIcon />
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={6} md={4}>
                        <Box sx={{ position: 'relative' }}>
                            <img src={img} alt='' height="auto" width="100%" />
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Box className="thaicombobox">
                                    <CardContent >
                                        <Box textAlign="center">
                                            <Typography variant='h4' className='thaicombo'>
                                                Thai Combo
                                            </Typography>
                                            <Typography variant='body1' className='thaibodytext'>
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing
                                            </Typography>
                                            <Box >
                                                <span className='doller1'>$ 12</span>
                                            </Box>
                                            <Box className="card_icon">
                                                <AddShoppingCartIcon />
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default ThaiFastFood