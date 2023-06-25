import { Box, Button, Grid } from '@mui/material';
import Header from './header/header';
import GameArea from './GameArea';
import ResultArea from './resultArea';
import { useState } from 'react';
import Ruless from './rules';

function LandingPage() {
  const [showPopup, setShowPopup] = useState<boolean>(false);
    const handleClose = () => {
        setShowPopup(false);
    };
  const [gameTodisplay, setGameToDisplay] = useState(true);
  const handleClick = () => {
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
        {gameTodisplay &&
          <Box>
            <GameArea onClick={handleClick} />
          </Box>}
        <Box style={{ width: "12px" }} />
      </Grid>
      <Grid item sm={3} xs={3} lg={3} md={3} />
    </Grid>
    {!gameTodisplay &&
      <Box style={{ width: "80%", margin: "auto" }}>
        <ResultArea onClick={handleClick} whoWon='hous'/>
      </Box>}
    <Box style={{ height: "8px" }}></Box>
    <Grid container>
      <Grid item sm={12} xs={12} lg={11} md={11} />
      <Grid item sm={12} xs={12} lg={1} md={1} style={{ textAlign: "center" }}>
        <Button style={{ border: "1px solid white", textTransform: "none", color: "white" }} onClick={(()=>{setShowPopup(true)})}>
          Rules
        </Button>
      </Grid>
    </Grid>
    <Box style={{ height: "48px" }}></Box>
    {showPopup && (
      <Ruless onClose={handleClose} open={showPopup}/>
    )}
  </>
}

export default LandingPage;

