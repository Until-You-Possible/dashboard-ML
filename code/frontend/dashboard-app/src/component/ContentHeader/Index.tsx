import * as React from 'react';
import "./Index.css";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Profile from "./SubComponent/Profile/Index";
import LanguageSwitch from "./SubComponent/Language/Index";
import Notification from "./SubComponent/Notification/Index";
import {useEffect, useRef} from "react";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function ContentHeader() {

    return (
        <div className="ContentHeaderContainer">
            134t
            {/*<Box  sx={{ flexGrow: 1, height: '64px', overflow: 'hidden'  }}>*/}
            {/*    <Grid sx={{paddingLeft: '40px', paddingRight: '40px'}}  container spacing={0}>*/}
            {/*        <Grid sx={{display: 'flex', alignItems: 'center'}} item xs={8}>*/}
            {/*            <Item sx={{ boxShadow: 'none', textAlign: 'left' }}>*/}
            {/*                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">*/}
            {/*                    <SearchIcon />*/}
            {/*                </IconButton>*/}
            {/*                <InputBase*/}
            {/*                    sx={{ ml: 1, flex: 1 }}*/}
            {/*                    placeholder="How can I assist you?"*/}
            {/*                    inputProps={{ 'aria-label': 'How can I assist you' }}*/}
            {/*                />*/}
            {/*            </Item>*/}
            {/*        </Grid>*/}
            {/*        <Grid item xs={4}>*/}
            {/*            <Item sx={{ boxShadow: 'none', textAlign: 'right' }}>*/}
            {/*                <Box display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center">*/}
            {/*                    <LanguageSwitch />*/}
            {/*                    <Notification />*/}
            {/*                    <Profile />*/}
            {/*                </Box>*/}
            {/*            </Item>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Box>*/}

        </div>
    );
}

export default ContentHeader;