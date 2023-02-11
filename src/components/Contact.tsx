import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import { WHITE } from '../utils/colors'
import CustomButton from './CustomButton'

interface ContactProps { }

const Contact: React.FC<ContactProps> = () => {
  return (
    <Box py={5} mt={5}>
      <Container maxWidth={"lg"}>
        <Stack color={WHITE} spacing={4}>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Typography
              fontSize={"1.5rem"}
              textTransform={"uppercase"}
              letterSpacing={2}
              color={WHITE}
              fontWeight={600}
            >Want any of my services?</Typography>
          </div>
          <CustomButton style={{ width: "fit-content" }} />
        </Stack>
      </Container>
    </Box>
  )
}

export default Contact