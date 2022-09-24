import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import product_img_1 from '../../../../public/images/product_img_1.png';
import product_img_2 from '../../../../public/images/product_img_2.png';
import product_img_3 from '../../../../public/images/product_img_3.png';
import img_watch_360 from '../../../../public/images/img_watch_360.png';

import './index.scss';


export default function Product({ product, flexDirection = 'column'}) {
    const checkFlexDerection = flexDirection === 'row' ? true : false;
    const myStyleChange_1 = {
        display: {sx: 'inline-block', sm: 'flex'}
    }
    const myStyleChange_2 = {
        width: {sx: '100% !important', sm: '50% !important', lg: '40% !important'}
    } 
    
    const myStyleChange_3 = {
        display: {sx: 'inline-block', sm: 'flex'},
        flexDirection: 'column',
        justifyContent: 'flex-end'
    }
    return (
        <Box className="product-box product-item-main product-item-compare" sx={checkFlexDerection ? myStyleChange_1 : {}}>
            <Box className="product-thumbnail" sx={checkFlexDerection ? myStyleChange_2 : {}}>
                <Link className="image_thumb p_img" to={`/san-pham/${product?.id}`} title={product.title}>
                    <img width="100%" src={product?.image} data-lazyload="//bizweb.dktcdn.net/thumb/large/100/336/794/products/phong-khach-can-ho-condotel-toa-g3-vinhomes-green-bay-530f3812-c3fa-4ac6-b1e5-cb42e4e6e23e.jpg?v=1540399059000" alt="Cho thuê căn hộ, biệt thự cao cấp" />
                </Link>
                <div className="label_thumb">
                    <div className="wrap_lable">
                        {product?.notes.map((value, index) => {
                            let style_css = '';
                            switch (value.toLowerCase()) {
                                case 'cho thuê':
                                    style_css = 'thue';
                                    break;
                                case 'bán':
                                    style_css = 'ban';
                                    break;
                                default:
                                    style_css = 'hot';
                            }
                            return (<span key={index} className={`lb ${style_css}`}>{value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()}</span>)
                        })}
                    </div>
                </div>
                <a href="cho-thue-can-ho-biet-thu-cao-cap.html" title="Dự án hỗ trợ xem ảnh 360 độ" className="degrees">
                    <img src={img_watch_360} data-lazyload="//bizweb.dktcdn.net/100/336/794/themes/692935/assets/360-degrees.png?1638695199389" alt="Tin 306 độ" />
                </a>
            </Box>
            <Box sx={checkFlexDerection ? myStyleChange_3 : {}}>
                <div className="product-info product-bottom mh">
                    <h3 className="product-name"><a href="cho-thue-can-ho-biet-thu-cao-cap.html" title={product.title}>{product.title}</a></h3>
                    <div className="tag_mix section">
                        <ul className="padding-0">
                            <li><span><LocationOnIcon className="icon-map-marker" />&nbsp;</span><span>{product.address}</span></li>
                        </ul>
                    </div>
                    <div className="section">
                        <div className="group_contact">
                            <a className="inIcon contact" href="tel:0123456789" title="Gọi ngay"><LocalPhoneIcon sx={{ fontSize: 18 }}></LocalPhoneIcon></a>
                        </div>
                        <div className="blockprice">
                            <div className="product-item-price price-box">
                                <span className="special-price">
                                    <span className="price product-price">{product.price}</span>/Tháng
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section bottom_extentions">
                    <ul>
                        <li><span><img src={product_img_1} alt="Giường ngủ" />&nbsp;{product.detail.info_1} Ngủ</span></li>
                        <li><span><img src={product_img_2} data-lazyload="//bizweb.dktcdn.net/100/336/794/themes/692935/assets/bath.png?1638695199389" alt="Phòng tắm" />&nbsp;{product.detail.info_2} Tắm</span></li>
                        <li><span><img src={product_img_3} alt="Diện tích" />&nbsp;{product.detail.info_3}</span></li>
                    </ul>
                </div>
            </Box>
        </Box>
    );
}
