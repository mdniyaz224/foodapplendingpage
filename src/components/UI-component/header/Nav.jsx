import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from "../../../assets/logo2.png";
// import Container from '@mui/material/Container';
import "./Nav.css"
import { Container } from '@mui/material';
// import { Container } from '@mui/material';
const drawerWidth = 240;
const navItems = ['Home', 'LIVE DEMO', 'LIVE DEMO BLOCKS','BUY NOW'];

const Nav = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (

        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>

            <Typography variant="h6" sx={{ my: 2 }}>
                <Box>
                    <img src={logo} alt="" height="50px" width="50px" />
                    <Typography variant='h6'>
                        DinerM4
                    </Typography>
                </Box>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item,index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} sx={{ padding: '0px 50px 0px 50px' }} />
                        </ListItemButton>
                    </ListItem>

                ))}
                <Button>click</Button>
            </List>
        </Box>

    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (

        <Box sx={{ display: 'flex' }}>

            <CssBaseline />

            <AppBar component="nav">
                <Container maxWidth="lg">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <img src={logo} alt="" height="50px" width="50px" />
                                <Typography variant='h6' sx={{ marginLeft: '10px' }}>
                                    DinerM4
                                </Typography>
                            </Box>
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item,index) => (
                                <Button key={item} sx={{ color: '#fff' }} className={item}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

        </Box>

    );
}

Nav.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Nav;
