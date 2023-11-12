
import Nav from './Nav'
import "./Head.css"
import img from "../../../assets/03.png"
import { Box, Button, Container, Typography } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';// import SendIcon from '@mui/icons-material/Send';

const Head = () => {
    return (
        <>
            <Box className="maincontainer">
                <Container maxWidth="lg" >
                    <Nav />
                  
                        <Box className="thaifood">
                            <Typography variant='h2' className='head_text'>
                                Thai Food
                            </Typography>
                            <Typography variant='body1' className='head_para'>
                                Lorem ipsum dolor
                                sit amet, consectetur adipiscing elit. Donec ullamcorper neque dapibus ipsum semper, sit amet
                                luctus turpis porttitor. Ut libero ante, varius quis ligula.
                            </Typography>
                            <Box className='btnbox'>
                                <Button variant="outlined" startIcon={<ShoppingCartIcon />} className='mybtn'>
                                    ORDER NOW
                                </Button>
                            </Box>
                            <Box className="img">
                                <img src={img} alt="" />
                            </Box>
                        </Box>
                
                </Container>
            </Box>
        </>
    )
}

export default Head