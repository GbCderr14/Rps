import { Box, Button, Grid, Typography } from "@mui/material";
import RockIcon from './../assets/icon-rock.svg';
import PaperIcon from './../assets/icon-paper.svg';
import ScissorIcon from './../assets/icon-scissors.svg'
import {  selected } from "./atoms";
import {  useRecoilValue} from "recoil";
import { useEffect, useState } from "react";
interface resultProps {
    onClick: () => void
    whoWon: string,
}
function ResultArea(props: resultProps) {
    const [displayText, setDisplayText] = useState('');
    const Select = useRecoilValue(selected);
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const [whoWon, setWhoWon] = useState('');
    const obj: { [key: number]: string } = {
        1: 'paper',
        2: 'scissors',
        3: 'rock',
    }
    useEffect(() => {
        const scoreElement = document.getElementById('score');
        if (obj[randomNumber] === Select) {
            setDisplayText("Match Draw !!");
            setWhoWon('draw');
        } else if (
            (obj[randomNumber] === 'paper' && Select === 'rock') ||
            (obj[randomNumber] === 'scissors' && Select === 'paper') ||
            (obj[randomNumber] === 'rock' && Select === 'scissors')
        ) {
            if (scoreElement) {
                const currentScore = parseInt(scoreElement.innerText);
                scoreElement.innerText = (currentScore - 1).toString(); // Increment the score
            }
            setDisplayText('You lost :(');
            setWhoWon('computer');
        } else {
            setDisplayText('You won :)');
            setWhoWon('player');
            if (scoreElement) {
                const currentScore = parseInt(scoreElement.innerText);
                scoreElement.innerText = (currentScore + 1).toString(); // Increment the score
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <>
        <Grid container>
            <Grid item lg={3.25} md={3.25} sm={3.25} xs={12}>
                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Typography style={{ fontFamily: "Barlow semi condensed", fontWeight: "bold", letterSpacing: 2, color: "white", fontSize: "24px" }}>YOU PICKED</Typography>
                    <Box style={{ height: "4vh" }}></Box>
                    {Select === 'paper' &&
                        <img src={PaperIcon} alt="paper" className="icon-result paper-result" />
                    }
                    {Select === 'scissors' &&
                        <img src={ScissorIcon} alt="scissor" className="icon-result scissors-result" />
                    }
                    {Select === 'rock' &&
                        <img src={RockIcon} alt="rock" className="icon-result rock-result" />
                    }
                    {(whoWon === 'player' || whoWon === 'draw'
                    ) && <div className="wave-effect"></div>}
                </Box>
            </Grid>
            <Grid item lg={0.25} md={0.25} sm={0.25} xs={12} style={{ height: "8vh" }} />
            <Grid item lg={4} md={4} sm={4} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography style={{ fontFamily: "Barlow semi condensed", fontWeight: "bold", color: "white", fontSize: "32px" }}>{displayText}</Typography>

                <Box style={{ height: "4vh" }}></Box>
                <Button onClick={props.onClick} style={{ backgroundColor: "white", color: "indigo", width: "70%", height: "30%", fontWeight: "bold", fontSize: "18px" }}>
                    Play Again
                </Button>
            </Grid>
            <Grid item lg={0.25} md={0.25} sm={0.25} xs={12} style={{ height: "8vh" }} />
            <Grid item lg={4.25} md={4.25} sm={4.25} xs={12}>
                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Typography style={{ fontFamily: "Barlow semi condensed", fontWeight: "bold", letterSpacing: 2, color: "white", fontSize: "24px" }}>THE HOUSE PICKED</Typography>
                    <Box style={{ height: "4vh" }}></Box>
                    {randomNumber === 1 &&
                        <img src={PaperIcon} alt="paper" className="icon-result paper-result" />
                    }
                    {randomNumber === 2 &&
                        <img src={ScissorIcon} alt="scissor" className="icon-result scissors-result" />
                    }
                    {randomNumber === 3 &&
                        <img src={RockIcon} alt="rock" className="icon-result rock-result" />
                    }
                    {(whoWon === 'computer' || whoWon === 'draw'
                    ) && <div className="wave-effect"></div>}
                </Box>
            </Grid>
        </Grid>
        <Box style={{ height: "100px" }} />
    </>
}

export default ResultArea;