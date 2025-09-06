import EnglishLayout from '../layout-en';

export default function PrivacyPolicy() {
  return (
    <EnglishLayout>
      <div className="container-custom mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary-blue">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Introduction</h2>
            <p>Dolly Strategy ("we," "our," or "us") respects your privacy and is committed to protecting it through our compliance with this policy. This Privacy Policy describes the types of information we may collect from you or that you may provide when you visit our website (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Information We Collect</h2>
            <p>We collect several types of information from and about users of our Website, including information:</p>
            <ul className="list-disc pl-8 mb-4">
              <li>By which you may be personally identified, such as name, email address, telephone number ("personal information");</li>
              <li>That is about you but individually does not identify you, such as your company name, industry, and job title;</li>
              <li>About your internet connection, the equipment you use to access our Website, and usage details.</li>
            </ul>
            <p>We collect this information:</p>
            <ul className="list-disc pl-8">
              <li>Directly from you when you provide it to us.</li>
              <li>Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Use of Your Information</h2>
            <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
            <ul className="list-disc pl-8">
              <li>To present our Website and its contents to you.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To fulfill the purposes for which you provided the information or that were described when it was collected.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our Website or any products or services we offer or provide through it.</li>
              <li>In any other way we may describe when you provide the information.</li>
              <li>For any other purpose with your consent.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Disclosure of Your Information</h2>
            <p>We may disclose aggregated information about our users, and information that does not identify any individual, without restriction. We may disclose personal information that we collect or you provide as described in this privacy policy:</p>
            <ul className="list-disc pl-8">
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Dolly Strategy's assets.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
            </ul>
            <p>We may also disclose your personal information:</p>
            <ul className="list-disc pl-8">
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              <li>To enforce or apply our terms of use and other agreements.</li>
              <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Dolly Strategy, our customers, or others.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Data Security</h2>
            <p>We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure. Unfortunately, the transmission of information via the internet is not completely secure. Although we do our best to protect your personal information, we cannot guarantee the security of your personal information transmitted to our Website. Any transmission of personal information is at your own risk.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Changes to Our Privacy Policy</h2>
            <p>It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you through a notice on the Website home page. The date the privacy policy was last revised is identified at the top of the page.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-blue">Contact Information</h2>
            <p>To ask questions or comment about this privacy policy and our privacy practices, contact us at:</p>
            <p className="font-medium">info@dollystrategy.com</p>
            <p>or via our phone number: +39 333 324 9234</p>
          </section>
        </div>
      </div>
    </EnglishLayout>
  );
} 