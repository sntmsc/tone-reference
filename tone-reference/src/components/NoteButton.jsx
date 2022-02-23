import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import './NoteSelect/NoteSelect.css'

  const NoteButton = ({nt, fq, setNote}) => {

    const toggleClick = () =>{
      setNote({nt,fq})
    }
    return(
      <Flex
      className='tap-mobile'
      _active={{
        border:'2px solid gray'
      }}
      size='md'
      boxSize='5em'
      justify='center'
      align='center'
      border='2px solid white'
      bg='black'
      borderRadius='5%'
      cursor='pointer'
      onClick={toggleClick}
    >
      <Text
      userSelect='none'
      color='white'
      fontSize='3em'>
        {nt}
      </Text>
    </Flex>
    )
  }

export default NoteButton