export type LegalPage = {
  slug: "privacy" | "cookies" | "terms" | "accessibility"
  title: string
  h1: string
  description: string
  sections: { heading: string; paragraphs: string[] }[]
}

export const legalPages: LegalPage[] = [
  {
    slug: "privacy",
    title: "Privacy Notice | Beak Insights",
    h1: "Privacy notice",
    description:
      "How Beak Insights collects, uses, and protects personal information submitted through this website, under Zimbabwe’s Cyber and Data Protection Act.",
    sections: [
      {
        heading: "Who we are",
        paragraphs: [
          "Beak Insights is the data controller for personal information collected through www.beakinsights.com. You can reach us at info@beakinsights.com, by telephone on +263 776 406 399, or by WhatsApp on +263 71 306 9794.",
          "A street address for the controller is not published on this website. Use the contact details above to exercise your rights. This notice is written for the Cyber and Data Protection Act [Chapter 12:07] of Zimbabwe. The Postal and Telecommunications Regulatory Authority of Zimbabwe (POTRAZ) is the Data Protection Authority.",
        ],
      },
      {
        heading: "What we collect",
        paragraphs: [
          "If you submit the contact form, we collect your name, work email, organization, the practice area you select, and the description of the challenge. The form also records that you agreed to this notice.",
          "If you use WhatsApp, email, or the telephone, we receive whatever you choose to send on that channel.",
          "The site stores your cookie choice in your browser. It does not ask for an account, and it does not collect patient, clinical, or other sensitive personal information. Do not put that information in the form, in email, or in WhatsApp.",
          "This website is not directed at anyone under 18. Do not submit a child’s personal information.",
        ],
      },
      {
        heading: "Why we use it",
        paragraphs: [
          "We use enquiry details to read the request, route it to the relevant practice, and reply. That is the purpose. We do not use the form to build a marketing list, and we do not sell the information.",
          "Providing these details is voluntary. If you do not provide them, we cannot reply through the form. You can still contact us by email or WhatsApp.",
          "The lawful basis for an enquiry is your consent, given by the checkbox on the form, and our legitimate interest in answering a request you started. Consent for the enquiry is separate from the terms of use. You can withdraw consent by emailing info@beakinsights.com. Withdrawal does not undo a reply already sent.",
          "Analytics events are optional. They run only after you choose Allow analytics. They record the type of page or action, not the text of your enquiry.",
        ],
      },
      {
        heading: "Who receives it",
        paragraphs: [
          "Enquiries are emailed to info@beakinsights.com. Delivery uses FormSubmit (formsubmit.co) unless a private delivery address has been configured for the site. FormSubmit receives the form contents in order to send that email. We do not place enquiry text in analytics.",
          "We may also disclose information if Zimbabwean law, a court, or POTRAZ requires it. We do not transfer enquiry data as a product to other companies.",
          "Email delivery can pass through servers outside Zimbabwe. Where that happens, the transfer is limited to delivering the message you asked us to receive.",
        ],
      },
      {
        heading: "How long we keep it",
        paragraphs: [
          "We keep an enquiry for up to 24 months after our last reply, unless a later contract or a legal duty requires a longer record. The cookie choice stays in your browser until you clear it or change it.",
        ],
      },
      {
        heading: "Your rights",
        paragraphs: [
          "Under the Cyber and Data Protection Act you may ask to be told how your information is used, to see the information we hold, to object to processing, to correct information that is false or misleading, and to have false or misleading information deleted.",
          "Send the request to info@beakinsights.com. We aim to answer within 30 days. You may also complain to POTRAZ, the Data Protection Authority. POTRAZ publishes its contact details at potraz.gov.zw.",
          "We do not use this website for direct marketing. If that ever changes, you will be told before your information is used that way, and you can object.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "Access to enquiry email is limited to people who handle conversations for Beak Insights. No website transmission is perfectly secure. Do not send sensitive personal information through the form.",
        ],
      },
    ],
  },
  {
    slug: "cookies",
    title: "Cookie Notice | Beak Insights",
    h1: "Cookie notice",
    description: "The browser storage this website uses, and how to accept or reject non-essential analytics.",
    sections: [
      {
        heading: "What this site stores",
        paragraphs: [
          "Beak Insights stores one choice in your browser’s local storage: whether you rejected non-essential storage or allowed analytics. The key is beak-consent. There is no advertising cookie and no pre-ticked consent.",
          "Essential operation of the contact form does not depend on that choice. The form works if you reject non-essential storage.",
        ],
      },
      {
        heading: "Analytics",
        paragraphs: [
          "If you allow analytics, the site records structured events such as a service page view, a case view, a filter, a search, or a successful form submission. The event does not include your name, email, or the text of the enquiry.",
          "No analytics vendor script is loaded in this release. If one is added later, it will load only after this choice, and this notice will name the vendor before that happens.",
        ],
      },
      {
        heading: "Your choice",
        paragraphs: [
          "The notice offers two actions with equal weight: Reject non-essential, and Allow analytics. Reject means only the consent record is kept so we do not ask on every page, and analytics events are not recorded.",
          "Consent has to be a clear yes. Closing the notice is not consent. You can change your mind by clearing site data for beakinsights.com in your browser, which removes the stored choice and shows the notice again.",
          "The choice remains until you clear it. We do not use the choice for any purpose other than honouring it.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "Questions about this notice: info@beakinsights.com. You may also complain to POTRAZ if you believe storage on this site breaches the Cyber and Data Protection Act.",
        ],
      },
    ],
  },
  {
    slug: "terms",
    title: "Terms of Use | Beak Insights",
    h1: "Terms of use",
    description: "The terms that apply when you use the Beak Insights website.",
    sections: [
      {
        heading: "Scope",
        paragraphs: [
          "These terms apply to your use of www.beakinsights.com. They are between you and Beak Insights. They are not a consulting contract. Work begins only when both sides agree a separate engagement.",
          "The terms are meant to be read with the law of Zimbabwe, including the Cyber and Data Protection Act [Chapter 12:07]. They do not limit any right that law does not allow us to limit.",
        ],
      },
      {
        heading: "Using the site",
        paragraphs: [
          "You may read the pages, search them, and send an enquiry. Do not misuse the site: do not attempt to break it, probe it without permission, or submit malware.",
          "Do not send patient, clinical, or other sensitive personal information through the form, email link, or WhatsApp link. The form asks you not to, and we may delete a message that contains it.",
          "You must not submit an enquiry for anyone under 18 or include a child’s personal information.",
        ],
      },
      {
        heading: "Information on the site",
        paragraphs: [
          "Service pages and articles explain how Beak Insights approaches technology, informatics, and healthcare work. They are general information. They are not advice for your organization and not a promise of a result.",
          "Work pages describe systems Beak Insights has published. They are not measured client outcomes, and a blank trust space is not a client or a certification.",
        ],
      },
      {
        heading: "Enquiries",
        paragraphs: [
          "Submitting the form, sending an email, or opening WhatsApp starts a conversation. It does not oblige Beak Insights to propose, accept, or begin work. We email form enquiries to info@beakinsights.com.",
        ],
      },
      {
        heading: "Intellectual property",
        paragraphs: [
          "Text, diagrams, and layout on this site belong to Beak Insights unless a page says otherwise. You may share a link. You may not copy the site design or republish the articles as your own.",
          "Felicity LabLink’s source code is published in its own repository and follows the licence stated there.",
        ],
      },
      {
        heading: "Liability",
        paragraphs: [
          "The site is provided as information. To the extent Zimbabwean law allows, Beak Insights is not liable for decisions made only from these pages, or for a message that never arrives because of a failure in email or WhatsApp outside our control.",
          "Nothing on the site excludes liability that the law does not let us exclude.",
        ],
      },
      {
        heading: "Changes and contact",
        paragraphs: [
          "We may update these terms by publishing a new version on this page. Continued use of the site after that publication is use under the new version.",
          "Questions: info@beakinsights.com or WhatsApp +263 71 306 9794.",
        ],
      },
    ],
  },
  {
    slug: "accessibility",
    title: "Accessibility Statement | Beak Insights",
    h1: "Accessibility statement",
    description: "Beak Insights aims to conform to WCAG 2.2 Level AA on this website.",
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
          "The trust row is a set of inactive placeholders. It is not a list of clients or certifications.",
          "This statement is not a completed third-party audit.",
        ],
      },
      {
        heading: "Contact",
        paragraphs: [
          "If you cannot use a page, email info@beakinsights.com or WhatsApp +263 71 306 9794 and include the page address and what you were trying to do. We will use that report to correct the barrier.",
        ],
      },
    ],
  },
]

export function getLegal(slug: string) {
  return legalPages.find((page) => page.slug === slug)
}
