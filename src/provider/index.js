import { DarkModeProvider } from "./DarkMode"


export const Providers = ({children}) => {

  return(
    <DarkModeProvider>
      {children}
    </DarkModeProvider>
  )

}