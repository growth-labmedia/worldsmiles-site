import { useParams } from 'react-router-dom';
import { usePageMeta } from '../lib/seo';
import { getService } from '../data/services';
import ServicePageTemplate from '../components/ServicePageTemplate';
import NotFoundPage from './NotFoundPage';

/** /services/:slug — renders the matching entry from data/services.ts, or the 404 page. */
export default function ServicePage() {
  const { slug = '' } = useParams();
  const service = getService(slug);
  if (!service) return <NotFoundPage />;
  return <ServicePageBody key={service.slug} slug={service.slug} />;
}

function ServicePageBody({ slug }: { slug: string }) {
  const service = getService(slug)!;
  usePageMeta(service.metaKey as Parameters<typeof usePageMeta>[0]);
  return <ServicePageTemplate service={service} />;
}
