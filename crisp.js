(function () {
  const crispWebsiteId = '4459415f-7f0e-4771-8964-e7eb47e4cc58';
  const crispScriptSrc = 'https://client.crisp.chat/l.js';

  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  window.$crisp = window.$crisp || [];
  window.CRISP_WEBSITE_ID = crispWebsiteId;

  if (document.querySelector(`script[src="${crispScriptSrc}"]`)) {
    return;
  }

  const script = document.createElement('script');
  script.src = crispScriptSrc;
  script.async = true;
  document.head.appendChild(script);
})();
