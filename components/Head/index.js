import Head from "next/head";
import userInfo from "../../data/usersInfo.json";

export default function DomHead({ pageName = "Home Page" }) {
  return (
    <Head>
      <title>
        {userInfo.github_username} Portfolio - {pageName}{" "}
      </title>
      {/* meta tags begins */}
      {/* Primary Meta Tags */}
      <meta name="title" content="Agu C. Christopher - Personal Portfolio." />
      <meta
        name="description"
        content="Hey, I'm Christopher. I'm a fullstack software developer"
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content="https://github.com/agucchristopher/portfolio-v3/"
      />
      <meta
        property="og:title"
        content="Agu C. Christopher - Personal Portfolio"
      />
      <meta
        property="og:description"
        content="Hey, I'm Christopher. I'm a fullstack software developer"
      />
      <meta
        property="og:image"
        content="https://avatars.githubusercontent.com/u/83035789?v=4"
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta
        property="twitter:title"
        content="Agu C. Christopher - Personal Portfolio"
      />
      <meta
        property="twitter:description"
        content="Generating of portfolio just got easier. Using BaayMax and a single command, you're on set."
      />
      <meta
        property="twitter:image"
        content="https://avatars.githubusercontent.com/u/83035789?v=4"
      />

      {/* meta tags end */}
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
      <link
        href="https://unpkg.com/aos@2.3.1/dist/aos.css"
        rel="stylesheet"
      ></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </Head>
  );
}
