import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import * as Tone from 'tone'
import { motion } from 'framer-motion'

   const AudioButton = ({char, osc}) =>{

    const variants = {
      init: { scale: 1 },
      value: { scale: 0.95, transition:{duration:0.2}}

    }

    const handleClick = () =>{
        Tone.Master.volume.value = -15;
      if(char === '▶'){
        osc.toDestination().start();
      }
      else{
        osc.toDestination().stop();
      }
    }

    return(
        <Flex
        className='tap-mobile'
        as={motion.div}
        variants= {variants}
        whileTap= "value"
        userSelect='none'
        _active={{
          color:'gray'
        }}
        onClick={handleClick}
        justify='center'
        cursor='pointer'
        align='center'
        m='0'
        w='5em'
        h='3em'
        fontSize='2em'
        color='white'
        border='1px solid white'
        borderRadius='5px'
        mx='.5em'>
          <Text>
            {char}
          </Text>
      </Flex>
    )
  }

export default AudioButton