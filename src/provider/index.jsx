import { DarkModeProvider } from "./DarkMode";
import { SideBarProvider } from "./SideBar";
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup";
import { OpenModalNotificationProvider } from "../provider/OpenModalNotification";
import { UsersProvider } from "./Users";
import { OwnerGroupsProvider } from "./OwnerGroups";
import { HourProvider } from "./Hour";
import { OpenModalAddUserProvider } from "./OpenModalAddUser";
import { OpenModalCheckoutProvider } from "./OpenModalCheckout";
import { CoachGroupsProvider } from "./CoachGroups";
import { OpenModalDeleteUserProvider } from "./OpenModalDeleteUser";
import { GroupUsersProvider } from "./GroupUsers";
import { CheckinProvider } from "./Checkin";


export const Providers = ({ children }) => {
  
  return (
    <DarkModeProvider>
      <SideBarProvider>
        <OpenModalCreateGroupProvider>
          <UsersProvider>
            <OwnerGroupsProvider>
              <OpenModalCheckoutProvider>
               <CheckinProvider>
                 <HourProvider>
                  <OpenModalNotificationProvider>
                    <OpenModalAddUserProvider>
                      <CoachGroupsProvider>
                        <OpenModalDeleteUserProvider>
                          <GroupUsersProvider>
                            {children}
                          </GroupUsersProvider>
                        </OpenModalDeleteUserProvider>
                       </CoachGroupsProvider>
                      </OpenModalAddUserProvider>
                    </OpenModalNotificationProvider>
                  </HourProvider>
                </CheckinProvider>
              </OpenModalCheckoutProvider>
            </OwnerGroupsProvider>
          </UsersProvider>
        </OpenModalCreateGroupProvider>
      </SideBarProvider>
    </DarkModeProvider>
  );
};
