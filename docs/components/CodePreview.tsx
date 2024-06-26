import React, { FC, Suspense, useRef, useState } from "react";
import { LiveProvider, LiveError, LivePreview } from "react-live";
import * as scope from "daisyui-react";
import { Button, Tooltip } from "daisyui-react";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { twMerge } from "tailwind-merge";
import "./CodePreview.css";

type CodePrivewProps = {
  code: string;
  lang: string;
  title?: string;
  description?: string;
  live: boolean;
  loadCode?: () => Promise<{ default: string }>;
  loadComponent?: () => Promise<{ default: React.ComponentType }>;
};

export function CodePreview(props: CodePrivewProps) {
  const code = React.useMemo(() => {
    if (!props.code) {
      return;
    }
    return decodeURIComponent(atob(props.code));
  }, [props.code]);
  const component = React.useMemo(() => {
    if (props.loadComponent) {
      const Component = React.lazy(props.loadComponent);
      return (
        <Suspense fallback="loading...">
          <Component />
        </Suspense>
      );
    }
    if (code) {
      return (
        <LiveProvider code={`<>${code}</>`} scope={scope}>
          <LiveError />
          <LivePreview className="flex items-center justify-center flex-wrap gap-4" />
        </LiveProvider>
      );
    }
    return null;
  }, [props.loadComponent, code]);

  const live = React.useMemo(() => {
    if (!["tsx", "jsx"].includes(props.lang)) {
      return false;
    }
    return props.live;
  }, [props.lang, props.live]);

  return (
    <div className="code-preview not-prose">
      {live && (
        <div>
          <div className="flex">
            <div className="py-10 px-6 preview flex-1 w-0">{component}</div>
          </div>
          <CodeInfo description={props.description} />
        </div>
      )}
      <SourceCode
        live={live}
        lang={props.lang}
        code={code}
        loadCode={props.loadCode}
      />
    </div>
  );
}

function useCode(code?: string, loadCode?: CodePrivewProps["loadCode"]) {
  const [value, setValue] = React.useState("");
  React.useEffect(() => {
    if (code) {
      return setValue(code);
    }
    loadCode?.().then(({ default: code }) => {
      setValue(code);
    });
  }, [code, loadCode]);

  return value;
}

function SourceCodeContent({
  live,
  code,
  lang,
  className,
}: {
  live: boolean;
  code: string;
  lang: string;
  className?: string;
}) {
  return (
    <div className={twMerge("source-code", className)}>
      <CopyCodeButton className="absolute top-4 right-4" code={code} />
      <SyntaxHighlighter
        customStyle={{
          margin: 0,
          padding: live ? "40px 24px" : "20px 16px",
          flexGrow: 1,
          width: 0,
          maxHeight: 500,
          borderRadius: 0,
        }}
        language={lang}
        style={oneDark}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function CopyCodeButton({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const timer = useRef<number>();
  const [copied, setCopied] = useState(false);
  return (
    <CopyToClipboard
      text={code}
      onCopy={() => {
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = window.setTimeout(() => setCopied(false), 2000);
      }}
    >
      <Tooltip
        className={className}
        title={copied ? "Copied" : "Copy code"}
        position="left"
      >
        <Button size="sm" color="ghost" shape="square">
          {copied ? <IconCopied /> : <IconCopy />}
        </Button>
      </Tooltip>
    </CopyToClipboard>
  );
}

function SourceCode({
  live,
  lang,
  code,
  loadCode,
}: {
  lang: string;
  code?: string;
  loadCode?: () => Promise<{ default: string }>;
  live: boolean;
}) {
  const [showCode, setShowCode] = useState(false);
  const sourceCode = useCode(code, loadCode);
  if (!live) {
    return <SourceCodeContent live={live} code={sourceCode} lang={lang} />;
  }
  return (
    <div>
      <div className="flex justify-center p-2 border-t">
        <Tooltip title={showCode ? "Hide code" : "Show code"}>
          <Button
            color="ghost"
            size="sm"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? <IconCode /> : <IconCodeExpand />}
          </Button>
        </Tooltip>
      </div>
      {showCode && (
        <div>
          <SourceCodeContent
            live={live}
            className="border-t border-dashed"
            code={sourceCode}
            lang={lang}
          />
          <div className="flex justify-center items-center gap-1 py-2 border-t ">
            <Tooltip title="Hide code">
              <Button
                color="ghost"
                size="sm"
                onClick={() => setShowCode(false)}
              >
                <IconUp />
                Hide
              </Button>
            </Tooltip>
          </div>
        </div>
      )}
    </div>
  );
}

function CodeInfo({ description }: { description?: string }) {
  if (!description) {
    return null;
  }
  return <div className="border-t p-6">{description}</div>;
}

const IconCode: FC = () => (
  <svg viewBox="0 0 200 117" width={20} height={20} fill="currentColor">
    <path d="M59.688 2.578c-3.438-3.437-8.438-3.437-11.563 0L3.75 48.516c-5 5.937-5 14.062 0 19.062l44.063 45.938c1.562 1.562 4.062 2.5 5.937 2.5s4.063-.938 5.938-2.5c3.437-3.438 3.437-8.438 0-11.563l-42.5-43.437 42.5-44.063c3.437-3.437 3.437-8.437 0-11.875Zm135.937 45.938L151.25 2.578c-3.438-3.437-8.438-3.437-11.563 0-3.125 3.438-3.437 8.438 0 11.563l42.5 44.375-42.5 44.062c-3.437 3.438-3.437 8.438 0 11.563 1.563 1.562 3.438 2.5 5.938 2.5 2.5 0 4.063-.938 5.938-2.5l44.062-45.938c5.625-5.625 5.625-13.75 0-19.687Zm-75.938-45c-4.062-1.563-9.062.937-10.937 5l-34.063 95c-1.562 4.062.938 9.062 5 10.937.938 0 1.563.938 2.5.938 3.438 0 6.563-2.5 7.5-5.938l35-95.937c1.563-4.063-.937-9.063-5-10Z" />
  </svg>
);

const IconCodeExpand: FC = () => (
  <svg viewBox="0 0 200 117" width={20} height={20} fill="currentColor">
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
    fill="currentColor"
  >
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
  </svg>
);
const IconCopied: FC = () => (
  <svg
    role="img"
    aria-label="Copied!"
    viewBox="0 0 16 16"
    width={20}
    height={20}
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"
    />
  </svg>
);

const IconUp: FC = () => (
  <svg
    viewBox="64 64 896 896"
    focusable="false"
    data-icon="up"
    width="1em"
    height="1em"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"></path>
  </svg>
);
