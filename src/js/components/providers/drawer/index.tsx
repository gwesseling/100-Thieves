import React, {createContext, ReactNode} from "react";
import useDrawer from "_COMPONENTS/providers/drawer/containerHook";

export const DrawerContext = createContext();

interface Props {
    children: ReactNode;
}

// TODO: add panhandler in the future
/**
 * Handles drawer methodes
 */
function DrawerProvider(props: Props): ReactNode {
    const {openDrawer, closeDrawer, toggleDrawer, drawerAnimation, isOpen} = useDrawer();
    const {children} = props;

    return (
        <DrawerContext.Provider
            value={{
                openDrawer,
                closeDrawer,
                toggleDrawer,
                drawerAnimation,
                isOpen,
            }}
        >
            {children}
        </DrawerContext.Provider>
    );
}

export default DrawerProvider;
