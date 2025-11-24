"use client";
import { Input } from "amvasdev-ui";
import { Search, User } from "lucide-react";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const WithIconsExample = () => (
  <ExampleBlock
    title="With Icons"
    preview={
      <div className="space-y-4">
        <Input
          id="search"
          label="Search"
          leftIcon={<Search size={16} />}
          placeholder="Search..."
        />
        <Input id="profile" label="Profile" rightIcon={<User size={16} />} />
      </div>
    }
    code={`import { Search, User } from "lucide-react";

<Input
  id="search"
  label="Search"
  leftIcon={<Search size={16} />}
  placeholder="Search..."
/>

<Input
  id="profile"
  label="Profile"
  rightIcon={<User size={16} />}
/>`}
  />
);

export default WithIconsExample;
