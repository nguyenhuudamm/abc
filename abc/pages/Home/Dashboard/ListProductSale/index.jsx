import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

import './index.scss';
import Product from '../Product';   
import product_img_thumb1 from '../../../../public/images/product_img_thumb9.png';
import product_img_thumb2 from '../../../../public/images/product_img_thumb10.png';
import product_img_thumb3 from '../../../../public/images/product_img_thumb8.png';


const list_product = [
    {title: 'Bán chung cư Sunshine Riverside Tây Hồ', address: 'Phường 15 Bình Thạnh HỒ CHÍ MINH', price: '36.000.000', notes: ['bán'], detail: {info_1: 3, info_2: 2, info_3: '175m2'}, image:  product_img_thumb1 },
    {title: 'Bán biệt thự hiện đại mới xây', address: 'Quảng An Tây Hồ Hà Nội', price: '15.000.000.000', notes: ['bán', 'hot'], detail: {info_1: 3, info_2: 2, info_3: '175m2'}, image:  product_img_thumb2 },
    {title: 'Bán căn hộ cao cấp Tây Hồ', address: 'Sài Đồng Long Biên Hà Nội', price: '18.700.000.000', notes: ['bán'], detail: {info_1: 3, info_2: 2, info_3: '175m2'}, image:  product_img_thumb3 },
]

export default function ListProductSale() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
       <Box className="list-product-new">
            <Container sx={{py: 5}}>
                <Stack className="h-title-menu" direction="row" alignItems="center">
                    <Box className="h-title" sx={{flexGrow: 1 }}>
                        <Typography variant="h5"><span className="h5-title">DỰ ÁN</span> ĐANG BÁN</Typography>
                        <Typography variant="p" className="p-title">Những dự án đang bán hàng đầu được săn đón</Typography>
                    </Box>
                    <Box></Box>
                </Stack>
                <Grid container spacing={2} sx={{mt: 5}}>
                    {
                        list_product.map((product, index) => {
                            return (
                                <Grid key={index} item xs={12} md={6} lg={4}>
                                    <Box sx={{width: '100%'}}>
                                        <Product product={product}></Product>
                                    </Box>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
       </Box>
    );
}
