import { Box } from "@mui/material";
import BgTriangle from './../assets/bg-triangle.svg';
import PaperIcon from './../assets/icon-paper.svg';
import ScissorsIcon from './../assets/icon-scissors.svg';
import RockIcon from './../assets/icon-rock.svg';

interface gameProps{
  onClick:()=>void
}
function GameArea(props:gameProps){

return <>
  <Box className="triangle-container" >
     <img src={BgTriangle} alt="trianglebg" className="triangle-outline"/>
     <Box className="icon paper" onClick={props.onClick}>
      <img src={PaperIcon} alt="paper"/>
     </Box>
     <Box className="icon scissor" onClick={props.onClick}>
      <img src={ScissorsIcon} alt="scissor"/>
     </Box>
     <Box className="icon rock" onClick={props.onClick}>
      <img src={RockIcon} alt="rock"/>
     </Box>
  </Box>
</>
}

export default GameArea;