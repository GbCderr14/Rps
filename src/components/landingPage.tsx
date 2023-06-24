
import { Box } from '@mui/material';
import Header from './header/header';
import GameArea from './GameArea';
function LandingPage(){
    return <>
    <Box style={{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center"}}>
      <Box style={{height:"6vh"}}></Box>
      <Header/>
    </Box>
    <Box style={{height:"12vh"}}></Box>
    <Box style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>
      <Box>
      <GameArea />
      </Box>
    </Box>
    </>
}

export default LandingPage;