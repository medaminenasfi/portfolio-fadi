// Minimal Google Analytics (gtag) helper
// Usage:
// import { pageview, event } from '../utils/gtag';
// pageview(window.location.pathname + window.location.search);

// Optionally read the measurement ID from env so it's easy to change per environment.
export const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID || 'G-N5ECCMMBTW';

function safeGtag(){
  if (typeof window === 'undefined') return null;
  return window.gtag ? window.gtag : null;
}

export const pageview = (url) => {
  const gtag = safeGtag();
  if (!gtag) return;
  gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }) => {
  const gtag = safeGtag();
  if (!gtag) return;
  gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Example: to track SPA route changes, call `pageview(location.pathname + location.search)`
// from a top-level component that watches route changes (e.g. using react-router's useLocation).
