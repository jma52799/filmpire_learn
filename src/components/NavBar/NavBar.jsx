import React from 'react';
import { AppBar, IconButton, ToolBar, Drawer, Button, Avatar, useMediaQuery } from '@mui/material';
import { Menu, AccountCircle, Brightness4, Brightness7 } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles'; 

import useStyles from './styles';

const NavBar = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery('(max-width:600px)'); //isMobie == false if device < 600px
    const theme = useTheme(); //this hook let us use the theme for the app
    const isAuthenticated = true;

    return (
        <>
            <AppBar position="fixed">
                <ToolBar className={classes.toolbar}>
                    {isMobile && (
                        <IconButton color="inherit" edge="start" style={{outline: 'none'}} onClick={() => {}} className={classes.menuButton}>
                            <Menu />
                        </IconButton>
                    )}
                    <IconButton color="inheir" sx={{ml: 1}} onClick={() => {}}>
                        {theme.palette.mode ==='dark' ? <Brightness7 /> : <Brightness4 />}
                    </IconButton>
                    {!isMobile && 'Search...'}
                    <div>
                        {!isAuthenticated ? (
                            <Button color="inherit" onClick={() => {}}>
                                Login &nbsp; <AccountCircle />
                            </Button>
                        ) : ( //'component={Link}': links to a specific page specified by 'to'
                            <Button color="inherit" component={Link} to={`/profile/:id`} className={classes.linkButton} onClick={() => {}}>
                                {!isMobile && <>My Movies &nbsp;</>}
                                <Avatar style={{width: 30, height: 30}} alt="Profile" src='https://th.bing.com/th/id/OIP.yWfJt9URUJy-XFt2wpb-tAHaHa?pid=ImgDet&rs=1'>
                                    
                                </Avatar>
                            </Button>
                        )}
                    </div>
                    {isMobile && 'Search...'}
                </ToolBar>
            </AppBar>
        </>
    )
}

export default NavBar;