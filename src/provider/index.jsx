import { DarkModeProvider } from "./DarkMode";
import { SideBarProvider } from "./SideBar";
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup";
import {OpenModalNotificationProvider } from "../provider/OpenModalNotification"
import { UsersProvider } from "./Users";
import { OwnerGroupsProvider } from "./OwnerGroups";
import { HourProvider } from "./Hour";
import { CoachGroupsProvider } from './CoachGroups'
export const Providers = ({ children }) => {
    return (
        <DarkModeProvider>
            <SideBarProvider>
                <OpenModalCreateGroupProvider>
                    <OpenModalNotificationProvider> 
                        <CoachGroupsProvider>                                       
                            <UsersProvider>
                                <OwnerGroupsProvider>
                                    <HourProvider>{children}</HourProvider>
                                </OwnerGroupsProvider>
                            </UsersProvider>
                        </CoachGroupsProvider>  
                    </OpenModalNotificationProvider>
                </OpenModalCreateGroupProvider>
            </SideBarProvider>
        </DarkModeProvider>
    );
};
