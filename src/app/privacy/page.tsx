import React from 'react'
import Link from 'next/link'
import { ArrowLeftFromLine } from 'lucide-react';

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className='item-center flex font-bold text-primary'><ArrowLeftFromLine />Back</Link>
        <div className="rounded-md shadow-md">
          <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-4 text-2xl font-semibold text-primary">Privacy Policy</h1>
              <p className="mb-8">Protecting your privacy is a priority at ToPathashala. Here&apos;s how we handle your data:</p>
              <ol className="list-inside list-decimal space-y-4">
                <li><strong>Data Collection:</strong> We collect certain information when you use ToPathashala. This includes personal details and usage data that help us improve the software.</li>
                <li><strong>Data Usage:</strong> The information we collect is used to enhance your experience with ToPathashala. It helps us tailor content and features to your preferences.</li>
                <li><strong>Data Sharing:</strong> Your data won&apos;t be shared with third parties without your consent, except in cases where the law requires it.</li>
                <li><strong>Data Security:</strong> Safeguarding your data is crucial. We implement industry-standard security measures to protect it from unauthorized access.</li>
                <li><strong>Cookies and Tracking:</strong> To enhance your user experience, we use cookies and similar technologies. These help us understand how you interact with ToPathashala.</li>
                <li><strong>User Rights:</strong> You have the right to access, correct, and delete your personal data. If you have questions or concerns, contact us. We&apos;re here to assist.</li>
                <li><strong>Third-Party Links:</strong> ToPathashala may contain links to external websites. Please note that we&apos;re not responsible for their privacy practices.</li>
                <li><strong>Children&apos;s Privacy:</strong> ToPathashala is intended for users over the age of 13. We do not knowingly collect data from children under 13.</li>
                <li><strong>Changes to Privacy Policy:</strong> If we make changes to our privacy policy, we&apos;ll notify you so you&apos;re always informed.</li>
                <li>
                  <strong>Contact Information:</strong> If you have any privacy-related questions or concerns, feel free to reach out to our dedicated privacy team at{' '}
                  <a href="mailto:privacy@topathashala.com" className="text-primary"></a>.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage