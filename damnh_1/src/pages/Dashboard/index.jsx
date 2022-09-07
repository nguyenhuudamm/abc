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
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import logo from '../../public/images/logo_dashboard.png';
import './index.scss';
import Search from './Search/index.jsx';
import Search_2 from './Search_2/index.jsx';
import ListProductNews from './ListProductNews';
import ListProductEspecical from './ListProductEspecical';
import ListProductRents from './ListProductRents';
import ListProductSale from './ListProductSale';
import ListNew1 from './ListNew1';
import ListNew2 from './ListNew2';


const useTheme = makeStyles({
    header: {
      color: '#0000003b',
    },
});

export default function Dashboard() {
    const [auth, setAuth] = useState(true);
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

    const theme = useTheme();
    return (
        <>
        <Stack className="header">
            <Box>
                <AppBar className="header-navbar" sx={{py: 2, px: 5, mb: 5,position: "relative", backgroundColor: '#0000003b'}}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ display: {xs: 'inline-block', lg: 'none'}, position: 'absolute'}}
                            onClick={toggleDrawer("left", true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Box sx={{ width: {xs: '100%', lg: 'auto'}, mr: {xs: 0, lg: 5}, display: {xs: 'flex', lg: 'inline-block'}, justifyContent: 'center'}}>
                            <a  href=""><img className="header-logo" src={logo} alt="" /></a>
                        </Box>
                        
                        <Stack 
                            sx={{ width: "100%", display: {xs: 'none', lg: 'flex'}, fontSize: 20, mx: 5}}
                            direction="row"
                            spacing={2}
                        >
                            <Box>
                                <Link sx={{color: 'white', mr: 5}} href="#" underline="none"> Trang chủ</Link>
                            </Box>
                            <Box>
                                <Link
                                    href="#" underline="none"
                                    sx={{color: 'white', mr: 5}}
                                    id="basic-button"
                                    aria-controls={open ? 'basic-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                > Tất cả tin rao <KeyboardArrowDownIcon sx={{position: 'relative', top: 6}} /> </Link>
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
                            <Box>
                                <Link
                                    href="#" underline="none"
                                    sx={{color: 'white', mr: 5}}
                                    id="basic-button-2"
                                    aria-controls={open ? 'basic-menu-2' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                    onClick={handleClick}
                                > Tin tức <KeyboardArrowDownIcon sx={{position: 'relative', top: 6}} /> </Link>
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
                            <Box>
                                <Link sx={{color: 'white', mr: 5}} href="#" underline="none"> Giới thiệu</Link>
                            </Box>
                            <Box>
                                <Link sx={{color: 'white', mr: 5}} href="#" underline="none"> Liên hệ</Link>
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
                                        <ListItemText><Link sx={{color: 'black'}} href="#" underline="none"> Trang chủ</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText><Link sx={{color: 'black'}} href="#" underline="none"> Tất cả tin rao</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText><Link sx={{color: 'black'}} href="#" underline="none"> Tin tức</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText><Link sx={{color: 'black'}} href="#" underline="none"> Giới thiệu</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                                <ListItem>
                                    <ListItemButton>
                                        <ListItemText><Link sx={{color: 'black'}} href="#" underline="none"> Liên hệ</Link></ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                            </Box>
                    </SwipeableDrawer>
                </React.Fragment>
            </Box>
            <Typography sx={{color: 'white', mb: 5}} align="center" variant="h2">Tìm kiếm nhà đất mơ ước</Typography>
            <Box sx={{width: "80%", mx: 'auto'}}>
                <Search></Search>
            </Box>
            <Typography sx={{color: 'white'}} align="center" variant="h6">Tìm nhanh theo kiểu dáng</Typography>
            <Search_2></Search_2>
        </Stack>
        <ListProductNews></ListProductNews>
        <ListProductEspecical></ListProductEspecical>
        <ListProductRents></ListProductRents>
        <ListNew1></ListNew1>
        <ListProductSale></ListProductSale>
        <ListNew2></ListNew2>                           
        </>
    );
}
