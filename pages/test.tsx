import { Box, Center } from '@chakra-ui/react'
import { Table } from '../src/components'
import MOCK_DATA from '../src/components/MOCK_DATA.json'
import { sampleColumns } from '../src/components/Table/sampleColumns'

type LoginPageProps = {}
const LoginPage: React.FC<LoginPageProps> = () => (
  <Center w="100%" h="100%" mt={20}>
    <Box w="70%" align="center">
      <Table DATA={MOCK_DATA} COLUMNS={sampleColumns} />
    </Box>
  </Center>
)

export default LoginPage
