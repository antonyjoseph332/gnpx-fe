import { FC } from "react";
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container } from '@mui/material';
import { Toolbar } from '@mui/material';

export const Topbar: FC = () => {
    return (
        <Toolbar>
            <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="h6" component="div">
                    GNPX
                </Typography>
                <Button variant="contained" >
                    Let's connect
                    <ArrowForwardIcon />
                </Button>
            </Container>
        </Toolbar>
    );
}