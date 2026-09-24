export type LegalPage = {
  slug: "privacy" | "cookies" | "terms" | "accessibility"
  title: string
  h1: string
  description: string
  sections: { heading: string; paragraphs: string[] }[]
}

const review =
  "This page is a plain-language website notice for Beak Insights. It is not a substitute for jurisdiction-specific legal review of Beak’s actual processing, contracts, and client obligations."

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy Notice | Beak Insights",
    h1: "Privacy notice",
    description:
      "What information Beak Insights collects through this website, why it is used, and the choices available to you.",
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "This notice explains what information Beak Insights collects through this website, why it is used, and the choices available to you.",
          review,
        ],
      },
      {
        heading: "Information collected",
        paragraphs: [
          "If you submit the contact form, we collect your name, work email, organization, the practice area you select, and the description you provide. Please do not include patient, clinical, or other sensitive personal information.",
          "The site also stores a consent choice in your browser if you use the cookie notice. No enquiry text is sent to analytics.",
        ],
      },
      {
        heading: "How it is used",
        paragraphs: [
          "Contact details are used to review the enquiry, route it to someone with relevant domain experience, and reply. They are not used to build a public profile of you.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "Enquiries should be kept only as long as needed to respond and to meet whatever record-keeping obligation applies to the conversation that follows. A specific retention schedule requires legal review against Beak’s actual systems and has not been published here.",
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          "If a contact webhook is configured, the form contents are sent to that destination so the team can receive them. They are not placed in analytics event parameters. This notice does not name a processor because the receiving system is an operational setting, not a claim published on the page.",
        ],
      },
      {
        heading: "Rights and choices",
        paragraphs: [
          "You may ask what enquiry information we hold about you and request correction or deletion, subject to any duty to keep a record of the conversation. Contact info@beakinsights.com. Whether a particular privacy statute applies depends on your location and on how the information is processed, which counsel should confirm.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Privacy questions: info@beakinsights.com."],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Notice | Beak Insights",
    h1: "Cookie notice",
    description: "How this website uses browser storage and what you can choose.",
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "This notice describes the browser storage this website uses.",
          review,
        ],
      },
      {
        heading: "Information collected",
        paragraphs: [
          "The cookie notice stores your choice—essential only, or analytics allowed—in local storage on your browser. The site does not set advertising cookies.",
          "No analytics vendor script is loaded by this release. If you allow analytics, the site records only structured events such as a page type or a form success. It does not record what you typed in the enquiry.",
        ],
      },
      {
        heading: "How it is used",
        paragraphs: [
          "The consent value is used to decide whether those structured events may be recorded in the browser session. It is not sold.",
        ],
      },
      {
        heading: "Retention",
        paragraphs: [
          "The choice remains in local storage until you clear it or change it from a later visit. This release does not set an independent cookie expiry beyond that browser storage.",
        ],
      },
      {
        heading: "Sharing",
        paragraphs: [
          "Consent state is not sent to a third party by this release. If an analytics provider is added later, it should load only after this choice and this notice should be updated to name it.",
        ],
      },
      {
        heading: "Rights and choices",
        paragraphs: [
          "You can choose “Essential only” or “Allow analytics” in the notice. Essential only means the contact form still works and analytics events are not recorded.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Questions: info@beakinsights.com."],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use | Beak Insights",
    h1: "Terms of use",
    description: "The terms that apply to use of the Beak Insights website.",
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "These terms apply to your use of this website. They do not by themselves create a consulting engagement.",
          review,
        ],
      },
      {
        heading: "Information on this site",
        paragraphs: [
          "Articles and service descriptions are general information about how Beak Insights approaches technology, informatics, and healthcare work. They are not advice for your organization and not a promise of a particular result.",
          "Case pages describe published products. They do not invent client metrics, and they should not be read as a guarantee that the same capability will produce a measured outcome in another setting.",
        ],
      },
      {
        heading: "Enquiries",
        paragraphs: [
          "Submitting the contact form starts a conversation. It does not oblige Beak Insights to propose, accept, or begin work. Do not include patient, clinical, or other sensitive personal information in the form.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Site text, diagrams, and layout are owned by Beak Insights unless a page says otherwise. Felicity LabLink’s source code is published separately under the terms of its public repository.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "The website is provided as a source of information. To the extent the law allows, Beak Insights is not liable for decisions made solely from these pages. A specific limitation clause for each jurisdiction still needs counsel.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: ["Questions about these terms: info@beakinsights.com."],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement | Beak Insights",
    h1: "Accessibility statement",
    description:
      "Beak Insights aims to conform to WCAG 2.2 Level AA on this website.",
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "Beak Insights intends this website to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. That includes keyboard use, visible focus, labeled forms, text contrast, and reflow down to a width of 320 CSS pixels.",
        ],
      },
      {
        heading: "Known limits",
        paragraphs: [
          "Diagrams are inline SVG with a text equivalent beside them. If a diagram and its text disagree, the text is the version to rely on.",
          "This statement is not a completed third-party audit. Defects found in use should be reported so they can be fixed.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "If you cannot use a page, email info@beakinsights.com and include the page address and what you were trying to do. We will use that report to correct the barrier.",
        ],
      },
    ],
  },
]

export function getLegal(slug: string) {
  return legalPages.find((page) => page.slug === slug)
}
