import { useState } from 'react'
import { Flex, Text, useMediaQuery} from '@chakra-ui/react'
import AudioButton from './AudioButton';
import * as Tone from 'tone'
import './NoteSelect.css'

const NoteSelect = ({nt, fq, setNote, objNote, setFreq}) =>{
  const [wave, setWave] = useState('triangle');
  const [osc, setOsc] = useState(()=>new Tone.Oscillator(fq,wave));

  const [mh650, mw800] = useMediaQuery(['(max-height: 650px)', '(min-width: 800px)']);

  osc.frequency.value = fq;
  osc.type = wave;
  
  const WaveText = ({char, name, waveState, size}) =>{
    return(
      <Flex
      p='.5em'
      onClick={()=>setWave(name)}
      cursor='pointer'>
        <Text
        cursor='pointer'
        userSelect='none'
        fontSize= {size}
        m='0'
        color={name === waveState ? 'purple' : 'white'}>
          {char}
        </Text>
      </Flex>
    )
  }

    return(
      <>
        <Flex
        justify='center'
        align='center'
        gap='20px'
        mb={mw800 ? '5em' : 0}>
          <WaveText waveState={wave} name={'sine'} char={'∿'} size={'3.2em'}/>
          <WaveText waveState={wave} name={'square'} char={'⊓'} size={'2.5em'}/>
          <WaveText waveState={wave} name={'triangle'} char={'ᐱ'} size={'2.2em'}/>
          <WaveText waveState={wave} name={'sawtooth'} char={'N'} size={'2.2em'}/>
        </Flex>
      <Flex
      position='absolute'
      top='0%'
      w='100%'
      justify='flex-end'
      align='center'>
        <Text
        className='tap-mobile'
        color='white'
        cursor='pointer'
        fontSize='3em'
        my={0}
        mr='.2em'
        onClick={()=>{setNote(objNote);osc.toDestination().stop();}}>
          X
        </Text>
      </Flex>
        <Flex
        direction={mh650 ? 'row-reverse' : 'column'}
        justify='center'
        align='center'
        my='1em'
        gap='2em'>
            <Text
            className='tap-mobile'
            userSelect='none'
            color='white'
            fontSize={mh650? '2em' :'3em'}
            m='0'
            cursor='pointer'
            _active={{
              color:'red'
            }}
            onClick={()=>setFreq(fq*2)}>
            +8th
            </Text>
            <Text
            userSelect='none'
            color='white'
            m='0'
            fontSize='10em'>
            {nt}
            </Text>
            <Text
            m='0'
            className='tap-mobile'
            userSelect='none'
            color='white'
            fontSize={mh650? '2em' :'3em'}
            cursor='pointer'
            _active={{
              color:'blue'
            }}
            onClick={()=>setFreq(fq/2)}>
            -8th
            </Text>
        </Flex>
        <Flex
        mt={mw800 ? '5em' : '0'}
        justify='space-around'
        align='center'
        w='20em'
        fontFamily='2em'>
            <AudioButton char='▶' osc={osc}/>
            <AudioButton char='◼' osc={osc}/>
        </Flex>
      </>
    )
  }

  export default NoteSelect