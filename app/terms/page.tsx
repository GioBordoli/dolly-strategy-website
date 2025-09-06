"use client";

import EnglishLayout from '../layout-en';

export default function TermsPage() {
  return (
    <EnglishLayout>
      <div className="container-custom mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-blue">Terms and Conditions</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Acceptance of Terms</h2>
            <p>By accessing and using this website, you accept and agree to be bound by these Terms and Conditions and our Privacy Policy.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Use of the Site</h2>
            <p>You may use this site for lawful purposes only and in accordance with these Terms. You agree not to use the site in any way that could disable, overburden, damage, or impair the site or interfere with any other party's use of the site.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Intellectual Property</h2>
            <p>All content, features, and functionality on this site, including text, graphics, logos, and images, are owned by Dolly Strategy or its licensors and are protected by applicable intellectual property laws.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Changes to Terms</h2>
            <p>We may revise and update these Terms from time to time in our sole discretion. All changes are effective immediately when we post them.</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Contact</h2>
            <p>If you have any questions about these Terms, contact us at:</p>
            <p className="font-medium">info@dollystrategy.com</p>
            <p>or via our phone number: +39 333 324 9234</p>
          </section>
        </div>
      </div>
    </EnglishLayout>
  );
} 