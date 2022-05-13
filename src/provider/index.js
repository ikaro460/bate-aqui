import { DarkModeProvider } from "./DarkMode"
import { SideBarProvider } from "./SideBar"
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup"


export const Providers = ({children}) => {

  return(
    <DarkModeProvider>
      <SideBarProvider>
        <OpenModalCreateGroupProvider>
          {children}
        </OpenModalCreateGroupProvider>
      </SideBarProvider>
    </DarkModeProvider>
  )

}