import { Box, Container, Grid, Typography } from '@mui/material'
import "./Menu.css";

import img from "../../assets/04.jpg"

const Menu = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Typography variant='body1' className='welcom'>
                    Welcome
                </Typography>
                <Typography variant='body1' className='ourmenu'>
                    Our Menu
                </Typography>
                <Grid container spacing={4} sx={{marginTop:'20px'}}>
                    <Grid item sm="12" md="6">
                        <Box className="maindiv">
                            <Box className="boximg">
                                <img src={img} alt='' />
                            </Box>
                            <Box >
                                <Typography variant='body1' className='sushi'>
                                    Sushi
                                </Typography>
                                <Typography variant='body1' className='salmon'>
                                    Salmon Roll . . . . . . . . . . . . . <span className='rolldoller'>$ 18</span>
                                </Typography>
                                <Typography variant='h3' className='bodytext1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Ullamcorper eget lectus porta euismod a libero.
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm="12" md="6">
                        <Box className="maindiv">
                            <Box className="boximg">
                                <img src={img} alt='' />
                            </Box>
                            <Box >
                                <Typography variant='body1' className='sushi'>
                                    Sushi
                                </Typography>
                                <Typography variant='body1' className='salmon'>
                                    Salmon Roll . . . . . . . . . . . . . <span className='rolldoller'>$ 18</span>
                                </Typography>
                                <Typography variant='h3' className='bodytext1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Ullamcorper eget lectus porta euismod a libero.
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container  spacing={4} sx={{marginTop:'20px'}}>
                    <Grid item sm="12" md="6">
                        <Box className="maindiv">
                            <Box className="boximg">
                                <img src={img} alt='' />
                            </Box>
                            <Box >
                                <Typography variant='body1' className='sushi'>
                                    Sushi
                                </Typography>
                                <Typography variant='body1' className='salmon'>
                                    Salmon Roll . . . . . . . . . . . . . <span className='rolldoller'>$ 18</span>
                                </Typography>
                                <Typography variant='h3' className='bodytext1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Ullamcorper eget lectus porta euismod a libero.
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm="12" md="6">
                        <Box className="maindiv">
                            <Box className="boximg">
                                <img src={img} alt='' />
                            </Box>
                            <Box >
                                <Typography variant='body1' className='sushi'>
                                    Sushi
                                </Typography>
                                <Typography variant='body1' className='salmon'>
                                    Salmon Roll . . . . . . . . . . . . . <span className='rolldoller'>$ 18</span>
                                </Typography>
                                <Typography variant='h3' className='bodytext1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Ullamcorper eget lectus porta euismod a libero.
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{marginTop:'20px'}}>
                    <Grid item sm="12" md="6">
                        <Box className="maindiv">
                            <Box className="boximg">
                                <img src={img} alt='' />
                            </Box>
                            <Box >
                                <Typography variant='body1' className='sushi'>
                                    Sushi
                                </Typography>
                                <Typography variant='body1' className='salmon'>
                                    Salmon Roll . . . . . . . . . . . . . <span className='rolldoller'>$ 18</span>
                                </Typography>
                                <Typography variant='h3' className='bodytext1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Ullamcorper eget lectus porta euismod a libero.
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm="12" md="6">
                        <Box className="maindiv">
                            <Box className="boximg">
                                <img src={img} alt='' />
                            </Box>
                            <Box >
                                <Typography variant='body1' className='sushi'>
                                    Sushi
                                </Typography>
                                <Typography variant='body1' className='salmon'>
                                    Salmon Roll . . . . . . . . . . . . . <span className='rolldoller'>$ 18</span>
                                </Typography>
                                <Typography variant='h3' className='bodytext1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Ullamcorper eget lectus porta euismod a libero.
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={4} sx={{marginTop:'20px'}}>
                    <Grid item sm="12" md="6">
                        <Box className="maindiv">
                            <Box className="boximg">
                                <img src={img} alt='' />
                            </Box>
                            <Box >
                                <Typography variant='body1' className='sushi'>
                                    Sushi
                                </Typography>
                                <Typography variant='body1' className='salmon'>
                                    Salmon Roll . . . . . . . . . . . . . <span className='rolldoller'>$ 18</span>
                                </Typography>
                                <Typography variant='h3' className='bodytext1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Ullamcorper eget lectus porta euismod a libero.
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm="12" md="6">
                        <Box className="maindiv">
                            <Box className="boximg">
                                <img src={img} alt='' />
                            </Box>
                            <Box >
                                <Typography variant='body1' className='sushi'>
                                    Sushi
                                </Typography>
                                <Typography variant='body1' className='salmon'>
                                    Salmon Roll . . . . . . . . . . . . . <span className='rolldoller'>$ 18</span>
                                </Typography>
                                <Typography variant='h3' className='bodytext1'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                    elit.
                                    Ullamcorper eget lectus porta euismod a libero.
                                </Typography>

                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Menu