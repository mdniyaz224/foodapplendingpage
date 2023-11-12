import { Box, Button, Card, Container, Grid, Typography } from "@mui/material"
import "./BestFood.css"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import img1 from "../../assets/background1.jpg"
import img2 from "../../assets/01.jpg"
const BestFood = () => {
    return (
        <>
            <Container maxWidth='lg'>
                <Grid container sx={{ marginTop: '200px', marginBottom: '200px' }} spacing={4}>
                    <Grid item xs="12" sm="12" md="3" className="bestfoodimg1">
                        <img src={img1} alt="" />
                    </Grid>
                    <Grid item xs="12" sm="12" md="6" sx={{ position: 'relative' }}>
                        <Card>
                            <Box >
                                <Typography variant="body1" className="whoarewe">
                                    who are we
                                </Typography>
                                <Typography variant="h2" className=" Bestfood ">
                                    Best food traditions from the world
                                </Typography>
                                <Typography variant="body1" className="bodytext">
                                    Lorem ipsum dolor
                                    sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet
                                    luctus turpis porttitor. Ut libero ante, varius quis ligula.
                                </Typography>

                            </Box>
                        </Card>
                        <Box className="mybtnbox">
                            <Button variant="outlined" startIcon={<PlayArrowIcon />} className="mybtn1">
                                READ MORE
                            </Button>
                        </Box>
                    </Grid>
                    <Grid item xs="12" sm="12" md="3" className="bestfoodimg1">
                        <img src={img2} alt="" />
                    </Grid>
                </Grid>
            </Container>

        </>
    )
}

export default BestFood