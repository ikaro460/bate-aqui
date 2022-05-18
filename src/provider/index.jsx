import { DarkModeProvider } from "./DarkMode";
import { SideBarProvider } from "./SideBar";
import { OpenModalCreateGroupProvider } from "./OpenModalCreateGroup";
import { OpenModalNotificationProvider } from "../provider/OpenModalNotification"
import { UsersProvider } from "./Users";
import { OwnerGroupsProvider } from "./OwnerGroups";
import { HourProvider } from "./Hour";
import { OpenModalCheckoutProvider } from "./OpenModalCheckout";


export const Providers = ({ children }) => {
    return (
        <DarkModeProvider>
            <SideBarProvider>
                <OpenModalCreateGroupProvider>
                    <UsersProvider>
                        <OwnerGroupsProvider>
                            <OpenModalCheckoutProvider>
                                <HourProvider>
                                    <OpenModalNotificationProvider>     
                                        {children}
                                    </OpenModalNotificationProvider>     
                                </HourProvider>
                            </OpenModalCheckoutProvider>
                        </OwnerGroupsProvider>
                    </UsersProvider>
                </OpenModalCreateGroupProvider>
            </SideBarProvider>
        </DarkModeProvider>
    );
};
