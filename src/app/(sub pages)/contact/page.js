import Image from "next/image";
import bg from "../../../../public/background/contactbg.png";
import Form from "@/components/contact/Form";





export default function Home() {
    return (
        <>

            <Image  priority sizes="100vw" src={bg} alt="background-image" className="w-full fixed h-screen top-0 left-0 object-cover object-center opacity-30" />



            <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
                <div className="flex flex-col items-center justify-center  space-y-6 w-full sm:*:w-3/4">
                    <h1 className="text-accent font-semibold text-center text-2xl sm:text-4xl capitalize">summon the wizard</h1>
                    <p className="text-center font-light text-sm sm:text-base">
                        Brave traveler, do you seek wisdom, collaboration, or a touch of digital enchantment? Simply inscribe your message in the mystical form below, and with a whisper of code, your words shall find me. No need for enchanted scrolls or messenger ravens, just type, send, and let the magic unfold!</p>
                </div>
                <Form />
            </article>

        </>
    );
}
