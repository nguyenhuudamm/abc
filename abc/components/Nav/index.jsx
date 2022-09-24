import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import logo from '../../public/images/logo_dashboard.png';

export default function Nav() {
    const [state, setState] = useState({
        left: false
    });

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    return (
    <div style={{position: 'absolute', width: '100%'}}>
            <Box>
                <AppBar className="header-navbar" sx={{ py: 2, px: 5, position: "relative", backgroundColor: '#0000003b' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: { xs: 'inline-block', lg: 'none' }, position: 'absolute' }}
                            onClick={toggleDrawer("left", true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ width: { xs: '100%', lg: 'auto' }, mr: { xs: 0, lg: 5 }, display: { xs: 'flex', lg: 'inline-block' }, justifyContent: 'center' }}>
                            <Link to="/"><img className="header-logo" src={logo} alt="aa" /></Link>
                        </Box>

                        <Stack className="navbars" sx={{ width: '100%', display: { xs: 'none', lg: 'flex' }, alignItems: 'center', flexDirection: 'row', fontSize: '20px', ml: 5}} >
                            <Box sx={{flexGrow: 1}}>
                                <Link className="tag-a text-white"> Trang chủ</Link>
                            </Box>
                            <Box sx={{flexGrow: 1}}>
                                <Link
                                    className="tag-a text-white"
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                > 
                                    Tất cả tin rao 
                                    <KeyboardArrowDownIcon sx={{ position: 'absolute', top: 28 }} /> 
                                </Link>
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </Box>
                            <Box sx={{flexGrow: 1}}>
                                <Link
                                    className="tag-a text-white"
                                    id="basic-button-2"
                                    aria-controls={open ? 'basic-menu-2' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                > Tin tức <KeyboardArrowDownIcon sx={{ position: 'absolute', top: 28 }} /> </Link>
                                <Menu
                                    id="basic-menu-2"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                </Menu>
                            </Box>
                            <Box sx={{flexGrow: 1}}>
                                <Link className="tag-a text-white"> Giới thiệu</Link>
                            </Box>
                            <Box sx={{flexGrow: 1}}>
                                <Link className="tag-a text-white"> Liên hệ</Link>
                            </Box>
                        </Stack>
                    </Toolbar>
                </AppBar>
                <React.Fragment key="left">
                    <SwipeableDrawer
                        anchor="left"
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                        onOpen={toggleDrawer("left", true)}
                    >
                        <Box
                            sx={{ width: "left" === 'top' || "left" === 'bottom' ? 'auto' : 250 }}
                            role="presentation"
                            onClick={toggleDrawer("left", false)}
                            onKeyDown={toggleDrawer("left", false)}
                        >
                            <List>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText><Link className="tag-a text-dark"> Trang chủ</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText><Link className="tag-a text-dark"> Tất cả tin rao</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText><Link className="tag-a text-dark"> Tin tức</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText><Link className="tag-a text-dark"> Giới thiệu</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText><Link className="tag-a text-dark"> Liên hệ</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </SwipeableDrawer>
                </React.Fragment>
            </Box>
        </div>
    )
}
