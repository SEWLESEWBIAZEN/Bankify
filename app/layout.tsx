import type { Metadata } from 'next'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Bankify",
    description: "Bankify",
    keywords: "LCMS - Dashboard, dashboard ui",
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    return (
        <html lang="en">
            <body className={inter.className}>

                {children}

            </body>
        </html>
    )
}
