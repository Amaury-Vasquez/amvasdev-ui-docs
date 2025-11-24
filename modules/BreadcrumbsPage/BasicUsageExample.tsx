"use client";
import { Breadcrumbs } from "amvasdev-ui";
import Link from "next/link";
import ExampleBlock from "@/components/documentation/ExampleBlock";

const BasicUsageExample = () => (
  <ExampleBlock
    title="Basic Usage"
    preview={
      <Breadcrumbs
        id="nav-breadcrumbs"
        options={[
          <Link key="home" href="/">
            Home
          </Link>,
          <Link key="components" href="/components">
            Components
          </Link>,
          <span key="current">Breadcrumbs</span>,
        ]}
      />
    }
    code={`<Breadcrumbs
  id="nav-breadcrumbs"
  options={[
    <Link href="/">Home</Link>,
    <Link href="/components">Components</Link>,
    <span>Breadcrumbs</span>,
  ]}
/>`}
  />
);

export default BasicUsageExample;
