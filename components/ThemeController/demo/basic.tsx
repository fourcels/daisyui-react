import { Toggle, Form, Divider, Select, ThemeControllerProps, ThemeController } from 'daisyui-react';
import React from 'react';


export default function App() {
    const [checked, setChecked] = React.useState(false)

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <ThemeController
                checked={checked}
                value="synthwave"
                onChange={(e) => setChecked(e.target.checked)}
            />
            <ThemeController
                type='checkbox'
                checked={checked}
                value="synthwave"
                onChange={(e) => setChecked(e.target.checked)}
            />
        </div>
    )
}