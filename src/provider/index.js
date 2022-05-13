import { DarkModeProvider } from "./DarkMode"
import { SideBarProvider } from "./SideBar"


export const Providers = ({children}) => {

  return(
    <DarkModeProvider>
      <SideBarProvider>
        {children}
      </SideBarProvider>
    </DarkModeProvider>
  )

}