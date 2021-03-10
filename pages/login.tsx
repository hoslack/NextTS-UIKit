import { Box, Center, Input, Text } from '@chakra-ui/react'
import { Camera } from 'react-feather'
import { LoadingIndicator } from '../src/components'

type LoginPageProps = {}
const LoginPage: React.FC<LoginPageProps> = () => (
  <Center w="100%" h="100%" mt={20}>
    <Box w="70%" align="center">
      <Text>Log In</Text>
      <Camera color="red" size={20} />
      {/* <img src="images/graphic1.jpg" /> */}
      <LoadingIndicator />
      <Input variant="flushed" placeholder="Email" />
      <Input variant="flushed" placeholder="Password" />
    </Box>
  </Center>
)

export default LoginPage
