import { Box,  CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import img2 from "../../assets/025.jpg"
import img3 from "../../assets/03.jpg"
import "./News.css";
import img1 from "../../assets/014.jpg";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const News = () => {
    return (
        <>
            <Container maxWidth="lg">
                <Box sx={{ marginTop: '40px' }}>
                    <Typography variant="body1" className="news">
                        news
                    </Typography>
                    <Typography variant="body1" className="allaboutfood">
                        This is all about food
                    </Typography>
                </Box>
                <Grid container sx={{ marginTop: '50PX'}} spacing={4}>
                    <Grid item  xs="12" md="4" >
                        <Box className="cardcontent">
                            <CardMedia className="cardimgmed" sx={{display:"flex" , justifyContent:"center"}}>
                                <img src={img1} alt="" height="250px" width="90%"/>
                            </CardMedia>
                            <CardContent className="contentsbodys">
                                <Box className="maincardcontent">
                                    <Box className="thaiicon">
                                        <LocationOnIcon />
                                        <Typography variant="body1">
                                            THAI
                                        </Typography>
                                    </Box>
                                    <Box className="thaiicon">
                                        <LocationOnIcon />
                                        <Typography variant="body1">
                                            23, DECEMBER, 2019
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className="theifoodrules">
                                        Thai food rules
                                    </Typography>
                                    <Typography variant="body1" className="thaifoodrulestext">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                                    </Typography>
                                </Box>
                                <Box className="linkwithicone">
                                    <a href="#" className="readme">READ MORE</a>
                                    <ArrowRightAltIcon style={{ marginLeft: '5px' }} />
                                </Box>

                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item xs="12" md="4"  >
                        <Box className="cardcontent">
                            <CardMedia className="cardimgmed" sx={{display:"flex" , justifyContent:"center"}}>
                                <img src={img2} alt="" height="250px" width="90%"/>
                            </CardMedia>
                            <CardContent className="contentsbodys">
                                <Box className="maincardcontent">
                                    <Box className="thaiicon">
                                        <LocationOnIcon />
                                        <Typography variant="body1">
                                            THAI
                                        </Typography>
                                    </Box>
                                    <Box className="thaiicon">
                                        <LocationOnIcon />
                                        <Typography variant="body1">
                                            23, DECEMBER, 2019
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className="theifoodrules">
                                        Thai food rules
                                    </Typography>
                                    <Typography variant="body1" className="thaifoodrulestext">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                                    </Typography>
                                </Box>
                                <Box className="linkwithicone">
                                    <a href="#" className="readme">READ MORE</a>
                                    <ArrowRightAltIcon style={{ marginLeft: '5px' }} />
                                </Box>

                            </CardContent>
                        </Box>
                    </Grid>
                    <Grid item  xs="12" md="4"  >
                        <Box className="cardcontent">
                            <CardMedia className="cardimgmed" sx={{display:"flex" , justifyContent:"center"}}>
                                <img src={img3} alt="" height="250px" width="90%"/>
                            </CardMedia>
                            <CardContent className="contentsbodys">
                                <Box className="maincardcontent">
                                    <Box className="thaiicon">
                                        <LocationOnIcon />
                                        <Typography variant="body1">
                                            THAI
                                        </Typography>
                                    </Box>
                                    <Box className="thaiicon">
                                        <LocationOnIcon />
                                        <Typography variant="body1">
                                            23, DECEMBER, 2019
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography variant="body1" className="theifoodrules">
                                        Thai food rules
                                    </Typography>
                                    <Typography variant="body1" className="thaifoodrulestext">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing.
                                    </Typography>
                                </Box>
                                <Box className="linkwithicone">
                                    <a href="#" className="readme">READ MORE</a>
                                    <ArrowRightAltIcon style={{ marginLeft: '5px' }} />
                                </Box>

                            </CardContent>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default News