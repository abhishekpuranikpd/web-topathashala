import React from 'react'
import Link from 'next/link'
import { ArrowLeftFromLine } from 'lucide-react';

const TermPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <Link href="/" className='item-center flex font-bold text-primary'><ArrowLeftFromLine />Back</Link>
        <div className="rounded-md p-4 shadow-md">
          <h1 className="item-center mb-4 text-2xl font-semibold text-primary">Terms Of Service</h1>
          <h1 className="mb-4 text-2xl font-semibold text-primary">Welcome to ToPathashala!</h1>
          <p className="mb-8">
            Before you dive into our education software suite, please take a moment to read through these terms. By using ToPathashala, you&apos;re agreeing to these terms. We&apos;re thrilled to have you on board.
          </p>
          <ol className="list-inside list-decimal space-y-4">
            <li>
              <strong>Acceptance of Terms:</strong> When you use ToPathashala, you&apos;re agreeing to abide by these terms. Make sure you read them carefully.
            </li>
            <li>
              <strong>User Accounts:</strong> Keep your account information confidential. You&apos;re responsible for any activity under your account.
            </li>
            <li>
              <strong>Usage Restrictions:</strong> ToPathashala is designed to enhance your learning experience. Please don&apos;t misuse it for unlawful purposes or violate any laws.
            </li>
            <li>
              <strong>Content Ownership:</strong> Anything you upload or create on ToPathashala is yours. We don&apos;t claim ownership of your content.
            </li>
            <li>
              <strong>Data Accuracy:</strong> Your input matters. Please provide accurate and reliable information when using ToPathashala.
            </li>
            <li>
              <strong>Intellectual Property:</strong> We&apos;ve put a lot of effort into developing ToPathashala. The software and its associated rights belong to us.
            </li>
            <li>
              <strong>Service Availability:</strong> While we strive for uninterrupted service, there might be occasional downtime for maintenance or updates.
            </li>
            <li>
              <strong>User Support:</strong> If you encounter any technical issues, don&apos;t hesitate to reach out to our support team. We&apos;re here to help.
            </li>
            <li>
              <strong>Payment and Refunds:</strong> If there&apos;s a payment involved, we&apos;ll clearly communicate the details, including pricing and refund policies.
            </li>
            <li>
              <strong>Termination:</strong> We hope it never comes to this, but we reserve the right to suspend or terminate access to ToPathashala if there&apos;s a violation of these terms.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default TermPage