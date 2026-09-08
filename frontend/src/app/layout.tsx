import './globals.css';
import type { Metadata } from 'next';
import { AuthProvider } from '../context/AuthContext';

export const metadata: Metadata = {
  title: 'NyayPath | Personalized Legal & Grievance Navigator',
  description: 'AI-driven citizen empowerment platform providing instant jurisdictional routing, legal summaries, draft complaint letters, and statutory escalation timelines.',
  keywords: ['NyayPath', 'Legal Navigator', 'Grievance Redressal', 'CPGRAMS', 'India Law', 'Citizen Rights', 'RTI Act'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col bg-nyay-dark text-slate-100 antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
