import React from 'react';
import Stack from '@mui/material/Stack';
import './header.style.scss';
import WrapSearch from '../../pages/Home/Dashboard/WrapSearch';
import Nav from '../Nav';

export default function Header() {
    return (
        <>
            <Stack className="header">
                <Nav></Nav>
                <WrapSearch></WrapSearch>
            </Stack>
            
        </>
    );
}
