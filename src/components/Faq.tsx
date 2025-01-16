import {Accordion} from './accordion.tsx';

export default function Faq() {
    return (
        <div className="bg-[#f7f7f7]">
            <section
                className="max-w-screen-2xl m-auto w-full px-3 sm:px-8 lg:px-16 xl:px-32 flex flex-col gap-12 py-12 2xl:py-16">
                <div className="flex justify-between">
                    <h3 className="text-4xl font-semibold text-slate-950">
                        FAQ
                    </h3>
                </div>
                <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
                    <Accordion
                        items={[
                            {
                                content: <p><strong>ONOX</strong> helps students from abroad apply to universities in
                                    Europe. We assist with documentation, visa applications, and settling in the
                                    country.</p>,
                                label: 'What services does ONOX provide?'
                            },
                            {
                                content: <><p>Currently, we specialize in sending students to Poland, but we’re
                                    expanding to other European countries soon.</p></>,
                                label: 'Which countries can I apply to through ONOX?'
                            },
                            {
                                content: <><p>Currently, we specialize in sending students to Poland, but we’re
                                    expanding to other European countries soon.</p></>,
                                label: 'Can you guarantee my admission to a university?'
                            }
                        ]}
                    />
                    <Accordion
                        items={[
                            {
                                content: <p>Click the “Apply Now” button on our website, fill in the application form,
                                    and our team will contact you within 24 hours.</p>,
                                label: 'How do I apply to a university through ONOX?'
                            },
                            {
                                content: <><p className={`mb-1`}>Basic documents include:</p>
                                    <ul className="ml-4 list-inside list-disc space-y-0.5">
                                        <li>
                                            <strong>Passport</strong>
                                        </li>
                                        <li>
                                            <strong>Academic transcripts</strong>
                                        </li>
                                        <li>
                                            <strong>Language proficiency certificates (if required)</strong>
                                        </li>
                                        <li>
                                            <strong>A motivational letter</strong>
                                        </li>
                                    </ul>
                                </>,
                                label: 'What documents do I need to apply?'
                            },
                            {
                                content: <><p>It depends on the university and country. Typically, it takes 2–6 weeks
                                    after submitting all required documents.</p></>,
                                label: 'How long does the application process take?'
                            }
                        ]}
                    />
                    <Accordion
                        items={[
                            {
                                content: <p>Yes, we can assist with universities outside our partnerships, provided they
                                    meet your requirements.</p>,
                                label: 'Can I apply to a university not listed on the website?'
                            },
                            {
                                content: <><p>You can reach us via email, phone, or the “Contact Us” section on our
                                    website.</p></>,
                                label: 'How do I contact ONOX?'
                            },
                            {
                                content: <><p>We help with visa processing, finding accommodation, and settling in your
                                    chosen city.</p></>,
                                label: 'What support do you provide after admission?'
                            }
                        ]}
                    />
                </div>
            </section>
        </div>
    );
};