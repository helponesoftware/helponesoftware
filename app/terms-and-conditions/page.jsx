import Hero from '../../components/Hero';

export const metadata = {
    title: 'Terms and Conditions | HelpOne Software',
    description: 'Read the Terms and Conditions for HelpOne Software. Last updated February 25, 2026.',
    alternates: { canonical: 'https://helponesoftware.com/terms-and-conditions/' },
};

const sections = [
    {
        title: 'Terms and Conditions',
        content: (
            <div className="space-y-3 text-white/70 text-sm md:text-base leading-relaxed">
                <p>Effective Date: January 18, 2025</p>
                <p>HelpOne Software<br />108 Village Square<br />Suite 189</p>
                <p>
                    <a href="mailto:legal@helponesoftware.com" className="text-[#00E6C3] hover:underline">
                        legal@helponesoftware.com
                    </a>
                </p>
                <p>
                    This web page represents a legal document and is the Terms and Conditions, from now on called (Agreement) for our website,{' '}
                    <a href="https://www.helponesoftware.com" target="_blank" rel="noopener noreferrer" className="text-[#00E6C3] hover:underline">
                        www.helponesoftware.com
                    </a>
                    , services, mobile app, web app, desktop app hereinafter and collectively referred to as the Website.
                </p>
                <p>
                    By using our Website and any associated services and or applications, you agree to fully comply with and be bound by this Agreement.
                </p>
            </div>
        ),
    },
    {
        title: 'Definitions',
        content: (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                The terms "us", "we", and "our" refer to HelpOne Software, the owner of this Website. The term "Product(s)" refers to any products or services we sell or give away. A "Visitor" is someone who merely browses our Website. A "Member" is someone who has registered with our Website to use our Products. The term "User" is a collective identifier that refers to either a Visitor or a Member. All text, information, graphics, design, and data offered through our Website or Products whether produced by our Members or by us, are collectively known as our "Content". We distinguish content posted by our Members as "Member Content".
            </p>
        ),
    },
    {
        title: 'Eligibility and Registration for Membership',
        content: (
            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                <p>
                    To use our Website and Products, you must register to become a Member. Your Membership is not transferable or assignable and is void where prohibited. Our Website and Products are intended solely for Users who are at least (18) years old or older. Any registration by, use of, or access to our Website and Products by anyone under that age is unauthorized, unlicensed, and in violation of this Agreement. By using our Website and Products, you represent and warrant that you are (18) years old or older and agree to obey all the terms of this Agreement. HelpOne Software has sole right and discretion to decide whether to accept a Member and may reject a Member's registration with or without explanation.
                </p>
                <p>
                    When you complete the registration process, you may receive a password that will allow you to access our Website and Products. You agree to maintain the confidentiality of your password and are fully responsible for all liability and damages resulting from your failure to maintain that confidentiality as well as all activities that occur by using your password.
                </p>
                <p>
                    You agree to immediately tell us of any unauthorized use of your password or any other breach of security. You agree that we cannot and will not be liable for any loss or damage arising from your failure to comply with password security as discussed herein.
                </p>
            </div>
        ),
    },
    {
        title: 'Acceptance of Agreement',
        content: (
            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                <p>This Agreement is between you and HelpOne Software.</p>
                <p className="uppercase text-xs tracking-wide text-white/60 leading-relaxed">
                    THIS AGREEMENT CONTAINS WARRANTY DISCLAIMERS AND OTHER PROVISIONS THAT LIMIT OUR LIABILITY TO YOU. PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY AND IN THEIR ENTIRETY, AS USING, ACCESSING, AND/OR BROWSING OUR WEBSITE CONSTITUTES ACCEPTANCE OF THESE TERMS AND CONDITIONS. IF YOU DO NOT AGREE TO BE BOUND TO EVERY TERM AND CONDITION SET FORTH HERE, PLEASE EXIT OUR WEBSITE IMMEDIATELY AND DO NOT USE ACCESS AND BROWSE IT FURTHER.
                </p>
                <p>
                    Except as otherwise noted, this Agreement makes up the entire and only Agreement between you and HelpOne Software and supersedes all other Agreements, representations, warranties, and understandings about our Website, Products, and the subject matter here. However, for you to use our Website and Products, you may also be required to agree to additional terms and conditions. Those additional terms and conditions will be incorporated into this Agreement unless otherwise stated.
                </p>
            </div>
        ),
    },
    {
        title: 'Privacy Notice',
        content: (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Our Privacy Notice is considered part of this Agreement and is available on this website. You must review our Privacy Notice by clicking on this link. If you do not accept and agree to be bound by all the terms of this Agreement, including the HelpOne Software Privacy Notice, do not use this Website or our Products.
            </p>
        ),
    },
    {
        title: 'Arbitration (This Arbitration Provision is for the U.S. Only)',
        content: (
            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                <p>
                    Any legal controversy or claim arising from or relating to this Agreement and/or our Website and Products, excluding legal action taken by us to collect or recover damages for – or obtain any injunction relating to – website operations, intellectual property, and our Products, will be settled solely by binding arbitration following the commercial arbitration rules of the American Arbitration Association. Any such controversy or claim will be arbitrated on an individual basis and will not be consolidated in any arbitration with any claim or controversy of any other party.
                </p>
                <p>
                    The arbitration will be conducted in Somers, NY and judgment on the arbitration award may be entered into any court having jurisdiction thereof. You or we may seek any interim or preliminary relief from a court of competent jurisdiction in Somers, NY necessary to protect our or your rights or property pending the completion of arbitration. Each party will bear half the arbitration fees and costs.
                </p>
            </div>
        ),
    },
    {
        title: 'Choice of Law and Jurisdiction (This Provision is for the U.S. Only)',
        content: (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                This Agreement will be treated as if it were executed and performed in Somers, NY and will be governed by and construed following the laws of the state of NY without regard to conflict of law provisions. Also, you agree to submit to the personal jurisdiction and venue of such courts. Any cause of action by you about our Website or Products must be instituted within one (1) year after the cause of action arose or be forever waived and barred.
            </p>
        ),
    },
    {
        title: 'Arbitration (This Arbitration Provision is for countries other than the U.S.)',
        content: (
            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                <p>
                    The parties agree that any dispute, controversy, or claim arising out of or in connection with this agreement, or the breach, termination, or invalidity thereof, shall be resolved exclusively through binding arbitration conducted under the International Arbitration Rules. The arbitration shall be held in a neutral location to be agreed upon by the parties, ensuring fairness and impartiality in the dispute resolution process. The number of arbitrators will be Each party will bear half the arbitration fees and costs.
                </p>
                <p>
                    The arbitration award shall be final and binding on the parties, and the parties agree to the enforcement of the award in any competent jurisdiction, under the New York Convention on the Recognition and Enforcement of Foreign Arbitral Awards. The parties expressly waive their right to resolve disputes through national courts, except to enforce this arbitration agreement or the arbitration award. This arbitration provision may only be amended by mutual written consent of the parties.
                </p>
            </div>
        ),
    },
    {
        title: 'Choice of Law and Jurisdiction (For countries other than the U.S.)',
        content: (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                The arbitration shall be governed by the laws of Unites States of America unless otherwise agreed by the parties. The arbitration proceedings shall be conducted in English.
            </p>
        ),
    },
    {
        title: 'Limited License',
        content: (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                HelpOne Software grants you a nonexclusive, nontransferable, revocable license to access and use our Website and Products strictly under this Agreement. Your use of our Website and Products is solely for internal, personal, and noncommercial purposes unless otherwise provided for in this Agreement. No printout or electronic version of any part of our Website or Products may be used by you in any litigation or arbitration matter at all under any circumstances.
            </p>
        ),
    },
    {
        title: 'Legal Compliance',
        content: (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                You agree to comply with all applicable domestic and international laws, statutes, ordinances, and regulations regarding your use of our Website, Content, Products, and any software provided within.
            </p>
        ),
    },
    {
        title: 'Our Relationship with You',
        content: (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                This Agreement in no way creates any agency, partnership, joint venture, or employee-employer or franchisor-franchisee relationship between you and HelpOne Software.
            </p>
        ),
    },
    {
        title: 'Our Intellectual Property',
        content: (
            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                <p>
                    Our Website may contain our service marks or trademarks as well as those of our affiliates or other companies in the form of words, graphics, and logos. Your use of our Website or Products does not constitute any right or license for you to use our service marks or trademarks without the prior written permission of HelpOne Software.
                </p>
                <p>
                    Our Content, as found within our Website and Products, is protected under the United States and foreign copyrights. The copying, redistribution, use, or publication by you of any such Content is strictly prohibited. Your use of our Website and Products does not grant you any ownership rights to our Content.
                </p>
            </div>
        ),
    },
    {
        title: 'Errors, Corrections, and Changes',
        content: (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                We do not represent or otherwise warrant that our Website and Products will be error-free or free from viruses or other harmful components. We do not represent or warrant the information available on or through our Website and Products will be correct, accurate, timely, or reliable. HelpOne Software reserves the right at our sole discretion to change any content, software, and other items used or contained in our Website or Products at any time without notice.
            </p>
        ),
    },
    {
        title: 'Third Parties',
        content: (
            <div className="space-y-4 text-white/70 text-sm md:text-base leading-relaxed">
                <p>
                    Our Website publishes content supplied by third parties, Users, advertisers, merchants, and sponsors. Accordingly, HelpOne Software has no editorial control over such content. Any opinions or other information or content expressed or made available by third parties, including information providers, Users, or any other User of our Website, are those of the respective author(s) and not of HelpOne Software. HelpOne Software does not guarantee the accuracy, completeness, merchantability, or fitness for any particular purpose nor the legality of any content provided by any of these parties.
                </p>
                <p>
                    You understand that we do not operate or control the products or services offered by third-party merchants. These merchants are responsible for all aspects of order processing, fulfillment, billing, and customer service. We are not a party to the transactions entered between you and merchants. You agree that the use of or purchase from such merchants is AT YOUR SOLE RISK AND WITHOUT WARRANTIES OF ANY KIND BY US. All rules, legal documents (including privacy policies), and operating procedures of merchants will apply to you while on any merchant website.
                </p>
                <p>
                    You acknowledge that nothing contained in our Website will constitute financial, investment, legal, and/or other professional advice and that no professional relationship of any kind is created between you and HelpOne Software or our Members. You agree that you will not make any financial, investment, legal, and/or other decision based in whole or in part on anything contained in our Website or Products.
                </p>
            </div>
        ),
    },
    {
        title: 'Financial and Legal Advice',
        content: (
            <p className="text-white/70 text-sm md:text-base leading-relaxed">
                Nothing on this Website constitutes financial, investment, legal, tax, or other professional advice. HelpOne Software is not a licensed financial advisor, attorney, or accountant. Always seek the guidance of a qualified professional before making decisions based on information found on this Website or through our Products.
            </p>
        ),
    },
    {
        title: 'Disclaimer',
        content: (
            <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <p className="uppercase text-xs tracking-wide text-white/60 leading-relaxed">
                    HELPONE SOFTWARE, INCLUDING ALL OUR AFFILIATES, HAS NO LIABILITY AT ALL FOR YOUR USE OF OUR WEBSITE OR PRODUCTS. HELPONE SOFTWARE CAN NOT GUARANTEE AND DOES NOT PROMISE ANY SPECIFIC RESULTS FROM THE USE OF OUR WEBSITE OR PRODUCTS, INCLUDING, BUT NOT LIMITED TO RELATED SOFTWARE. HELPONE SOFTWARE DOES NOT REPRESENT OR WARRANT THAT OUR CONTENT, PRODUCTS, OR ANY SOFTWARE FOUND WITHIN ARE ACCURATE, COMPLETE, RELIABLE, CURRENT, ERROR-FREE, OR FREE FROM VIRUSES OR OTHER HARMFUL COMPONENTS. THEREFORE, YOU SHOULD EXERCISE CAUTION IN THE USE AND DOWNLOADING OF ANY SUCH CONTENT OR SOFTWARE AND USE INDUSTRY-RECOGNIZED SOFTWARE TO DETECT AND REMOVE VIRUSES. ALL RESPONSIBILITY OR LIABILITY FOR ANY DAMAGES CAUSED BY VIRUSES SOMEHOW ATTRIBUTED TO OUR CONTENT, PRODUCTS, AND RELATED SOFTWARE IS DISCLAIMED.
                </p>
                <p className="uppercase text-xs tracking-wide text-white/60 leading-relaxed">
                    WITHOUT LIMITATION, YOU UNDERSTAND AND AGREE THAT YOU DOWNLOAD OR OTHERWISE OBTAIN CONTENT AND RELATED SOFTWARE FROM OR THROUGH OUR WEBSITE OR PRODUCTS AT YOUR OWN RISK AND THAT YOU WILL BE SOLELY RESPONSIBLE FOR YOUR USE OF IT AND ANY DAMAGES TO YOUR MOBILE DEVICE OR COMPUTER SYSTEM, LOSS OF DATA, OR OTHER HARM OF ANY KIND THAT MAY RESULT. WE AND ALL OUR AFFILIATES ARE NOT LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGES (INCLUDING DAMAGES FOR LOSS OF BUSINESS, LOSS OF PROFITS, LITIGATION, OR THE LIKE), WHETHER BASED ON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE NEGATION AND LIMITATION OF DAMAGES SET FORTH ABOVE ARE FUNDAMENTAL ELEMENTS OF THE BASIS OF THE BARGAIN BETWEEN YOU AND HELPONE SOFTWARE.
                </p>
                <p className="uppercase text-xs tracking-wide text-white/60 leading-relaxed">
                    OUR WEBSITE AND PRODUCTS WOULD NOT BE PROVIDED WITHOUT SUCH LIMITATIONS. NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED BY YOU FROM US THROUGH OR FROM OUR WEBSITE OR PRODUCTS SHALL CREATE ANY WARRANTY, REPRESENTATION OR GUARANTEE NOT EXPRESSLY STATED IN THIS AGREEMENT.
                </p>
            </div>
        ),
    },
];

export default function TermsAndConditionsPage() {
    return (
        <>
            {/* HERO */}
            <Hero
                badge="Company • Legal"
                title="Terms and"
                titleAccent="Conditions"
                subtitle="Last updated: February 25, 2026"
            />

            {/* CONTENT */}
            <section className="py-16 md:py-24 bg-black">
                <div className="max-w-4xl mx-auto px-6 md:px-10">
                    <div className="divide-y divide-white/10">
                        {sections.map((section) => (
                            <div key={section.title} className="py-10 md:py-14">
                                <h2 className="heading-font text-2xl md:text-3xl font-bold text-white mb-6">
                                    {section.title}
                                </h2>
                                {section.content}
                            </div>
                        ))}
                    </div>

                    {/* Contact note */}
                    <div className="pt-10 pb-4 border-t border-white/10">
                        <p className="text-white/50 text-sm">
                            If you have any questions about these Terms, please contact us at{' '}
                            <a href="mailto:legal@helponesoftware.com" className="text-[#00E6C3] hover:underline">
                                legal@helponesoftware.com
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* TEAL CTA */}
            <section className="py-20 md:py-28 bg-[#00E6C3] text-center">
                <div className="max-w-screen-xl mx-auto px-6 md:px-10">
                    <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-[#0A1428] mb-10">
                        Questions about our<br />Terms?
                    </h2>
                    <a
                        href="/contact-us"
                        className="inline-flex items-center justify-center px-10 py-5 bg-[#0A1428] hover:bg-black text-white text-lg font-semibold rounded-2xl transition-colors [text-decoration:none]"
                    >
                        Contact Us
                    </a>
                </div>
            </section>
        </>
    );
}
