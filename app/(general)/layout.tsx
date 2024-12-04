//lmrc

import { Navbar } from "@/components";

export const metadata = {
    title: 'SEO Title',
    description: 'SEO Title',
};
export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center p-24">
                <span className="taxt-lg">Hello Root and MetaData</span>
                {children}
            </div>
        </>
    );
}
