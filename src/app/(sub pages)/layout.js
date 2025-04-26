////whenever you create a page in this subpages folder it will have an  effect on layout.js but it will not have any effect
///outside if this folder(sub pages), this group also will not create seprate URL bc it is using (parantesis),
//  this is how you can group diffrent type of pagess and havfe them applied to the same layout file
///we should not name is rootlayout since we have only one root layout 

import HomeButton from "@/components/HomeButton";


export default function SubPagesLayout({ children }) {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center px-8 sx:px-16 lg:px-32 py-20">

            {children}
            <HomeButton />
        </main>
    );
}
