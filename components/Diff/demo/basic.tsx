import { Divider, Countdown, Toggle, Diff } from 'daisyui-react';
import React, { useEffect, useState } from 'react';


export default function App() {

    return (
        <div>
            <Divider>Preview</Divider>

            <Diff
                items={[
                    <img alt="daisy" src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg" />,
                    <img alt="daisy" src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.jpg" />
                ]}
                className='aspect-[16/9]'
            />
        </div>
    )
}
