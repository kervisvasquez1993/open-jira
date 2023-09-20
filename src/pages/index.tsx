import { Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title='homa page'>
      <Typography variant='h1' color="primary">hola mundo</Typography>
    </Layout>

  )
}

export default HomePage