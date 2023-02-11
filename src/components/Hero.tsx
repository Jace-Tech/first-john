import { useTheme } from '@emotion/react'
import { Button, Container, Fade, Grid, Slide, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import light from "../assets/light.png"
import { GRAY, ORANGE, WHITE } from '../utils/colors'
import CustomButton from './CustomButton'

interface HeroProps { }

const Hero: React.FC<HeroProps> = () => {
  return (
    <Box py={5} minHeight={"75vh"}>
      <Container maxWidth="lg">
        <Grid container mt={5} spacing={{ xs: 10, md: 5 }}>
          <Grid item xs={12} sm={5} md={5}>
            <Stack spacing={5}>
              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <Typography
                  fontSize={{ xs: "3.5rem", sm: "4.3rem", lg: "4.8rem" }}
                  fontWeight={500}
                  color={WHITE}
                  letterSpacing={3}
                  lineHeight={1.3}
                >
                  <span style={{ color: ORANGE }}>FIRST</span> JOHN <br /> ELECTRICALS
                </Typography>
              </div>

              <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                <Typography color={WHITE} fontSize={"1.5rem"} maxWidth={400} fontFamily={"Nunito Sans, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}>
                  At <span style={{ color: ORANGE }}>FIRST-JOHN ELECTRICALS</span> your happiness is our pride
                </Typography>
              </div>

              <Box>
                <CustomButton />
              </Box>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={7} md={7}>
            <Box className={"light-box"}>
              <img className="light" src={light} alt="light-icon" />
            </Box>
          </Grid>
        </Grid>



      </Container>
    </Box>
  )
}

export default Hero