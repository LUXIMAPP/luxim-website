import Head from 'next/head';

const OgHead = ({ description, title }) => (
  <>
    <Head>
      <meta name="description" content={description} />
      <meta name="title" property="og:title" content={title} />
      <meta name="type" property="og:type" content="website" />
      <meta
        name="image"
        property="og:image"
        content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
      />
      <meta property="og:description" content={description} />
      <meta name="author" content="Luxim" />
      <meta property="og:site_name" content="Luxim" />

      {/* Twitter tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@Luxim" />
      <meta name="twitter:creator" content="@Luxim" />
      <meta name="twitter:image:alt" content="Luxim" />
      <meta
        name="twitter:image:src"
        content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
      />
    </Head>
    {/* <Head>
      <meta
        name="description"
        content="Sell designer, vintage, preloved, latest trends, event attire and more."
      />
      <meta
        name="title"
        property="og:title"
        content="Luxim | Buy . Sell . Discover Your Style"
      />
      <meta name="type" property="og:type" content="website" />
      <meta name="image" property="og:image" content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp" />
      <meta
        property="og:description"
        content="Sell designer, vintage, preloved, latest trends, event attire and more."
      />
      <meta name="author" content="Luxim" />
      <meta property="og:site_name" content="Luxim" />

      Twitter tags
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Luxim | Buy . Sell . Discover Your Style" />
      <meta
        name="twitter:description"
        content="Sell designer, vintage, preloved, latest trends, event attire and more."
      />
      <meta name="twitter:site" content="@Luxim" />
      <meta name="twitter:creator" content="@Luxim" />
      <meta name="twitter:image:alt" content="Luxim" />
      <meta
        name="twitter:image:src"
        content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
      />
    </Head> */}
    {/* <Head>
      <meta
        name="description"
        content="A community-driven app,
        celebrating Nigeria's traditional fashion, promoting sustainability
        and economic opportunities."
      />
      <meta name="title" property="og:title" content="About Luxim" />
      <meta name="type" property="og:type" content="website" />
      <meta
        name="image"
        property="og:image"
        content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
      />
      <meta
        property="og:description"
        content="A community-driven app,
         celebrating Nigeria's traditional fashion, promoting sustainability
         and economic opportunities."
      />
      <meta name="author" content="Luxim" />
      <meta property="og:site_name" content="Luxim" />
      Twitter tags
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Luxim" />
      <meta
        name="twitter:description"
        content="A community-driven app,
        celebrating Nigeria's traditional fashion,
        promoting sustainability and economic opportunities."
      />
      <meta name="twitter:site" content="@Luxim" />
      <meta name="twitter:creator" content="@Luxim" />
      <meta name="twitter:image:alt" content="Luxim" />
      <meta
        name="twitter:image:src"
        content="https://luxim-images.s3.us-east-2.amazonaws.com/mainLoginImg.webp"
      />
    </Head> */}
  </>
);

export default OgHead;
