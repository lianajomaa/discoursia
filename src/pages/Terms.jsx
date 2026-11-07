/**
 * TERMS & CONDITIONS  —  /terms
 *
 * PLACEHOLDER. This is not legal advice and is not a usable policy.
 * Have a lawyer draft the real terms before taking payments, especially
 * around refunds, which are regulated.
 */

import LegalPage from '../components/academy/LegalPage'

const sections = [
  {
    heading: 'Using the platform',
    body: 'Placeholder. Describe who may use the platform, account responsibilities, and acceptable use.',
  },
  {
    heading: 'Courses and access',
    body: 'Placeholder. Describe what access each package grants, for how long, and what happens if a course changes or is withdrawn.',
  },
  {
    heading: 'Payments and refunds',
    body: 'Placeholder. Describe pricing, billing, and the refund policy. Refund terms are legally regulated — have these reviewed before taking payments.',
  },
  {
    heading: 'Certificates',
    body: 'Placeholder. Describe what a Certificate of Completion represents, and what it does not (it is not an accredited qualification unless stated).',
  },
  {
    heading: 'Intellectual property',
    body: 'Placeholder. Course videos, worksheets and materials remain the property of the platform. Describe what learners may and may not do with them.',
  },
  {
    heading: 'Contact',
    body: 'Placeholder. Give the business name, registered address and contact email.',
  },
]

function Terms() {
  return <LegalPage title="Terms & Conditions" sections={sections} />
}

export default Terms
