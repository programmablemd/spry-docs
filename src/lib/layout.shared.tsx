import { FumadocsIcon } from '@/app/layout.client';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Sprymd Docs',
    },
  };
}
export const logo = (
  <>
   <FumadocsIcon className="size-5 in-[.uwu]:hidden" />
  </>
);
