
import { Box, Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import Rules from './../assets/image-rules.svg';
import Cross from './../assets/icon-close.svg';
interface RulesProps{
    open:boolean,
    onClose:()=>void,
}
function Ruless(props:RulesProps) {
    const handleClose = () => props.onClose();

    return (
        <Dialog
            fullWidth={true}
            maxWidth={"xs"}
            open={props.open}
            onClose={handleClose}
            >
            <DialogTitle>
                <Box style={{float:"right"}}>
                <Button onClick={(()=>{props.onClose();})}>
                   <img src={Cross} alt="cross"/>
                   </Button>
                   </Box>
            </DialogTitle>
            <DialogContent>
                <img src={Rules} alt="ruless" width="100%" />
            </DialogContent>
        </Dialog>
    )
}

export default Ruless;
