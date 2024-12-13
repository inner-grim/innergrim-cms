import type { Metadata } from 'next';
import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { meta_data } from '@/common/enums';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: meta_data.META_TITLE,
  description: meta_data.META_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansKr.className}>{children}</body>
    </html>
  );
}
