import { Box } from "@mui/material";
import BgTriangle from './../assets/bg-triangle.svg';
import PaperIcon from './../assets/icon-paper.svg';
import ScissorsIcon from './../assets/icon-scissors.svg';
import RockIcon from './../assets/icon-rock.svg';
import { selected } from "./atoms";
import { useSetRecoilState } from "recoil";

interface GameProps {
  onClick: () => void;
}

function GameArea(props: GameProps) {
  const setWhoWasSelected=useSetRecoilState(selected);
  const handleBoxClick = (box: string) => {
    props.onClick();
    setWhoWasSelected(box);
  };

  return (
    <Box className="triangle-container">
      <img src={BgTriangle} alt="trianglebg" className="triangle-outline" />
      <Box className="icon paper" onClick={() => handleBoxClick("paper")}>
        <img src={PaperIcon} alt="paper" />
      </Box>
      <Box className="icon scissor" onClick={() => handleBoxClick("scissors")}>
        <img src={ScissorsIcon} alt="scissor" />
      </Box>
      <Box className="icon rock" onClick={() => handleBoxClick("rock")}>
        <img src={RockIcon} alt="rock" />
      </Box>
    </Box>
  );
}

export default GameArea;
