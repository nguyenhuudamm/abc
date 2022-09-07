import React, { useState } from 'react';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import './index.scss';

import New_1 from '../News/New_1';
import New_2 from '../News/New_2';

import banner_project_1 from '../../../public/images/banner_project_1.png';
import banner_project_2 from '../../../public/images/banner_project_2.png';
import banner_project_3 from '../../../public/images/banner_project_3.png';
import banner_project_4 from '../../../public/images/banner_project_4.png';
import banner_project_5 from '../../../public/images/banner_project_5.png';


const list_news = [
    {title: 'Những lí do đầy thu hút của dự án chung cư New City', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: banner_project_1},
    {title: 'Tình hình thị trường bất động sản năm 2018 sẽ diễn ra như thế nào', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: banner_project_2},
    {title: 'Chủ đầu tư Tân Hoàng Minh Group', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: banner_project_3},
    {title: 'Dự án Topaz Elite được giới đầu tư kỳ vọng tại Hồ Chí Minh', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: banner_project_4},
    {title: 'Dự án phố nhà Thương Mại Vinhomes Thanh Hóa', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: banner_project_5},
    {title: 'Cuộc sống thượng lưu tại khu biệt thự Paradise Cam Ranh', detail: 'Dự án chung cư cao cấp new city tại quận 2 gồm hơn 4000 căn hộ tại số 27 đường Mai Chí Thọ Thủ Thiêm do CDT Thuận V...', date: '25/10/2018 ', author: 'Đào Quý Thương', comment: 2 ,image: banner_project_1},
]

export default function ListNew1() {

    return (
       <Box className="list-product-especical list-news">
            <Container sx={{py: 5}}>
                <Stack className="h-title-menu" direction="row">
                    <Box className="h-title" sx={{ mt: 3}}>
                        <Typography variant="h5"><span className="h5-title">TIN </span>BẤT ĐỘNG SẢN MỚI</Typography>
                        <Typography variant="p" className="p-title">Cập nhật nhanh chóng thông tin thị trường bất động sản</Typography>
                    </Box>
                </Stack>
                <Grid container spacing={2} sx={{mt: 2}}>
                    <Grid item xs={12} md={6}>
                        <New_1 new={list_news[0]}></New_1>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {
                            list_news.map((value, index) => {
                                return index !== 0 && <New_2 new={value}></New_2>
                            })
                        }
                    </Grid>
                </Grid>
            </Container>
       </Box>
    );
}
