import * as React from "react";
import "./Index.css"
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import FunctionsIcon from '@mui/icons-material/Functions';
import CalculateIcon from '@mui/icons-material/Calculate';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export  default function MenuSet() {
    return (
        <Paper sx={{ width: 320, maxWidth: '100%', boxShadow: 'none' }}>
            <MenuList className="selfMenuListWrapper">
                <MenuItem
                    sx={{
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}
                    style={{ height: '80px' }}>
                    <ListItemText>MACHINE LEARNING</ListItemText>
                </MenuItem>

                <MenuItem style={{ height: '60px' }}>
                    <ListItemIcon>
                        <AccountBalanceIcon />
                    </ListItemIcon>
                    <ListItemText>Dashboard</ListItemText>
                    <ListItemIcon>
                        <KeyboardArrowRightIcon />
                    </ListItemIcon>
                </MenuItem>

                <MenuItem  style={{ height: '60px' }}>
                    <ListItemIcon>
                        <FunctionsIcon />
                    </ListItemIcon>
                    <ListItemText>Feature Engine</ListItemText>
                    <ListItemIcon>
                        <KeyboardArrowRightIcon />
                    </ListItemIcon>
                </MenuItem>

                <MenuItem  style={{ height: '60px' }}>
                    <ListItemIcon>
                        <CalculateIcon />
                    </ListItemIcon>
                    <ListItemText>Matlab Line</ListItemText>
                    <ListItemIcon>
                        <KeyboardArrowRightIcon />
                    </ListItemIcon>
                </MenuItem>

            </MenuList>
        </Paper>
    )
}