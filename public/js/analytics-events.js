(() => {
  if (typeof window === 'undefined') return;

  const onReady = (callback) => {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', callback, { once: true });
    } else {
      callback();
    }
  };

  const safeGtag = (eventName, params) => {
    try {
      if (typeof window.gtag !== 'function') return;
      window.gtag('event', eventName, params || {});
    } catch {
      // Fail silently – do not break UX if GA4 is unavailable
    }
  };

  onReady(() => {
    const getPageContext = () => ({
      page_location: window.location.href,
      page_title: document.title || undefined,
    });

    // phone_click tracking via delegated click handler
    document.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest('a[href^="tel:"]');
      if (!link) return;

      const href = link.getAttribute('href') || '';
      const phoneNumber = href.replace(/^tel:/i, '').trim();
      const linkText = (link.textContent || '').trim();

      const context = getPageContext();

      safeGtag('phone_click', {
        phone_number: phoneNumber || undefined,
        link_text: linkText || undefined,
        ...context,
      });
    });

    // form_submit tracking – delegated submit handler
    document.addEventListener(
      'submit',
      (event) => {
        const form = event.target;
        if (!(form instanceof HTMLFormElement)) return;

        // Basic guard against duplicate tracking on the same submit
        if (form.dataset.gaTrackedSubmit === 'true') {
          return;
        }
        form.dataset.gaTrackedSubmit = 'true';

        const context = getPageContext();

        const formId = form.id || '';
        const formName =
          form.getAttribute('name') ||
          form.getAttribute('aria-label') ||
          formId ||
          'contact_form';
        const formAction = form.getAttribute('action') || window.location.href;

        safeGtag('form_submit', {
          form_id: formId || undefined,
          form_name: formName,
          form_action: formAction,
          ...context,
        });

        // Allow normal submit / existing JS handlers (e.g. Web3Forms) to proceed
        // The dataset flag is reset after a short delay to avoid permanent locking
        window.setTimeout(() => {
          if (form.dataset.gaTrackedSubmit === 'true') {
            delete form.dataset.gaTrackedSubmit;
          }
        }, 0);
      },
      true
    );
  });
})();

