import React from 'react';
import { Box, Heading, Image, Container, Stack, Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.png';

const headingOptions = {    // object that have properties that will be passed
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',
};

const Home = () => {
  return (
    <Box>
      <MyCarousel />
      <Container maxW={'container.xl'} minH={'100vh'} p="16">
        <Heading
          textTransform={'uppercase'}
          py={'2'}
          m={'auto'}
          width={'fit-content'}
          borderBottom={'2px solid'}>
          Services
        </Heading>

        <Stack
          height={'full'}
          p={'4'}
          alignItems={'center'}
          direction={['column', 'row']} // responsive first for phone second for big screen
        >
          <Image src={img5} h={('40', '400')} filter={'hue-rotate(130deg)'} />

          <Text
            letterSpacing={'widest'}
            lineHeight={'190%'}
            p={['4', '16']}
            textAlign={'center'}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            officiis neque ea tempore enim odit quisquam sunt nulla, ex maiores
            voluptatem, tempora a placeat officia consectetur nam temporibus.
            Omnis consequuntur quae repelluo perspiciatis ab eriam sint optio
            alias earum iure nisi dolorem. Officiis ex maiores, modi harum rem
            non doloribus nostrum adipisci perspiciatis culpa dolore fuga
            dolores quod exercitationem ratione nam tempora qui delectus magnam
            eos cupiditate omnis sequi. Minus porro saepe et harum consequuntur,
            ut magnam accusamus repellendus soluta!
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={2000}
    showStatus={false}
    showThumbs={false}
    showArrows={false}
  >
    <Box w="full" h={'100vh'}>
      <Image src={img1} />
      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Watch The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img2} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming is the new future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img3} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming On-Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'}>
      <Image src={img4} />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        The 3d Moon
      </Heading>
    </Box>
  </Carousel>
);

export default Home;
