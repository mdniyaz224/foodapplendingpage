import "./Crousals.css"
import img1 from "../../assets/face1.jpg"
import { Container, Box, Typography, } from "@mui/material"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Crousals = () => {
    return (
        <>
            <Box className="rewardmaindiv">
                <Container maxWidth="lg">
                    <Box sx={{ marginTop: '60px' ,marginBottom:'20px' }}>
                        <Typography variant="body1" className="news mycolor" >
                            Reward
                        </Typography>
                        <Typography variant="body1" className="allaboutfood">
                            Clients review
                        </Typography>
                    </Box>
                    <Carousel showArrows={false} showStatus={false} showThumbs={false} showDots={false}>
                        <div>
                            <Typography variant="h4" className="crousaltext">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec neque dapibus ipsum semper, amet luctus turpis porttitor.
                            </Typography>
                            <img src={img1} alt="" className="cimage" />
                            <Typography variant="h5">
                                Ann Grayson
                            </Typography>
                            <Typography variant="h6">
                                Manager
                            </Typography>
                        </div>
                        <div>
                            <div>
                                <Typography variant="h4" className="crousaltext">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec neque dapibus ipsum semper, amet luctus turpis porttitor.
                                </Typography>
                                <img src={img1} alt="" className="cimage" />
                                <Typography variant="h5">
                                    Ann Grayson
                                </Typography>
                                <Typography variant="h6">
                                    Manager
                                </Typography>
                            </div>
                        </div>
                        <div>
                            <div>
                                <Typography variant="h4" className="crousaltext">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec neque dapibus ipsum semper, amet luctus turpis porttitor.
                                </Typography>
                                <img src={img1} alt="" className="cimage" />
                                <Typography variant="h5">
                                    Ann Grayson
                                </Typography>
                                <Typography variant="h6">
                                    Manager
                                </Typography>
                            </div>
                        </div>
                    </Carousel>
                </Container>
            </Box>
        </>
    )
}

export default Crousals