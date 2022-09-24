import React from 'react';
import Stack from '@mui/material/Stack';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import collection_1 from '../../../../public/images/collection_1.png';
import collection_2 from '../../../../public/images/collection_2.png';
import collection_3 from '../../../../public/images/collection_3.png';
import collection_4 from '../../../../public/images/collection_4.png';
import collection_5 from '../../../../public/images/collection_5.png';

import './index.scss';

const Search_2 = () => {
    const listSearch = [
        {name: 'Biệt thự', image: collection_1,seo: 'biet-thu'},
        {name: 'Nhà vườn', image: collection_2,seo: 'biet-thu'},
        {name: 'Nhà phố', image: collection_3,seo: 'biet-thu'},
        {name: 'Chung cư', image: collection_4,seo: 'biet-thu'},
        {name: 'Căn hộ', image: collection_5,seo: 'biet-thu'}
    ];

    return (
        <>
            <Stack sx={{mt: 4}} direction="row" justifyContent="center">
                {
                    listSearch.map((obj, index) => {
                        const img = '../../../public/images/collection_'+(index+1)+'.png';
                        return (
                            <Link to={`/danh-muc/${obj?.seo}`} className="_1-search-advanced">
                                <Box className="thumbnail">
                                    <img src={obj.image} alt="" />
                                </Box>
                                <Typography sx={{textDecoration: "none"}} className="typography" variant="p">{obj.name}</Typography>
                            </Link>
                        )
                    })
                }
            </Stack>
        </>
    )
}

export default Search_2