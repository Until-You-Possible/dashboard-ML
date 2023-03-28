import * as React from "react";
import "./Index.css"
import { Collapse, Divider,
    List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ContentCopy } from "@mui/icons-material";
import ArticleIcon from '@mui/icons-material/Article';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { ReactElement } from "react";
import PsychologyIcon from '@mui/icons-material/Psychology';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


interface menuItemType {
    name: string,
    route: string,
    index: number,
    icon: ReactElement,
    collapse: Array<any>
}

export  default function MenuSet() {

    let navigate = useNavigate();

    const [selectedMenuIndex, setSelectedMenuIndex] = React.useState<number>(0);
    // const [currentCollapseName, setCurrentCollapseName] = React.useState<string>("");

    const menuArray: menuItemType[] = [
        {
            name: "Overview",
            route: "/overview",
            index: 0,
            icon: <ArticleIcon style={{color: "#007FFF"}} fontSize="small" />,
            collapse: [
                {
                    name: "what is the AI?",
                    route: "/what_is_the_ai",
                    icon: <PsychologyIcon style={{color: "#007FFF"}} fontSize="small" />,
                },
                {
                    name: "what is the ML?",
                    route: "/what_is_the_ml",
                    icon: <PsychologyAltIcon style={{color: "#007FFF"}} fontSize="small" />,
                }
            ]
        },
        {
            name: "What's ML?",
            route: "/ml",
            index: 1,
            icon: <ContentCopy style={{color: "#007FFF"}} fontSize="small" />,
            collapse: []
        }
    ]

    // navTo current route
    const navTo = (item: menuItemType) => {
        navigate(item.route);
        setSelectedMenuIndex(item.index)
    }

    const [openCollapse, setOpenCollapse] = React.useState<String>("");

    const handleClickItem = (item: menuItemType) => {
        if (openCollapse === item.name) {
            setOpenCollapse("")
        } else {
            setOpenCollapse(item.name);
        }
    };

    const showCorrectArrow = (item: menuItemType) => {
        if (openCollapse === item.name) {
            return <KeyboardArrowDownIcon style={{color: "#007FFF"}} fontSize="small"/>
        } else {
            return <KeyboardArrowRightIcon style={{color: "#007FFF"}} fontSize="small"/>
        }
    }


    const renderCollapse = (item: menuItemType) => {
        return <>
            <Collapse in={openCollapse === item.name} timeout="auto" unmountOnExit>
                <List  component="div" disablePadding>
                    {
                        item.collapse.map((innerItem, innerIndex) => {
                            return (
                                <ListItemButton key={innerIndex} sx={{ pl: 4 }}>
                                    <ListItemIcon  sx={{minWidth: '40px'}}>
                                        {innerItem.icon}
                                    </ListItemIcon>
                                    <ListItemText>
                                        {innerItem.name}
                                    </ListItemText>
                                </ListItemButton>
                            )
                        })
                    }
                </List>
            </Collapse>
        </>
    }


    return (
        <div className="paperMenuContainer">
            <div className="title-wrapper">
                MACHINE LEARNING
            </div>
            <Divider light />
            <div className="menu-wrapper">
                <List>
                    {
                        menuArray.map((item, index) => {
                            return (
                                <div key={index}>
                                    <ListItemButton
                                        onClick={()  => handleClickItem(item)}
                                    >
                                        <ListItemIcon sx={{minWidth: '40px'}}>
                                            {item.icon}
                                        </ListItemIcon>
                                        <ListItemText>
                                            {item.name}
                                        </ListItemText>
                                        {
                                            showCorrectArrow(item)
                                        }
                                    </ListItemButton>
                                    {
                                        item.collapse.length > 0 ? renderCollapse(item) : ""
                                    }
                                </div>

                            )
                        })
                    }
                </List>
            </div>
        </div>
    )
}