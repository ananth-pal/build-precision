import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  purpose?: 'machine-list' | 'brochure'
}

const BRAND = '#c81e3a'

const Email = ({ name, purpose = 'machine-list' }: Props) => {
  const isBrochure = purpose === 'brochure'
  const heading = isBrochure ? 'Company Brochure' : 'Request received'
  const body = isBrochure
    ? 'Thank you for your interest in Pentagon. We have received your details and a member of our team will share the company brochure and follow up shortly.'
    : "Thank you for your interest in Pentagon's manufacturing capabilities. We have received your request for our detailed machine list and a member of our team will be in touch shortly."

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>{heading} — Pentagon Machines</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={brandMark}>PENTAGON</Text>
          </Section>
          <Heading style={h1}>{heading}</Heading>
          <Text style={p}>Dear {name || 'there'},</Text>
          <Text style={p}>{body}</Text>
          <Text style={p}>
            If your enquiry is time-sensitive, you may also reach us directly at{' '}
            <Link href="mailto:enquiries@sellvindsgroup.com" style={link}>
              enquiries@sellvindsgroup.com
            </Link>
            .
          </Text>
          <Text style={signoff}>— Pentagon Machines and Services Pvt. Ltd.</Text>
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) =>
    data.purpose === 'brochure'
      ? 'Your Pentagon Company Brochure'
      : 'We received your request — Pentagon',
  displayName: 'Request confirmation',
  previewData: { name: 'Jane', purpose: 'machine-list' },
} satisfies TemplateEntry

const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily: 'Arial, Helvetica, sans-serif',
  color: '#111111',
}
const container: React.CSSProperties = {
  maxWidth: '560px',
  margin: '0 auto',
  padding: '32px 24px',
}
const header: React.CSSProperties = {
  borderBottom: `2px solid ${BRAND}`,
  paddingBottom: '12px',
  marginBottom: '24px',
}
const brandMark: React.CSSProperties = {
  margin: 0,
  fontSize: '14px',
  letterSpacing: '3px',
  color: BRAND,
  fontWeight: 700,
}
const h1: React.CSSProperties = {
  fontSize: '20px',
  margin: '0 0 16px 0',
  color: '#111',
}
const p: React.CSSProperties = {
  fontSize: '14px',
  lineHeight: '1.6',
  color: '#333',
  margin: '0 0 12px 0',
}
const link: React.CSSProperties = { color: BRAND, textDecoration: 'none' }
const signoff: React.CSSProperties = {
  fontSize: '14px',
  color: '#333',
  marginTop: '24px',
}
