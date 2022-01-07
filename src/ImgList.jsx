import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { TrackerList } from './TrackerList';

const ImgList= (props) => {
    return (
        <ImageList sx={{ width: "100%", height: "50vh",padding:3 }}>
            {props.itemData.map((item) => (
                <ImageListItem key={item.img}>
                    <img
                        src={`${item.img}?w="50%"&fit=crop&auto=format`}
                        srcSet={`${item.img}?w="50%"&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                    />
                    <ImageListItemBar
                        title={item.title}
                        
                        position="below"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

// const itemData = ;

export default ImgList;