import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageHero from "@/components/PageHero";

/**
 * App-owner maintained. Names the analytics tools in use so it stays truthful
 * as scripts are added/removed. Update when tooling changes.
 */
export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <PageHero title="Privacy Policy" subtitle="How we handle information you share with us and what we collect through this site." />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-neutral">
        <p className="text-sm text-muted-foreground">

          This page is maintained by Pentagon Machines &amp; Services Pvt. Ltd. Last updated: {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}.
        </p>

        <h2>Who we are</h2>
        <p>
          Pentagon Machines &amp; Services Pvt. Ltd., Chennai, India. For any data-related request, write to{" "}
          <a href="mailto:enquiries@sellvindsgroup.com">enquiries@sellvindsgroup.com</a>.
        </p>

        <h2>What we collect through forms</h2>
        <p>
          The Contact / RFQ form, Machine List Request dialog, and Careers form collect the details you enter (name, company, email, phone, message, and, for careers, resume link or details). These are sent to us by email only. We do not store form submissions in a CRM or third-party database.
        </p>

        <h2>Analytics tools</h2>
        <p>With your consent, this site loads the following analytics scripts:</p>
        <ul>
          <li><strong>Google Analytics 4</strong> — aggregate usage statistics (pages viewed, referrers, device class).</li>
          <li><strong>Microsoft Clarity</strong> — anonymised session recordings and heatmaps to understand how visitors interact with the site.</li>
          <li><strong>LinkedIn Insight Tag</strong> — allows us to understand which pages visitors from LinkedIn visit and, in future, run retargeted campaigns.</li>
        </ul>
        <p>
          None of these load before you accept the analytics category in the cookie banner. If you reject analytics, no tracking scripts are loaded.
        </p>

        <h2>Cookies</h2>
        <p>
          We use two cookie categories: <em>strictly necessary</em> (required for the site to function) and <em>analytics</em> (the tools listed above). You can change your choice at any time by clearing this site&apos;s cookies and reloading — the banner will appear again.
        </p>

        <h2>Your rights</h2>
        <p>
          You may request access to, correction of, or deletion of information you have sent us. Email{" "}
          <a href="mailto:enquiries@sellvindsgroup.com">enquiries@sellvindsgroup.com</a> and we will respond within a reasonable timeframe.
        </p>

        <h2>Retention</h2>
        <p>
          Form submissions arriving by email are retained for as long as needed to respond to your enquiry and for legitimate business record-keeping. Analytics data is retained per each provider&apos;s default settings.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy: <a href="mailto:enquiries@sellvindsgroup.com">enquiries@sellvindsgroup.com</a>.
        </p>
      </main>
      <SiteFooter />
    </div>
  );
}
