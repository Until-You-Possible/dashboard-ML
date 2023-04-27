import * as React from "react";
import "./Index.css"
import { Collapse, Divider,
    List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { ReactElement } from "react";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DevicesFoldIcon from '@mui/icons-material/DevicesFold';


interface menuItemType {
    name: string,
    route?: string,
    icon: ReactElement,
    isCollapse?: boolean | undefined,
    collapse: Array<any>
}

interface selectedItemType {
    [key: string]: number
}

export  default function MenuSet() {

    let navigate = useNavigate();

    const [selectedMenuIndex, setSelectedMenuIndex] = React.useState<selectedItemType>({});

    const menuArray: menuItemType[] = [
        {
            name: "Overview",
            icon: <DashboardIcon style={{color: "#007FFF"}} fontSize="small" />,
            collapse: [
                {
                    name: "what is the AI?",
                    route: "/what_is_the_ai"
                },
                {
                    name: "what is the ML?",
                    route: "/what_is_the_ml"
                }
            ]
        },
        {
            name: "Get Started",
            icon: <DevicesFoldIcon style={{color: "#007FFF"}} fontSize="small" />,
            collapse: [
                {
                    route: "/how_to_start",
                    name: "how to start"
                },
                {
                    route: "/iris_data",
                    name: "iris data"
                }
            ]
        }
    ]

    // navTo current route
    const navToLink = (index: number, innerItem: any) => {
        navigate(innerItem.route);
        setSelectedMenuIndex({
            [innerItem.name]: index
        });
    }

    const [menuArrayState, setMenuArrayState] = React.useState<menuItemType[]>(menuArray)

    const handleClickItem = (item: menuItemType) => {
        const newMenuArray = menuArrayState.map(inItem => {
            return inItem.name === item.name ? { ...inItem, isCollapse: !inItem.isCollapse } : inItem;
        })
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
            <Collapse in={Boolean(item.isCollapse)} timeout="auto" unmountOnExit>
                <div>{item.isCollapse}</div>
                <List  component="div" disablePadding>
                    {
                        item.collapse.map((innerItem, innerIndex) => {
                            return (
                                <ListItemButton
                                    onClick={() => navToLink(innerIndex, innerItem)}
                                    selected={selectedMenuIndex[innerItem.name] === innerIndex}
                                    key={innerIndex} sx={{ pl: 4, height: '30px' }}>
                                    <ListItemIcon  sx={{minWidth: '26px'}}>
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
                                        <ListItemText className="mainMenuText">
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