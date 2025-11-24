interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => (
  <div>
    <h1 className="text-2xl md:text-4xl font-bold mb-4">{title}</h1>
    <p className="text-base md:text-lg text-base-content/80">{description}</p>
  </div>
);

export default PageHeader;
