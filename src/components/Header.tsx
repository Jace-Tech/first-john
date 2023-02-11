import { Box, Container, Link, Stack } from '@mui/material'
import React from 'react'
import { RxExternalLink } from "react-icons/rx"
import { WHATSAPP_LINK } from '../utils'
import { GRAY, WHITE } from '../utils/colors'


interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
  return (
    <Box
      py={3} position={"sticky"}
      top={0} left={0}
      sx={{ backdropFilter: "blur(4px)" }}
      zIndex={100}
    >
      <Container maxWidth={"lg"}>
        <Stack direction={"row"} color={WHITE} alignItems={"center"} justifyContent={"space-between"}>

          <Link
            sx={{ textDecoration: "none" }}
            variant='button'
            href='/' fontSize={"1.4rem"}
            textTransform={"uppercase"}
            letterSpacing={2}
            color={WHITE} fontWeight={600}
          >
            FIRST JOHN
          </Link>




          <Stack direction={"row"} alignItems={"center"} spacing={1}>
            <Link
              target={"_blank"}
              href={WHATSAPP_LINK} fontSize={"1.4rem"}
              textTransform={"uppercase"}
              color={WHITE} fontWeight={600}
            >
              Contact
            </Link>

            <RxExternalLink fontSize={"1.4rem"} fontWeight={600} />
          </Stack>

        </Stack>
      </Container>
    </Box>
  )
}

export default Header