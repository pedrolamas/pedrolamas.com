import logo from '../content/assets/logo.jpg';

export const siteMetadata = {
  title: `pedrolamas.com`,
  description: `Programming and Tinkering`,
  author: `Pedro Lamas`,
  siteUrl: `https://www.pedrolamas.com`,
  lang: `en-US`,
  timezone: `Europe/London`,
  logo,
  disclaimer: `This work is licensed under a <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons Attribution-ShareAlike 3.0 Unported License</a> except where otherwise noted. Unless specified, all source code on this site is licensed under the <a href="https://www.pedrolamas.com/LICENSE.txt">MIT license</a>.`,

  authorDetails: {
    email: `pedrolamas@gmail.com`,
    uri: `https://www.pedrolamas.com`,
    picture: logo,
    biography: `Pedro is a software developer specialized in Microsoft technologies. He's a regular blogger, speaker, and the author of the open-source <a href="http://cimbalino.org">Cimbalino Toolkit</a>.`,
    twitter: `pedrolamas`,
  },

  twitter: { username: `pedrolamas` },

  facebook: {
    appId: `401681359922124`,
    publisher: `150703221746608`,
    admins: `1049758397`,
  },

  social: {
    links: [`https://twitter.com/pedrolamas`, `https://hachyderm.io/@pedrolamas`, `https://www.facebook.com/pedrolamas`, `https://www.linkedin.com/in/pedrolamas`, `https://github.com/pedrolamas`],
  },

  sidebar: {
    logos: [
      // {
      //   image: `wp-content/uploads/2017/03/MVP_Logo_Horizontal_Preferred_Cyan300_RGB_300ppi.png`,
      //   title: `Microsoft Most Valuable Professional (MVP) for Windows Development`,
      // },
    ] as { image: string; title: string }[],
  },

  disqusShortname: `pedrolamas-com`,
};
