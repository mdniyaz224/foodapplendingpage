import { Box, Container, Typography } from "@mui/material"
import "./Watch.css"

import PlayCircleIcon from '@mui/icons-material/PlayCircle';
const Watch = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{marginTop:'200px'}}>
                <Box sx={{ marginTop: '60px' }}>
                    <Typography variant="body1" className="news mycolor" >
                        Latest
                    </Typography>
                    <Typography variant="body1" className="allaboutfood">
                        Watch Video
                    </Typography>
                </Box>
                <Box className="watchvideo">
                   <Box className="playcircelicon">
                     <PlayCircleIcon sx={{fontSize:'50px'}}/>
                   </Box>
                </Box>
            </Container>

        </>
    )
}

export default Watch