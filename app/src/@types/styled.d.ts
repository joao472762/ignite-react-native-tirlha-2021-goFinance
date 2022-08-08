import 'styled-components'
import { defaultTheme } from '../global/styles/theme'

type Theme  = typeof defaultTheme

declare module 'styled-components'{
    interface DefaultTheme extends Theme {}
}