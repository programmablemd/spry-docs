import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions, logo } from '@/lib/layout.shared';
import { AISearchTrigger } from '@/components/search';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  const base = baseOptions();
  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
        {...baseOptions()}
      nav={{
        ...base.nav,
        title: (
          <>
            {logo}
            <span className="font-medium in-[.uwu]:hidden max-md:hidden">
              Fumadocs
            </span>
          </>
        ),
      }}
      sidebar={{
        collapsible: true,
        defaultOpenLevel: 2,
        // Use transform to add descriptions from meta.json
        tabs: {
          transform(option, node) {
            return {
              ...option,
              description: node.description ?? option.description,
            };
          },
        },
      }}
    >
      {children}
      <div className='fixed !right-0 w-[100px]'>
        <AISearchTrigger />
      </div>

    </DocsLayout>
  );
}
