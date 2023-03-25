import * as React from "react";
import "./Index.css"
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { ContentCopy, ContentPaste} from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export  default function MenuSet() {
    return (
        <div className="paperMenuContainer">

            <div className="title-wrapper">
                MACHINE LEARNING
            </div>
            <Divider light />
            <div className="menu-wrapper">

                <MenuList>
                    <MenuItem>
                        <ListItemIcon>
                            <ArticleIcon style={{color: "#007FFF"}} fontSize="small" />
                        </ListItemIcon>
                        <ListItemText >Overview</ListItemText>
                        <KeyboardArrowRightIcon style={{color: "#007FFF"}} fontSize="small" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentCopy style={{color: "#007FFF"}} fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Machine Learning</ListItemText>
                        <KeyboardArrowRightIcon style={{color: "#007FFF"}} fontSize="small" />
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <ContentPaste style={{color: "#007FFF"}} fontSize="small" />
                        </ListItemIcon>
                        <ListItemText>Feature</ListItemText>
                        <KeyboardArrowRightIcon style={{color: "#007FFF"}} fontSize="small" />
                    </MenuItem>
                </MenuList>
            </div>
        </div>
    )
}