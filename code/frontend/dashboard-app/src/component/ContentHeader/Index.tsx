import * as React from 'react';
import "./Index.css";
import { Button, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchIcon from '@mui/icons-material/Search';


function ContentHeader() {

    return (
        <div className="ContentHeaderContainer">
            <Button variant="outlined" className="search-button-wrapper" startIcon={<SearchIcon />}>
                How can I assist you today?
            </Button>
            <IconButton className="icon-button-outline">
                <GitHubIcon />
            </IconButton>
            <IconButton className="icon-button-outline">
                <NotificationsNoneOutlinedIcon />
            </IconButton>
            <IconButton className="icon-button-outline">
                <SettingsIcon />
            </IconButton>
        </div>
    );
}

export default ContentHeader;