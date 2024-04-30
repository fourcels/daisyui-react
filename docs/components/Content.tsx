import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { debounce, throttle } from "lodash";
import "./Content.css";

let animate = false;

type TocItem = {
  id: string;
  title: string;
};

export function Content({
  children,
  frontmatter,
  toc,
}: {
  children: React.ReactNode;
  frontmatter?: Record<string, string>;
  toc?: TocItem[];
}) {
  const articleRef = React.useRef<HTMLElement>(null);
  const tocRef = React.useRef<TocRef>(null);
  const timer = useRef(0);

  React.useEffect(() => {
    const originTitle = document.title;
    if (frontmatter?.title) {
      document.title = `${frontmatter.title} — ${originTitle}`;
    }
    return () => {
      document.title = originTitle;
    };
  }, [frontmatter]);

  React.useEffect(() => {
    const elem = articleRef.current;

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("span.icon-link")) {
        e.preventDefault();
        const elem = target.parentElement?.parentElement;
        if (!elem) {
          return;
        }
        tocRef.current?.setActiveAnchor(elem.id);
        window.scrollTo({
          top: elem.offsetTop - 64,
          behavior: "smooth",
        });
        animate = true;
        clearTimeout(timer.current);
        timer.current = window.setTimeout(() => {
          animate = false;
        }, 1000);
      }
    };
    elem?.addEventListener("click", handleClick);

    return () => {
      elem?.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div className="flex">
      <article ref={articleRef} className="markdown prose min-w-80 max-w-7xl">
        {frontmatter?.title && <h1>{frontmatter.title}</h1>}
        {frontmatter?.description &&
          frontmatter.description
            .trim()
            .split("\n")
            .map((item, idx) => <p key={idx}>{item}</p>)}
        {children}
      </article>
      {toc && (
        <div className="toc-wrapper">
          <Toc ref={tocRef} toc={toc} className="sticky top-16" />
        </div>
      )}
    </div>
  );
}

type TocProps = {
  toc: Record<string, any>[];
  className?: string;
};

type TocRef = {
  setActiveAnchor: (id?: string) => void;
};

const Toc = React.forwardRef<TocRef, TocProps>(({ toc, className }, ref) => {
  const [active, setActive] = useState(0);
  const timer = useRef(0);

  const setActiveAnchor = React.useCallback(
    (idx: number) => {
      setActive(idx);
      const elem = toc[idx];
      history.replaceState(null, "", `#${elem.id}`);
    },
    [toc]
  );

  React.useImperativeHandle(
    ref,
    () => ({
      setActiveAnchor(id) {
        if (!id) {
          return;
        }
        for (let i = 0; i < toc.length; i++) {
          const item = toc[i];
          if (item.id === id) {
            setActiveAnchor(i);
            break;
          }
        }
      },
    }),
    [toc, setActiveAnchor]
  );

  useEffect(() => {
    const elems = toc.map((item) => {
      return document.getElementById(item.id)!;
    });
    const handleScroll = throttle(() => {
      if (animate) {
        return;
      }
      for (let i = elems.length - 1; i >= 0; i--) {
        const elem = elems[i];
        if (elem.offsetTop - document.documentElement.scrollTop < 64) {
          setActiveAnchor(i);
          break;
        }
        if (i === 0) {
          setActiveAnchor(i);
        }
      }
    }, 200);
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [toc, setActiveAnchor]);

  return (
    <ul className={twMerge("toc", className)}>
      {toc.map((item, idx) => (
        <li
          key={item.id}
          className={twMerge(
            "toc-item",
            item.rank > 2 && "toc-item-sub",
            active === idx && "active"
          )}
        >
          <a
            title={item.title}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveAnchor(idx);
              const elem = document.getElementById(item.id);
              if (!elem) {
                return;
              }
              window.scrollTo({
                top: elem.offsetTop - 64,
                behavior: "smooth",
              });
              animate = true;
              clearTimeout(timer.current);
              timer.current = window.setTimeout(() => {
                animate = false;
              }, 1000);
            }}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
});
