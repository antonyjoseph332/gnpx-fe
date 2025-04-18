import { Box, Container, Grid, IconButton, Link, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function Footer() {
    return (
        <Box component="footer" sx={{
            backgroundColor: 'var(--neutral-white)',
            color: 'var(--text-primary)',
            py: 3,
            borderBottom: 15,
            borderColor: 'var(--primary-main)'
        }}>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Grid width={1}>
                        <Typography variant="h6" gutterBottom>
                            Follow Us
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                            <IconButton
                                href="#"
                                color="inherit"
                                aria-label="Instagram"
                                sx={{ '&:hover': { color: 'var(--primary-main)' } }}
                            >
                                <InstagramIcon />
                            </IconButton>
                            <IconButton
                                href="#"
                                color="inherit"
                                aria-label="LinkedIn"
                                sx={{ '&:hover': { color: 'var(--primary-main)' } }}
                            >
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton
                                href="#"
                                color="inherit"
                                aria-label="WhatsApp"
                                sx={{ '&:hover': { color: 'var(--primary-main)' } }}
                            >
                                <WhatsAppIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid width={1}>
                        <Typography variant="h6" gutterBottom>
                            Address
                        </Typography>
                        <Typography variant="body2">
                            Sector 10A, Gurugram<br />
                            122001
                        </Typography>
                    </Grid>
                    <Grid width={1}>
                        <Typography variant="h6" gutterBottom>
                            Contact
                        </Typography>
                        <Link href="mailto:business@example.com" color="inherit" display="block">
                            business@example.com
                        </Link>
                        <Link href="tel:+919354141488" color="inherit">
                            +91 935414 1488
                        </Link>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}