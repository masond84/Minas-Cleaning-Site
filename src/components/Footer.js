import React from 'react'
import { Box, Container, Grid, Typography, TextField, Button, Divider, Link, IconButton } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <Box component="footer" sx={{ bgcolor: '#FCFCFC', py: 6, mt: 8, borderTop: '1px solid #f5f5f5' }}>
            <Container maxWidth="lg">
                <Grid container spacing={4}>
                    {/* Newsletter Signup */}
                    <Grid item xs={12} md={6}>
                        <Typography variant='h6' gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 600}}>
                            Sign up for our Newsletter
                        </Typography>
                        <Typography varient="body1" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 400}}>
                            Recieve helpful cleaning tips, discount codes & subscriber exclusives.
                        </Typography>
                        <Box component="form" sx={{ mt: 2, display: 'flex', alignItems: 'center'}}>
                            <TextField
                                variant="outlined"
                                size="small"
                                placeholder="Your email"
                                sx={{ 
                                    mr: 2, 
                                    flex: 1,
                                    '& .MuiOutlinedInput-root': {
                                        '& fieldset': {
                                        borderColor: '#000000',
                                        },
                                        '&:hover fieldset': {
                                        borderColor: '#000000',
                                        },
                                        '&.Mui-focused fieldset': {
                                        borderColor: '#22C3BD',
                                        },
                                    }, 
                                }}
                            />
                            <Button 
                                variant="contained" 
                                color="primary" 
                                type="submit" 
                                sx={{ bgcolor: '#22C3BD',
                                    '&:hover': {
                                        bgcolor: '#22C3BD',
                                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    },
                                }}>
                                SUBMIT
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 4 }} />
                {/* Contact Information */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={4}>
                        <Typography variant="body1" py={1}>
                            <Link href="mailto:JustLikeMommaCleans@gmail.com" color="inherit" sx={{ textDecoration: "none", fontFamily: "Montserrat", fontWeight: '600', fontSize: 'small'}}>
                                JustLikeMommaCleans@gmail.com
                            </Link>
                        </Typography>
                        <Typography variant="body1" py={1}>
                            <Link href="tel:2043819311" color="inherit" sx={{ textDecoration: "none", fontFamily: "Montserrat", fontWeight: '600',  fontSize: 'small'}}>
                                401.834.5778
                            </Link>
                        </Typography>
                        <Typography variant="body1" py={1} sx={{ textDecoration: "none", fontFamily: "Montserrat", fontWeight: '600',  fontSize: 'small'}}>
                            Central Falls, United States, Rhode Island
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <IconButton
                                href="https://www.facebook.com/minascleaningservicesllc/"
                                title="Facebook"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                            >
                                <FontAwesomeIcon icon={faFacebook} size="lg" />
                            </IconButton>
                            <IconButton
                                href="https://www.instagram.com/minascleaningservices/?hl=en"
                                title="Instagram"
                                target="_blank"
                                rel="noopener noreferrer"
                                color="inherit"
                            >
                                <FontAwesomeIcon icon={faInstagram} size="lg" />
                            </IconButton>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4} textAlign={{ xs: 'center', md: 'right' }}>
                        <Link href="#" color="inherit" sx={{ textDecoration: "none", fontFamily: "Montserrat", fontWeight: '600',  fontSize: 'small'}}>
                            Get In Touch
                        </Link>
                        <br />
                        <Link href="#" color="inherit" py={1} sx={{ textDecoration: "none", fontFamily: "Montserrat", fontWeight: '600',  fontSize: 'small'}}>
                            Work With Minas'
                        </Link>
                        <br />
                        <Link href="#" color="inherit" sx={{ textDecoration: "none", fontFamily: "Montserrat", fontWeight: '600',  fontSize: 'small'}}>
                            Terms & Conditions
                        </Link>
                    </Grid>
                </Grid>
                <Typography variant="body2" color="textSecondary" align="center" sx={{ }}>
                © 2024 Luxe Cleaning Co. All rights reserved.
                </Typography>
            </Container>
        </Box>
    )
}

export default Footer;