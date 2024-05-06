import {
  Select,
  Form,
  Divider,
  PaginationProps,
  Pagination,
} from "daisyui-react";
import React from "react";

export default function App() {
  const [size, setSize] = React.useState<PaginationProps["size"]>();

  return (
    <>
      <div className="flex flex-wrap gap-8">
        <Form.Control label="Size">
          <Select
            onChange={(value) => setSize(value as any)}
            items={["xs", "sm", "md", "lg"]}
          />
        </Form.Control>
      </div>

      <Divider>Preview</Divider>

      <div className="flex justify-center">
        <Pagination size={size}>
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item active>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
        </Pagination>
      </div>
    </>
  );
}
