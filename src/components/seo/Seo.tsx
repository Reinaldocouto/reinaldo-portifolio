import { useEffect } from 'react';
import { site } from '../../data/site';

type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  canonical?: string;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

function toAbsoluteUrl(pathOrUrl: string) {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }

  return `${site.baseUrl}${pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`}`;
}

function setMetaTag(attr: 'name' | 'property', key: string, content: string) {
  let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);

  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute('content', content);
}

function setCanonical(href: string) {
  let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }

  canonical.setAttribute('href', href);
}

export function Seo({ title, description, image, url, type = 'website', canonical, jsonLd }: SeoProps) {
  useEffect(() => {
    const resolvedTitle = title ?? site.seo.defaultTitle;
    const resolvedDescription = description ?? site.seo.defaultDescription;
    const resolvedUrl = toAbsoluteUrl(url ?? '/');
    const resolvedImage = toAbsoluteUrl(image ?? site.seo.ogImage);
    const resolvedCanonical = toAbsoluteUrl(canonical ?? url ?? '/');

    document.title = resolvedTitle;

    setMetaTag('name', 'description', resolvedDescription);
    setMetaTag('property', 'og:site_name', site.seo.siteName);
    setMetaTag('property', 'og:locale', site.locale);
    setMetaTag('property', 'og:title', resolvedTitle);
    setMetaTag('property', 'og:description', resolvedDescription);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:url', resolvedUrl);
    setMetaTag('property', 'og:image', resolvedImage);
    setMetaTag('property', 'og:image:alt', resolvedTitle);
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', resolvedTitle);
    setMetaTag('name', 'twitter:description', resolvedDescription);
    setMetaTag('name', 'twitter:image', resolvedImage);
    setMetaTag('name', 'twitter:url', resolvedUrl);
    setMetaTag('name', 'twitter:site', site.seo.twitterHandle);
    setMetaTag('name', 'robots', 'index,follow');
    setCanonical(resolvedCanonical);

    const existingScript = document.getElementById('seo-json-ld');
    if (existingScript) {
      existingScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'seo-json-ld';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [canonical, description, image, jsonLd, title, type, url]);

  return null;
}
