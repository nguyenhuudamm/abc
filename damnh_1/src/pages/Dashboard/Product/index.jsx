import React, { useState } from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Typography } from '@mui/material';
import product_img_1 from '../../../public/images/product_img_1.png';
import product_img_2 from '../../../public/images/product_img_2.png';
import product_img_3 from '../../../public/images/product_img_3.png';
import img_watch_360 from '../../../public/images/img_watch_360.png';

import './index.scss';


const menu_items = [
    'Biệt thự',
    'Căn hộ',
    'Chugn cư',
    'Nhà vườn',
];

export default function Product(props) {
    return (
        <div class="product-box product-item-main product-item-compare">	
            <div class="product-thumbnail">
                <a class="image_thumb p_img" href="cho-thue-can-ho-biet-thu-cao-cap.html" title={props.product.title}>	
                    <img src={props.product.image}  data-lazyload="//bizweb.dktcdn.net/thumb/large/100/336/794/products/phong-khach-can-ho-condotel-toa-g3-vinhomes-green-bay-530f3812-c3fa-4ac6-b1e5-cb42e4e6e23e.jpg?v=1540399059000" alt="Cho thuê căn hộ, biệt thự cao cấp"/>
                </a>
                <div class="label_thumb">
                    <div class="wrap_lable">
                        {props.product.notes.map((value, index) => {
                            let style_css = '';
                            switch(value.toLowerCase()) {
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
                <a href="cho-thue-can-ho-biet-thu-cao-cap.html" title="Dự án hỗ trợ xem ảnh 360 độ" class="degrees">
                    <img src={img_watch_360}  data-lazyload="//bizweb.dktcdn.net/100/336/794/themes/692935/assets/360-degrees.png?1638695199389" alt="Tin 306 độ"/>
                </a>	
            </div>
            <div class="product-info product-bottom mh">
                <h3 class="product-name"><a href="cho-thue-can-ho-biet-thu-cao-cap.html" title={props.product.title}>{props.product.title}</a></h3>
                <div class="tag_mix section">
                    <ul class="padding-0">
                        <li><span><LocationOnIcon className="icon-map-marker" />&nbsp;</span><span>{props.product.address}</span></li>
                    </ul>
                </div>
                <div class="section">
                    <div class="group_contact">
                        <a class="inIcon contact" href="tel:0123456789" title="Gọi ngay"><LocalPhoneIcon sx={{fontSize: 18}}></LocalPhoneIcon></a>
                    </div>
                    <div class="blockprice">
                        <div class="product-item-price price-box">
                            <span class="special-price">
                                <span class="price product-price">{props.product.price}₫</span>/Tháng
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section bottom_extentions">
                <ul>
                    <li><span><img src={product_img_1} alt="Giường ngủ"/>&nbsp;{props.product.detail.info_1} Ngủ</span></li>
                    <li><span><img src={product_img_2}  data-lazyload="//bizweb.dktcdn.net/100/336/794/themes/692935/assets/bath.png?1638695199389" alt="Phòng tắm"/>&nbsp;{props.product.detail.info_2} Tắm</span></li>
                    <li><span><img src={product_img_3} alt="Diện tích"/>&nbsp;{props.product.detail.info_3}</span></li>
                </ul>
            </div>
        </div>
    );
}
