import React from 'react';
import projects from './data';
import BasicCard from './projectCards';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Logo from './Image/IDSlogo.png';
import Homegif from './Image/homegif.gif'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container >
                <Grid item xs={12}>
                    <Item sx={{ height: 50, background: "#e4e4f7",display:"flex", alignItems:"center" }}>
                        <img src={Logo} width={80} alt='Logo' />
                    </Item>
                </Grid>
                {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid> */}
                <Grid item xs={4}>
                    <Item sx={{boxShadow:"none", margin:1}} >
                        <img src={Homegif} alt='GIF' />
                    </Item>
                </Grid>
                <Grid item xs={8}>
                    <h4>COE Projects</h4>
                    <Item sx={{ display: "flex", flexWrap: "wrap", maxHeight: 450, overflowY: "scroll", border: "none", boxShadow: "none", justifyContent:"space-around" }} >
                        {
                            projects.map((project) => {
                                return (
                                    <BasicCard project={project} />

                                )

                            })
                        }

                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}