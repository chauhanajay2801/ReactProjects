import {
  Button,
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerBody,
  DrawerOverlay,
  Input,
  DrawerCloseButton,
  DrawerHeader,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { BiMenuAltLeft } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        pos={'fixed'}
        top={'4'}
        left={'4'}
        colorScheme="blue"
        p={'0'}
        w={'10'}
        h={'10'}
        borderRadius={'full'}
        onClick={onOpen}
      >
        <BiMenuAltLeft size={'20'} />
      </Button>

      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Video Star</DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'}>
              <Button colorScheme="blue" variant={'ghost'} onClick={onClose}>
                <Link to={'/'}>Home</Link>
              </Button>

              <Button colorScheme="blue" variant={'ghost'} onClick={onClose}>
                <Link to={'/videos'}>Videos</Link>
              </Button>

              <Button colorScheme="blue" variant={'ghost'} onClick={onClose}>
                <Link to={'/videos?category=free'}>Free Videos</Link>
              </Button>

              <Button colorScheme="blue" variant={'ghost'} onClick={onClose}>
                <Link to={'/upload'}>Upload Video</Link>
              </Button>
            </VStack>

            <HStack
              pos={'absolute'}
              bottom={'10'}
              left={'0'}
              width={'full'}
              justifyContent={'space-evenly'}
            >
              <Button colorScheme="blue" onClick={onClose}>
                <Link to = {'/login'}>Login</Link>
              </Button>

              <Button colorScheme="blue" variant={'outline'} onClick={onClose}>
                <Link to={'/signup'}>Sign Up</Link>
              </Button>
            </HStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Header;
