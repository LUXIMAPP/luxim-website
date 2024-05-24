/* eslint-disable */
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

const pageview = () => {
    if (typeof window === 'undefined') return;
    window.snaptr('track', 'PAGE_VIEW');
};

const handleRouteChange = () => {
    pageview();
};

const SnapchatPixel = () => {
    const router = useRouter();

    useEffect(() => {
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Script id="snapchat-pixel" async>
                {`(function(e,t,n){if(e.snaptr)return;var a=e.snaptr=function()
                {a.handleRequest?a.handleRequest.apply(a,arguments):a.queue.push(arguments)};
                a.queue=[];var s='script';r=t.createElement(s);r.async=!0;
                r.src=n;var u=t.getElementsByTagName(s)[0];
                u.parentNode.insertBefore(r,u);})(window,document,
                \'https://sc-static.net/scevent.min.js\');
                snaptr('init', '922e07af-fcec-483a-a6b0-1135d5c987ee', {
                  'user_email': '__INSERT_USER_EMAIL__'
                })`}
            </Script>
        </>
    );
};

export default SnapchatPixel;
