import React from "react";
import { useEffect, useRef } from "react";

let turnstileScriptPromise;

const loadTurnstileScript = () => {
  if (window.turnstile) return Promise.resolve();

  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  return turnstileScriptPromise;
};

const TurnstileWidget = ({ siteKey, onVerify, onExpire, onError }) => {
  const containerRef = useRef(null);
  const widgetIdRef = useRef(null);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return undefined;

    let cancelled = false;

    loadTurnstileScript()
      .then(() => {
        if (cancelled || !window.turnstile || !containerRef.current || widgetIdRef.current) return;

        widgetIdRef.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: "light",
          callback: onVerify,
          "expired-callback": onExpire,
          "error-callback": onError,
        });
      })
      .catch(onError);

    return () => {
      cancelled = true;
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, [siteKey, onVerify, onExpire, onError]);

  if (!siteKey) {
    return (
      <div className="border border-dashed border-brass/70 bg-brass/10 p-4 text-sm leading-6 text-ink">
        Add <span className="font-semibold">VITE_CLOUDFLARE_TURNSTILE_SITE_KEY</span> to enable CAPTCHA.
      </div>
    );
  }

  return <div ref={containerRef} className="min-h-[65px]" />;
};

export default TurnstileWidget;
