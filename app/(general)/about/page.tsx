import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About Page',
    description: 'Page that shows our about information',
    keywords: ['About Page', 'Information', '...']
};

export default function AboutPage() {
    return (
        <>
            <span>AboutPage</span>
        </>
    )
}