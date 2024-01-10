import React, { FC, Suspense, useRef, useState } from 'react';
import { LiveProvider, LiveError, LivePreview, LiveEditor } from "react-live";
import * as scope from 'daisyui-react'

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CopyToClipboard } from 'react-copy-to-clipboard';



export function CodePreview(props: {
    code: string;
    lang: string;
    loadComponent: () => Promise<{ default: React.ComponentType }>
}) {
    const timer = useRef<number>()
    const [showCode, setShowCode] = useState(false)
    const [isCopied, setIsCopied] = useState(false)
    const code = React.useMemo(() => {
        return decodeURIComponent(atob(props.code))
    }, [props.code])
    const component = React.useMemo(() => {
        if (props.loadComponent) {
            const Component = React.lazy(props.loadComponent)
            return (
                <Suspense fallback="loading...">
                    <Component />
                </Suspense>
            )
        }
        if (code) {
            return (
                <LiveProvider code={code} scope={scope}>
                    <LiveError />
                    <LivePreview />
                </LiveProvider>
            )
        }
        return null
    }, [props.loadComponent, code])
    return (
        <div className='border border-slate-700 rounded'>
            <div className='relative'>
                <div className='translate-x-0 py-10 px-6'>
                    {component}
                </div>
                <scope.Button onClick={() => setShowCode(!showCode)} className='absolute bottom-10 right-10' color='primary' variant='outline'>
                    {showCode ? <IconCodeExpand /> : <IconCode />}
                </scope.Button>
            </div>

            {showCode && (
                <div className='border-t border-slate-700 relative'>
                    <CopyToClipboard
                        text={code}
                        onCopy={() => {
                            setIsCopied(true);
                            clearTimeout(timer.current);
                            timer.current = window.setTimeout(() => setIsCopied(false), 2000);
                        }}
                    >
                        <scope.Button className='absolute top-10 right-10' color='primary' variant='outline'>
                            {isCopied ? <IconCopied /> : <IconCopy />}
                        </scope.Button>
                    </CopyToClipboard>
                    <SyntaxHighlighter customStyle={{ margin: 0, padding: "40px 24px" }} language={props.lang} style={oneDark}>
                        {code}
                    </SyntaxHighlighter>
                </div>
            )}
        </div>
    )
}



const IconCode: FC = () => (
    <svg viewBox="0 0 200 117" width={20} height={20} fill='currentColor'>
        <path d="M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z" />
    </svg>
);

const IconCodeExpand: FC = () => (
    <svg viewBox="0 0 200 117" width={20} height={20} fill='currentColor'>
        <path d="M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Z" />
    </svg>
);

const IconCopy: FC = () => (
    <svg
        role="img"
        aria-label="Copy"
        viewBox="0 0 16 16"
        width={20}
        height={20}
        fill='currentColor'
    >
        <title>Copy</title>
        <path
            fill="currentcolor"
            fillRule="evenodd"
            d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 010 1.5h-1.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-1.5a.75.75 0 011.5 0v1.5A1.75 1.75 0 019.25 16h-7.5A1.75 1.75 0 010 14.25v-7.5z"
        />
        <path
            fill="currentcolor"
            fillRule="evenodd"
            d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0114.25 11h-7.5A1.75 1.75 0 015 9.25v-7.5zm1.75-.25a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25h-7.5z"
        />
    </svg >
)
const IconCopied: FC = () => (
    <svg
        role="img"
        aria-label="Copied!"
        viewBox="0 0 16 16"
        width={20}
        height={20}
        fill='currentColor'
    >
        <title>Copied!</title>
        <path
            fillRule="evenodd"
            d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
        />
    </svg>
)