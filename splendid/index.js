/** @type {import('splendid').Config} */
const config = {
  layout: 'splendid/layout/main.html',
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Art Deco™](https://www.artd.eco)',
    },
  ],
  og: {
    image: 'img/reflex8.jpg',
  },
  pages: '../pages',
  elements: ['elements', '../help/elements'],
  blocks: ['blocks', '../help/blocks'],
  // which prefixes to keep in the main CSS
  prefixes: ['-webkit-hyphens', '-ms-hyphens'],
  // for sitemap and social-buttons
  url: 'https://art-deco.github.io/open-source/',
  // required when pages are at org.github.io/pages-name
  mount: '/open-source/',
  potracePath: '~/.splendid/potrace',
  links: {
    biases: 'https://www.towergateinsurance.co.uk/liability-insurance/cognitive-biases',
    medium: 'https://medium.com/@art_deco/2654d6cdc43f#9925',
    mike: 'https://drive.google.com/file/d/1t5fjvy33akgmDs313kOKakxg1-jKnVpe/view',
    jake: 'https://drive.google.com/file/d/1AHa1o_dvtBOeyy9gbhbiXQgkRPVyVXiO/view',
    mat: 'https://drive.google.com/file/d/1jxzgrv3_iJlB94eZawnz-EeQXRe3Lm_J/view',
    jarvey: 'https://drive.google.com/file/d/14TqyjMPZQILzZQYJ49L9rtJFwEIvcTmI/view',
    changelog: 'https://drive.google.com/file/d/136IB127az5Gjx6WskvlcZuF58sXdZiE9/view',
    academy: 'https://drive.google.com/file/d/1K3sGf_yKHRJALHB6tjOzcjO0HEQq-kV_/view',
    decision: 'https://drive.google.com/file/d/1pRkl1xEJanrCJFKG1dl7UT_yG6eiApHz/view',
    review: 'https://drive.google.com/file/d/163OkaEen2bIsYQSgqUXzo7LpxZEHj6jy/view',
    younoodle: 'https://drive.google.com/file/d/16uY2L9i2rOzqEgFfJ_IcMSfzRYFD5Wcy/view',

    tn_guidelines: 'https://drive.google.com/file/d/19C_E6BBlcrs-NqfuDSztyQ-r39BU090Z/view',
    ho_2018: 'https://webarchive.nationalarchives.gov.uk/20180512233606/https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/673759/T1__ET__Guidance_01_2018__12.01_.pdf',
    ho_latest: 'https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/753717/T1__ET__Guidance_11_2018.pdf',

    raeng: 'https://www.raeng.org.uk/policy/partnerships/international-policy-and-development/research-and-innovation-talent-visa-(1)',

    company_house: 'https://beta.companieshouse.gov.uk/company/11323401',
    tm: 'https://trademarks.ipo.gov.uk/ipo-tmcase/page/Results/1/UK00003321033',

    data_protection: 'https://docs.google.com/document/d/1oi6zaA2iSGx8BnDN2uStL0WT7Ao9zt9wpUVcsmKp7cY/view',
  },
}

export default config