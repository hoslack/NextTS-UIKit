import { Box, Center, Input, Text } from '@chakra-ui/react'

type LoginPageProps = {}
const LoginPage: React.FC<LoginPageProps> = () => (
  <Center w="100%" h="100%" mt={20}>
    <Box w="70%" align="center">
      <Text>Log In</Text>
      <Input variant="flushed" placeholder="Email" />
      <Input variant="flushed" placeholder="Password" />
    </Box>
  </Center>
)

export default LoginPage
