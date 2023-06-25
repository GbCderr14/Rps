import { Box, Button, Grid, Typography } from "@mui/material";
import RockIcon from './../assets/icon-rock.svg';
import PaperIcon from './../assets/icon-paper.svg';
interface resultProps {
    onClick: () => void
}
function ResultArea(props: resultProps) {
    return <>
        <Grid container>
            <Grid item lg={3.25} md={3.25} sm={3.25} xs={12}>
                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Typography style={{ fontFamily: "Barlow semi condensed", fontWeight: "bold", letterSpacing: 2, color: "white", fontSize: "24px" }}>YOU PICKED</Typography>
                    <Box style={{ height: "4vh" }}></Box>
                    <img src={PaperIcon} alt="paper" className="icon-result paper-result wave" />
                    <div className="wave-effect"></div>
                </Box>
            </Grid>
            <Grid item lg={0.25} md={0.25} sm={0.25} xs={12} style={{height:"8vh"}}/>
            <Grid item lg={4} md={4} sm={4} xs={12} style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <Typography style={{ fontFamily: "Barlow semi condensed", fontWeight: "bold", color: "white", fontSize: "32px" }}>YOU WIN :)</Typography>
                <Box style={{ height: "4vh" }}></Box>
                <Button onClick={props.onClick} style={{ backgroundColor: "white", color: "indigo", width: "70%", height: "30%", fontWeight: "bold", fontSize: "18px" }}>
                    Play Again
                </Button>
            </Grid>
            <Grid item lg={0.25} md={0.25} sm={0.25} xs={12} style={{height:"8vh"}}/>
            <Grid item lg={4.25} md={4.25} sm={4.25} xs={12}>
                <Box style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                    <Typography style={{ fontFamily: "Barlow semi condensed", fontWeight: "bold", letterSpacing: 2, color: "white", fontSize: "24px" }}>THE HOUSE PICKED</Typography>
                    <Box style={{ height: "4vh" }}></Box>
                    <img src={RockIcon} alt="rock" className="icon-result rock-result" />
                </Box>
            </Grid>

        </Grid>
        <Box style={{height:"100px"}}/>
    </>
}

export default ResultArea;