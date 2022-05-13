import { DarkModeProvider } from "./DarkMode"
import { SideBarProvider } from "./SideBar"
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup"
import { UsersProvider } from "./Users"

export const Providers = ({children}) => {

  return(
    <DarkModeProvider>
      <SideBarProvider>
        <OpenModalCreateGroupProvider>
          <UsersProvider>
            {children}
          </UsersProvider>   
        </OpenModalCreateGroupProvider>
      </SideBarProvider>
    </DarkModeProvider>
  )

}