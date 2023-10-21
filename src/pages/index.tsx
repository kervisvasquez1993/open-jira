import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'
import { Layout } from '../../components/layouts'
import EntryList from '../../components/ui/EntryList'
import { NewEntry } from '../../components/ui'


const HomePage: NextPage = () => {
  return (
    <Layout title='homa page'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vw - 100px)" }}>
            <CardHeader title="Pendientes" ></CardHeader>
            <NewEntry/>
              <EntryList status='pending' />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vw - 100px)" }}>
            <CardHeader title="En Progreso" ></CardHeader>
           
              <EntryList status='in-progress' />
           
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: "calc(100vw - 100px)" }}>
            <CardHeader title="Completado" ></CardHeader>
           
              <EntryList status='finished' />
           
          </Card>
        </Grid>
      </Grid>
    </Layout>

  )
}

export default HomePage