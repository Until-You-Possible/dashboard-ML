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
    route?: string,
    index: number,
    icon: ReactElement,
    isCollapse?: boolean,
    collapse: Array<any>
}

export  default function MenuSet() {

    let navigate = useNavigate();

    const [selectedMenuIndex, setSelectedMenuIndex] = React.useState<number>(0);

    const menuArray: menuItemType[] = [
        {
            name: "Overview",
            index: 0,
            icon: <ArticleIcon style={{color: "#007FFF"}} fontSize="small" />,
            collapse: [
                {
                    name: "What is the AI?",
                    route: "/what_is_the_ai",
                    icon: <PsychologyIcon style={{color: "#007FFF"}} fontSize="small" />,
                },
                {
                    name: "What is the ML?",
                    route: "/what_is_the_ml",
                    icon: <PsychologyAltIcon style={{color: "#007FFF"}} fontSize="small" />,
                }
            ]
        },
        {
            name: "Get Started",
            index: 1,
            icon: <ContentCopy style={{color: "#007FFF"}} fontSize="small" />,
            collapse: [
                {
                    route: "/how_to_start",
                    name: "How to start",
                    icon: <PsychologyAltIcon style={{color: "#007FFF"}} fontSize="small" />,
                },
                {
                    route: "/iris_data",
                    name: "Iris data",
                    icon: <PsychologyAltIcon style={{color: "#007FFF"}} fontSize="small" />,
                }
            ]
        }
    ]

    // navTo current route
    const navToLink = (innerItem: any, innerIndex: number) => {
        navigate(innerItem.route);
        setSelectedMenuIndex(innerIndex)
    }

    const [menuArrayState, setMenuArrayState] = React.useState<menuItemType[]>(menuArray)

    const handleClickItem = (item: menuItemType) => {
        const newMenuArray = menuArrayState.map(inItem => {
            if (item.name === inItem.name) {
                item.isCollapse = !item.isCollapse;
            }
            return inItem;
        });
        setMenuArrayState(newMenuArray);
    };

    const showCorrectArrow = (item: menuItemType) => {
        if (item.isCollapse) {
            return <KeyboardArrowDownIcon style={{color: "#007FFF"}} fontSize="small"/>
        } else {
            return <KeyboardArrowRightIcon style={{color: "#007FFF"}} fontSize="small"/>
        }
    }


    const renderCollapse = (item: menuItemType) => {
        return <>
            <Collapse in={item.isCollapse} timeout="auto" unmountOnExit>
                <div>{item.isCollapse}</div>
                <List  component="div" disablePadding>
                    {
                        item.collapse.map((innerItem, innerIndex) => {
                            return (
                                <ListItemButton onClick={() => navToLink(innerItem, innerIndex)}
                                                selected={selectedMenuIndex === innerIndex}
                                                key={innerIndex} sx={{ pl: 4 }}>
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
                        menuArrayState.map((item, index) => {
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
                                    <div>{item.isCollapse}</div>
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