import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  name?: string
  company?: string
  email?: string
  country?: string
  phone?: string
  notes?: string
  purpose?: 'machine-list' | 'brochure'
  referenceId?: string
}

const BRAND = '#c81e3a'

const Row = ({ label, value }: { label: string; value?: string }) => {
  if (!value) return null
  return (
    <tr>
      <td style={labelCell}>{label}</td>
      <td style={valueCell}>{value}</td>
    </tr>
  )
}

const Email = ({
  name,
  company,
  email,
  country,
  phone,
  notes,
  purpose = 'machine-list',
  referenceId,
}: Props) => {
  const isBrochure = purpose === 'brochure'
  const heading = isBrochure
    ? 'New Company Brochure download'
    : 'New Detailed Machine List request'
  const source = isBrochure
    ? 'Submitted via Pentagon website — Brochure download'
    : 'Submitted via Pentagon website — Means of Production'

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>{heading}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={header}>
            <Text style={brandMark}>PENTAGON</Text>
          </Section>
          <Heading style={h1}>{heading}</Heading>
          <Text style={subtle}>{source}</Text>
          <table style={{ width: '100%', borderCollapse: 'collapse', borderTop: '1px solid #eee' }}>
            <tbody>
              <Row label="Name" value={name} />
              <Row label="Company" value={company} />
              <Row label="Email" value={email} />
              <Row label="Country" value={country} />
              <Row label="Phone" value={phone} />
              <Row label="Notes" value={notes} />
            </tbody>
          </table>
          {referenceId && (
            <Text style={refText}>Reference ID: {referenceId}</Text>
          )}
        </Container>
      </Body>
    </Html>
  )
}

export const template = {
  component: Email,
  subject: (data: Record<string, unknown>) =>
    data.purpose === 'brochure'
      ? `Brochure download — ${data.company ?? 'Unknown'}`
      : `New machine list request — ${data.company ?? 'Unknown'}`,
  displayName: 'Internal request notification',
  to: 'enquiries@sellvindsgroup.com',
  previewData: {
    name: 'Jane Doe',
    company: 'Acme Corp',
    email: 'jane@acme.com',
    country: 'India',
    phone: '+91 90000 00000',
    notes: 'Interested in gear machining capabilities.',
    purpose: 'machine-list',
    referenceId: 'preview-000',
  },
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
const h1: React.CSSProperties = { fontSize: '18px', margin: '0 0 4px 0', color: '#111' }
const subtle: React.CSSProperties = { color: '#666', fontSize: '13px', margin: '0 0 16px 0' }
const labelCell: React.CSSProperties = {
  padding: '6px 12px',
  borderBottom: '1px solid #eee',
  color: '#666',
  fontSize: '13px',
  verticalAlign: 'top',
  width: '30%',
}
const valueCell: React.CSSProperties = {
  padding: '6px 12px',
  borderBottom: '1px solid #eee',
  fontSize: '14px',
  color: '#111',
  whiteSpace: 'pre-wrap',
}
const refText: React.CSSProperties = {
  marginTop: '20px',
  color: '#999',
  fontSize: '12px',
}
