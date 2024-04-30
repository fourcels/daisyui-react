import { Button, MockupCode } from "daisyui-react";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center p-8">
      <div className="flex flex-col gap-8">
        <div className="prose">
          <h1 className="text-center">DaisyUI React</h1>
          <p>
            A React component library for{" "}
            <a href="https://daisyui.com/" target="_blank">
              daisyUI
            </a>
            , the most popular, free and open-source Tailwind CSS component
            library
          </p>
        </div>
        <MockupCode>
          <MockupCode.Line prefix=">">
            npm i daisyui daisyui-react
          </MockupCode.Line>
        </MockupCode>
        <div className="flex gap-4 mt-8">
          <Link to="/components/" className="flex-1">
            <Button size="lg" block className="rounded-full">
              Components
            </Button>
          </Link>
          <Link
            className="flex-1"
            to="https://github.com/fourcels/daisyui-react"
            target="_blank"
          >
            <Button size="lg" block color="neutral" className="rounded-full">
              Github
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
