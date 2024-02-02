import { Button, Divider, Swap, ThemeController } from 'daisyui-react';
import React, { ChangeEvent } from 'react';


export default function App() {
    const [theme, setTheme] = React.useState('default')

    const items = [
        'default', 'retro', 'cyberpunk',
        'valentine', 'aqua'
    ]

    const handleChange = (value: any) => {
        setTheme(value)
    }

    return (
        <div className='flex flex-col items-center justify-center gap-4'>
            <Divider>Theme Controller using a radio input</Divider>
            <ThemeController.RadioGroup value={theme} onChange={handleChange} direction='vertical' name="theme-radios" items={items} />
            <Divider>Theme Controller using a radio button</Divider>
            <ThemeController.ButtonGroup
                value={theme}
                onChange={handleChange}
                direction='vertical'
                name="theme-buttons"
                items={items} />
            <Divider>Theme Controller using a dropdown</Divider>
            <ThemeController.Dropdown
                trigger={(
                    <Button
                        endIcon={<svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>}
                    >
                        Theme
                    </Button>
                )}
                value={theme}
                onChange={handleChange}
                contentClassName='p-2 shadow-2xl bg-base-300 rounded-box w-52'
                buttonProps={{
                    className: 'justify-start',
                    size: 'sm',
                }}
                name="theme-dropdown"
                items={items}
            />
        </div>
    )
}