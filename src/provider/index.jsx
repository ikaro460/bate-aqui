import { DarkModeProvider } from "./DarkMode";
import { SideBarProvider } from "./SideBar";
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup";
import { UsersProvider } from "./Users";
import { OwnerGroupsProvider } from "./OwnerGroups";
import { HourProvider } from "./Hour";
import { OpenModalAddUserProvider } from "./OpenModalAddUser";
export const Providers = ({ children }) => {
  return (
    <DarkModeProvider>
      <SideBarProvider>
        <OpenModalAddUserProvider>
          <OpenModalCreateGroupProvider>
            <UsersProvider>
              <OwnerGroupsProvider>
                <HourProvider>{children}</HourProvider>
              </OwnerGroupsProvider>
            </UsersProvider>
          </OpenModalCreateGroupProvider>
        </OpenModalAddUserProvider>
      </SideBarProvider>
    </DarkModeProvider>
  );
};
