import { Box, Container, Link, Stack, Typography } from '@mui/material'
import React from 'react'
import { WHITE } from '../utils/colors'

interface FooterProps { }

const Footer: React.FC<FooterProps> = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <Box py={5}>
      <Container>
          <Stack spacing={1} justifyContent={"center"} alignItems={"center"} color={WHITE}>
            <Typography fontSize={".9rem"} fontFamily={"Nunito Sans, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}>Copywrite @{year} First-John Electricals</Typography>
            <Typography fontSize={".9rem"} fontFamily={"Nunito Sans, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}>
              Made with ❤️ by <Link href="" target={"_blank"}>JACE</Link>
            </Typography>
          </Stack>
      </Container>
    </Box>
  )
}

export default Footer