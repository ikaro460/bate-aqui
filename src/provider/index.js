import { DarkModeProvider } from "./DarkMode"
import { SideBarProvider } from "./SideBar"
import { UsersProvider } from "./Users"
import { GroupsProvider } from "./Groups"
export const Providers = ({children}) => {

  return(
    <DarkModeProvider>
      <SideBarProvider>
        <UsersProvider>
          <GroupsProvider>
            {children}
          </GroupsProvider>        
        </UsersProvider>        
      </SideBarProvider>
    </DarkModeProvider>
  )

}