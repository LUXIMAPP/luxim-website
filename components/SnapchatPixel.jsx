/* eslint-disable */
import Script from 'next/script';

const SnapchatPixel = () => (
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
            });
            snaptr('track', 'PAGE_VIEW')`}
        </Script>
    </>
);

export default SnapchatPixel;
