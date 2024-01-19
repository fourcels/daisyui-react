import { ScrollRestoration } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Outlet } from 'react-router';


export function Layout() {
    return (
        <div className='flex min-h-full'>
            <ScrollRestoration />
            <Sidebar className='w-64 flex-shrink-0 hidden md:block' />
            <div className='flex-1'>
                <Outlet />
            </div>
        </div>
    )
}
