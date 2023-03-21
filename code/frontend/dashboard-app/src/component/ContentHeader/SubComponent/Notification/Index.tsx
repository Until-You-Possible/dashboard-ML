import * as React from 'react';
import { IconButton } from "@mui/material";
import NotificationsNoneSharpIcon from '@mui/icons-material/NotificationsNoneSharp';


function Notification() {
    return (
        <div className="NotificationContainer">
            <IconButton
                size="small"
                sx={{ ml: 2 }}
                aria-haspopup="true"
            >
                <NotificationsNoneSharpIcon sx={{ width: 20, height: 20 }} />
            </IconButton>
        </div>
    );
}

export default Notification;