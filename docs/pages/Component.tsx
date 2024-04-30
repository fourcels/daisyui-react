import { matters } from "virtual:component-matter";
import { Card } from "daisyui-react";
import { Content } from "../components/Content";
import { Link } from "react-router-dom";

export function Component() {
  return (
    <Content
      frontmatter={{
        title: "All daisyUI components",
        description: `${matters.length} Components`,
      }}
    >
      <div className="not-prose grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {matters.map((item, i) => (
          <Link to={`/components/${item.slug}/`} key={i}>
            <Card compact className="h-full">
              <Card.Image src={`/images/components/${item.slug}.jpg`} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <p>{item.description}</p>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </Content>
  );
}
