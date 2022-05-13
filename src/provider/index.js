import { DarkModeProvider } from "./DarkMode"
import { SideBarProvider } from "./SideBar"
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup"
import { UsersProvider } from "./Users"
import { GroupsProvider } from "./Groups"
export const Providers = ({children}) => {

  return(
    <DarkModeProvider>
      <SideBarProvider>
        <OpenModalCreateGroupProvider>
          <UsersProvider>
            <GroupsProvider>
              {children}
            </GroupsProvider>      
          </UsersProvider>   
        </OpenModalCreateGroupProvider>     
      </SideBarProvider>
    </DarkModeProvider>
  )

}