import React, {ReactNode} from 'react';
import Router from '_COMPONENTS/entrypoints/Router';
import Topbar from '_SHARED/Topbar';
import Sidebar from '_COMPONENTS/Sidebar';
import SidebarProvider from '_COMPONENTS/providers/Sidebar';
import useMain from '_HOOKS/main';

function Main(): ReactNode {
    useMain();
    return <Router />;
}

export default Main;