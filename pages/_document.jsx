/* eslint-disable react/no-danger */
import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="google-site-verification"
            content="h505WR67IyLcDX-4O4Z2X0avaCIooQCijRIiFBDmxFc"
          />
          <Script
            strategy="afterInteractive"
            id="luxim12345_67890"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TH7879DD');`,
            }}
          />
          {/* <script async src="/scripts/mailerlite.js"></script> */}
          <Script
            strategy="afterInteractive"
            id="luxim12345_67890facebook"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '619737427023961');
              fbq('track', 'PageView');`,
            }}
          />
          <Script
            id="mailerlite"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
                .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
                n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
                (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
                ml('account', '644121');
              `,
            }}
          />
        </Head>
        <body>
          <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TH7879DD"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
          />
          <noscript dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=619737427023961&ev=PageView&noscript=1"
            />`,
          }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
