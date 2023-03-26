import * as React from "react";
import "./Index.css"
import { Divider, ListItemIcon, ListItemText, MenuItem, MenuList } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { ReactElement } from "react";


interface menuItemType {
    name: string,
    route: string,
    icon: ReactElement
}

export  default function MenuSet() {

    let navigate = useNavigate();

    const menuArray: menuItemType[] = [
        {
            name: "Overview",
            route: "/overview",
            icon: <ArticleIcon style={{color: "#007FFF"}} fontSize="small" />
        },
        {
            name: "What's ML?",
            route: "/ml",
            icon: <ContentCopy style={{color: "#007FFF"}} fontSize="small" />
        }
    ]

    // navTo current route
    const navTo = (item: string) => {
        navigate(item);
    }


    return (
        <div className="paperMenuContainer">

            <div className="title-wrapper">
                MACHINE LEARNING
            </div>
            <Divider light />
            <div className="menu-wrapper">

                <MenuList>

                    {
                        menuArray.map((item, index) => {
                            return (
                                <MenuItem onClick={() => navTo(item.route)} key={index}>
                                    <ListItemIcon>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText >{item.name}</ListItemText>
                                    <KeyboardArrowRightIcon style={{color: "#007FFF"}} fontSize="small" />
                                </MenuItem>
                            )
                        })
                    }

                </MenuList>
            </div>
        </div>
    )
}