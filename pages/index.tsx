import { Flex, Text } from '@chakra-ui/react'
import Link from 'next/link'

type IntroductionPageProps = {}

const IntroductionPage: React.FC<IntroductionPageProps> = () => (
  <Flex>
    <Text>Home</Text>
    <Link href="/login">
      <a>Login</a>
    </Link>
  </Flex>
)

export default IntroductionPage
