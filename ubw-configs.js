const {createDefaultUbwConfigs} = require('unlimited-blog-works');

const defautConfigs = createDefaultUbwConfigs();

module.exports = function ubwConfigs() {
  const blogUrl = 'https://kjirou.github.io/blog';

  return {
    "blogName": "それなりブログ",
    blogUrl,
    "publicationDir": "./docs",
    "cssUrls": [
      "/blog/external-resources/index.css"
    ],
    "language": "ja",
    "timeZone": "Asia/Tokyo",
    defaultOgpImageUrl: blogUrl + '/external-resources/hagure_metal-300x300.png',
    additionalTopPageLinks: defautConfigs.additionalTopPageLinks.concat([
      {
        linkText: 'https://kjirou.github.io/',
        href: 'https://kjirou.github.io/',
      },
    ]),
  };
}
