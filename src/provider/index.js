import { DarkModeProvider } from "./DarkMode"
import { SideBarProvider } from "./SideBar"
import { UsersProvider } from "./Users"

export const Providers = ({children}) => {

  return(
    <DarkModeProvider>
      <SideBarProvider>
        <UsersProvider>
          {children}
        </UsersProvider>        
      </SideBarProvider>
    </DarkModeProvider>
  )

}