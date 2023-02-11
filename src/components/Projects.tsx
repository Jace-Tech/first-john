import { Box, Container, Stack, Typography } from '@mui/material'
import React, { useCallback, useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images';
import Gallery from 'react-photo-gallery';
import { WHITE } from '../utils/colors'
import { gallaries } from '../utils/data';

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [viewerIsOpen, setViewerIsOpen] = useState<boolean>(false);

  const openLightbox = useCallback((event: any, { photo, index }: { photo: string, index: number }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Box mt={10}>
      <Container>
        <Stack mb={5} spacing={2}>
          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Typography
              fontSize={"1.5rem"}
              textTransform={"uppercase"}
              letterSpacing={2}
              color={WHITE}
              fontWeight={600}
            >
              Projects
            </Typography>
          </div>

          <div data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            <Typography
              color={"#ccc"}
              fontFamily={"Nunito Sans, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"}
            >Here are some of my previous works</Typography>
          </div>
        </Stack>
        <Box>
          <Gallery
            photos={gallaries}
            onClick={openLightbox as any}
            margin={5}
          />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={gallaries.map((x) => ({
                    ...x,
                    srcset: x.src,
                    caption: ""
                  })) as any}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </Box>
      </Container>
    </Box>
  )
}

export default Projects