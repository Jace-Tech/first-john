import { Button, ButtonProps, Fade, SxProps } from '@mui/material'
import React from 'react'
import { WHATSAPP_LINK } from '../utils'
import { GRAY, ORANGE, WHITE } from '../utils/colors'

interface CustomButtonProps extends ButtonProps {
  style?: SxProps | any
}

const CustomButton: React.FC<CustomButtonProps> = ({ style, ...props }) => {
  return (
    <Fade in timeout={1000}>
      <Button
        size={"large"}
        variant={"contained"}
        onClick={() => window.open(WHATSAPP_LINK, "_blank")}
        sx={{
          color: GRAY, bgcolor: WHITE,
          fontWeight: 600,
          fontSize: "1rem",
          px: 4,
          py: 1.5,
          transition: "all .5s ease !important",
          "&:hover": {
            bgcolor: ORANGE,
            color: WHITE
          },
          ...style
        }}
       {...props}
      >
        Contact Me
      </Button>
    </Fade>
  )
}

export default CustomButton