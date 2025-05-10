import Link from 'next/link';

export interface IBreadcrumbItem {
  label: string;
  href?: string;
}

interface IBreadcrumbsProps {
  breadcrumbs: IBreadcrumbItem[];
}

export const Breadcrumbs = ({ breadcrumbs }: IBreadcrumbsProps) => {
  return (
    <section className="mt-10">
      <div className="custom-container">
        <nav className="flex items-center flex-wrap gap-2 text-sm" aria-label="Breadcrumb">
          {breadcrumbs.map(({ href, label }, index) => (
            <div key={index} className="flex items-center gap-x-2">
              {href ? (
                <Link href={href} className="text-grey transition-colors duration-200 hover:text-black hyphens-auto">
                  {label}
                </Link>
              ) : (
                <span className="text-black font-medium hyphens-auto">{label}</span>
              )}
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </div>
          ))}
        </nav>
      </div>
    </section>
  );
};
