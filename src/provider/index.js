import { DarkModeProvider } from "./DarkMode"
import { SideBarProvider } from "./SideBar"
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup"
import { UsersProvider } from "./Users"
import { OwnerGroupsProvider } from "./OwnerGroups"
export const Providers = ({children}) => {

  return(
    <DarkModeProvider>
      <SideBarProvider>
        <OpenModalCreateGroupProvider>
          <UsersProvider>
            <OwnerGroupsProvider>
              {children}
            </OwnerGroupsProvider>      
          </UsersProvider>   
        </OpenModalCreateGroupProvider>     
      </SideBarProvider>
    </DarkModeProvider>
  )

}