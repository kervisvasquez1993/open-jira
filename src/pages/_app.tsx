import '@/styles/globals.css'
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import type { AppProps } from 'next/app'
import { EntriesProvider } from '../../context/entries'
import { lightTheme, darkTheme } from "../../themes"
import { UIProvider } from '../../context/ui'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <EntriesProvider>
      <UIProvider>

        <ThemeProvider theme={lightTheme}>
          <CssBaseline />

          <Component {...pageProps} />

        </ThemeProvider>
      </UIProvider>
    </EntriesProvider>
  )
}
