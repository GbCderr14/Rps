import { Box, Typography } from "@mui/material";
import Logo from './../../assets/logo.svg';

function Header() {

    return <>
        <Box style={{display:"flex", justifyContent:"space-between",flexWrap:"wrap",width:"60%",borderRadius:"12px",border:"3px solid white",padding:"16px", gap: "15px",alignItems:"center"}}>
            <Box component="span" style={{textAlign:"center"}}>
            <img src={Logo} alt="logo" style={{padding:"12px"}}/>
            </Box>
            <Box style={{backgroundColor:"white",textAlign:"center",borderRadius:"5px",padding:"10px 24px"}}>
                <Typography style={{fontFamily:"Barlow semi condensed", fontWeight:"bold",letterSpacing:2,color:"indigo"}}>SCORE</Typography>
                <Typography style={{fontFamily:"Barlow semi condensed",fontWeight:"bold",fontSize:48}}>12</Typography>
            </Box>
        </Box>
    </>
}

export default Header;