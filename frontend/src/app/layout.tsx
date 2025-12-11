import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'XSIAM SOC MSSP Platform',
  description: 'World-Class SOC Investigation & MSSP Management Platform powered by Palo Alto Cortex XSIAM APIs',
  keywords: ['SOC', 'MSSP', 'XSIAM', 'Security', 'Incident Response', 'Threat Hunting', 'Cybersecurity'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
