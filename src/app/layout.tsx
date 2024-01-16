import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/main.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'DnD Character Picker',
    description: 'DnD Character Picker',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
