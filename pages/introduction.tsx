import { Box } from '@chakra-ui/react'
import Layout from '../components/Layout'

type IntroductionPageProps = {}
const SideBanner: React.FC = () => {
  return <Box bg="brand.700" h={200}></Box>
}
const IntroductionPage: React.FC<IntroductionPageProps> = () => (
  <Layout title="About | Avane" SideComponent={<SideBanner />} />
)

export default IntroductionPage
