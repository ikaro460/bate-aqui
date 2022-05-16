import { DarkModeProvider } from "./DarkMode";
import { SideBarProvider } from "./SideBar";
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup";
import { UsersProvider } from "./Users";
import { GroupsProvider } from "./Groups";
import { HourProvider } from "./Hour";
export const Providers = ({ children }) => {
    return (
        <DarkModeProvider>
            <SideBarProvider>
                <OpenModalCreateGroupProvider>
                    <UsersProvider>
                        <GroupsProvider>
                            <HourProvider>{children}</HourProvider>
                        </GroupsProvider>
                    </UsersProvider>
                </OpenModalCreateGroupProvider>
            </SideBarProvider>
        </DarkModeProvider>
    );
};
