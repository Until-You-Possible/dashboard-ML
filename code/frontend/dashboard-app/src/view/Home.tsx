import * as React from 'react';
import  "../css/menuSet.css"
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import MenuSet from '../component/menu/MenuSet';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
}));

function Home() {
    return (
        <div className="HomeContainer">
            <Grid container direction="row">
                <Grid className="menuListWrapper" xs={2} >
                    <Item>
                        <MenuSet />
                    </Item>
                </Grid>
                <Grid xs={10} minWidth={600}  >
                    <Item>content</Item>
                </Grid>
            </Grid>
        </div>
    );
}

export default Home;