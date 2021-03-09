import { Grid, GridItem } from '@chakra-ui/react'
import Head from 'next/head'
import * as React from 'react'

type LayoutProps = {
  PageComponent?: React.ReactNode
  title?: string
}

const Layout: React.FC<LayoutProps> = ({ title, PageComponent }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
    </Head>
    <Grid
      h="100vh"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
    >
      <GridItem
        colSpan={4}
        bg="brand.50"
        h="100vh"
        borderColor="red.200"
      >
        {PageComponent}
      </GridItem>
    </Grid>
  </div>
)

export default Layout

Layout.defaultProps = {
  title: 'Avane',
}
