/**
 * PRIVACY POLICY  —  /privacy
 *
 * PLACEHOLDER. Not legal advice. Once accounts and payments exist you will be
 * handling personal data and must describe it accurately — what you collect,
 * why, who processes it, and how long you keep it.
 */

import LegalPage from '../components/academy/LegalPage'

const sections = [
  {
    heading: 'What we collect',
    body: 'Placeholder. Today the platform stores learning progress in your own browser only. Once accounts exist, list the personal data collected: name, email, payment records, course progress.',
  },
  {
    heading: 'How we use it',
    body: 'Placeholder. Describe why each piece of data is collected and what it is used for.',
  },
  {
    heading: 'Who we share it with',
    body: 'Placeholder. Name any third-party processors — hosting, authentication, payment providers, email — and link their policies.',
  },
  {
    heading: 'How long we keep it',
    body: 'Placeholder. State retention periods for accounts, progress records and payment records.',
  },
  {
    heading: 'Your rights',
    body: 'Placeholder. Describe how someone requests a copy of their data, corrects it, or asks for deletion.',
  },
  {
    heading: 'Contact',
    body: 'Placeholder. Give the contact point for privacy questions.',
  },
]

function Privacy() {
  return <LegalPage title="Privacy Policy" sections={sections} />
}

export default Privacy
