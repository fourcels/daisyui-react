import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export function Sidebar({
    className
}: {
    className?: string
}) {
    return (
        <div className={twMerge('px-5 relative border-r bg-base-100 z-10', className)}>
            <div className='flex flex-col gap-4 pt-10 sticky top-0'>
                <Link to="/components/button">Button</Link>
                <Link to="/components/select">Select</Link>
                <Link to="/components/toggle">Toggle</Link>
            </div>
        </div>
    )
}