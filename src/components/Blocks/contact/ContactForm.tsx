import type { ApiData } from "@/interfaces/dbData"

interface ContactFormProps {
    dataGlobal: ApiData;
    formStyles?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ dataGlobal, formStyles }) => {
    return (
        <div className={formStyles}>
            {/* @ts-ignore */}
            <form-contact
                to={dataGlobal.dataGeneral.emails.map((email) => email.email).join(",")}
                services={
                    // anidarlos con un join
                    dataGlobal.services.map((service) => service.title).join(",")
                }
                server="https://email-server-r-8fb46242f2ca.herokuapp.com/email"
                img={dataGlobal.logos.primary}
                emailcolor="1"
                isenglish="true"
            >
                {/* @ts-ignore */}

            </form-contact>
        </div>
    )
}

export default ContactForm