import { Box } from '@chakra-ui/react'
import { useLottie } from 'lottie-react'
import * as React from 'react'
import LoaderJSON from '../../../public/lotties/loading.json'

type LoaderIndicatorProps = {
  width?: string
}
const LoadingIndicator: React.FC<LoaderIndicatorProps> = ({
  width,
}) => {
  const options = {
    animationData: LoaderJSON,
    loop: true,
    autoplay: true,
    style: {
      width,
    },
  }

  const { View } = useLottie(options)
  return <Box>{View}</Box>
}

export default LoadingIndicator

LoadingIndicator.defaultProps = {
  width: '50px',
}
