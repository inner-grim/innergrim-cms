import type { Metadata } from 'next';
import '@/styles/globals.css';
import '@/styles/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { meta_data } from '@/common/enums';
import { Heebo, Noto_Sans_KR } from 'next/font/google';
import SideBar from '@/components/navigation/SideBar';

const heebo = Heebo({
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
      <body className={heebo.className}>
        <SideBar />
        {children}
      </body>
    </html>
  );
}
