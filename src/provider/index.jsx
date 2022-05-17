import { DarkModeProvider } from "./DarkMode";
import { SideBarProvider } from "./SideBar";
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup";
import {OpenModalNotificationProvider } from "../provider/OpenModalNotification"
import { UsersProvider } from "./Users";
import { OwnerGroupsProvider } from "./OwnerGroups";
import { HourProvider } from "./Hour";
export const Providers = ({ children }) => {
    return (
        <DarkModeProvider>
            <SideBarProvider>
                <OpenModalCreateGroupProvider>
                    <OpenModalNotificationProvider>                    
                        <UsersProvider>
                            <OwnerGroupsProvider>
                                <HourProvider>{children}</HourProvider>
                            </OwnerGroupsProvider>
                        </UsersProvider>
                    </OpenModalNotificationProvider>
                </OpenModalCreateGroupProvider>
            </SideBarProvider>
        </DarkModeProvider>
    );
};
