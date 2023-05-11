import {
    Avatar,
    Box,
    Card,
    CardHeader,
    IconButton,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    Checkbox,
} from '@mui/material'
import React from 'react';
import {Share, Favorite, MoreVert, FavoriteBorder} from '@mui/icons-material';
import Post from "./Post";

const Feed = () => {
    return (
        <Box bgcolor="pink" flex={4} p={2}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>

        </Box>
    )
}

export default Feed
