import { Box, Button, Grid } from '@mui/material';
import Header from './header/header';
import GameArea from './GameArea';
import ResultArea from './resultArea';
import { useState } from 'react';
function LandingPage() {

  const [gameTodisplay,setGameToDisplay]=useState(true);
  const handleClick=()=>{
    setGameToDisplay(!gameTodisplay);
  }
  return <>
    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
      <Box style={{ height: "3vh" }}></Box>
      <Header />
    </Box>
    <Box style={{ height: "120px" }}></Box>
    <Grid container>
      <Grid item sm={3} xs={3} lg={3} md={3} />
      <Grid item sm={6} xs={6} lg={6} md={6} style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
        <Box style={{ width: "12px" }} />
        {gameTodisplay&&
        <Box>
          <GameArea onClick={handleClick}/>
        </Box>}
        <Box style={{ width: "12px" }} />
      </Grid>
      <Grid item sm={3} xs={3} lg={3} md={3} />
    </Grid>
    {!gameTodisplay &&
    <Box style={{width:"80%",margin:"auto"}}>
      <ResultArea onClick={handleClick}/>
    </Box>}
    <Box style={{ height: "120px" }}></Box>
    <Grid container>
      <Grid item sm={12} xs={12} lg={11} md={11} />
      <Grid item sm={12} xs={12} lg={1} md={1} style={{ textAlign: "center" }}>
        <Button style={{ border: "1px solid white", textTransform: "none", color: "white" }}>
          Rules
        </Button>
      </Grid>
    </Grid>
  </>
}

export default LandingPage;