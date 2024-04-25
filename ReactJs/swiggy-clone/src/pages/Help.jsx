import React, { useState } from 'react';
import Container from '../Components/Container';
import { PiCaretDownLight } from "react-icons/pi";

export default function Help() {
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const [showCancellationsRefunds, setShowCancellationsRefunds] = useState(false);
    const [showSwiggyOnTimeTerms, setShowSwiggyOnTimeTerms] = useState(false);



    return (
        <>
            <div className='bg-[#282c3f]  text-white my-10'>
                <Container>
                    <div className='leading-tight p-6'>
                        <h1 className='font-bold text-3xl'>Help & Support</h1>
                        <p className='text-[16px]'>Let's take a step ahead and help you better.</p>
                    </div>
                    <div className='bg-white shadow-lg grid grid-cols-4'>
                        <div className='col-span-1 border shadow-lg bg-slate-300'>
                            <div className='shadow-xl p-4 text-center bg-white text-black text-[16px]'>Partner Onboarding</div>
                            <div className='text-black text-center leading-[170px]'>Legal</div>
                            <div className='text-black text-center leading-[170px]'>FAQs</div>
                        </div>
                        <div className='col-span-3 p-3'>
                            <SectionToggle title="Terms of Use" content="These terms of use (the 'Terms of Use') govern your use of our website www.swiggy.in (the 'Website') and our 'Swiggy' application for mobile and handheld devices (the 'App'). The Website and the App are jointly referred to as the 'Services'). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same." show={showTerms} setShow={setShowTerms} />
                            <SectionToggle title="Privacy Policy" content="These terms of use (the 'Terms of Use') govern your use of our website www.swiggy.in (the 'Website') and our 'Swiggy' application for mobile and handheld devices (the 'App'). The Website and the App are jointly referred to as the 'Services'). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same." show={showPrivacyPolicy} setShow={setShowPrivacyPolicy} />
                            <SectionToggle title="Cancellations and Refunds" content="These terms of use (the 'Terms of Use') govern your use of our website www.swiggy.in (the 'Website') and our 'Swiggy' application for mobile and handheld devices (the 'App'). The Website and the App are jointly referred to as the 'Services'). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same." show={showCancellationsRefunds} setShow={setShowCancellationsRefunds} />
                            <SectionToggle title="Terms of Use for Swiggy ON-TIME / Assured" content="These terms of use (the 'Terms of Use') govern your use of our website www.swiggy.in (the 'Website') and our 'Swiggy' application for mobile and handheld devices (the 'App'). The Website and the App are jointly referred to as the 'Services'). Please read these Terms of Use carefully before you download, install or use the Services. If you do not agree to these Terms of Use, you may not install, download or use the Services. By installing, downloading or using the Services, you signify your acceptance to the Terms of Use and Privacy Policy (being hereby incorporated by reference herein) which takes effect on the date on which you download, install or use the Services, and create a legally binding arrangement to abide by the same." show={showSwiggyOnTimeTerms} setShow={setShowSwiggyOnTimeTerms} />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

function SectionToggle({ title, content, show, setShow }) {
    return (
        <>
            <div className='flex justify-between items-center border text-black mt-6'>
                <span className='hover:text-red-600 p-3'>{title}</span>
                <PiCaretDownLight style={{ transform: show ? "rotate(180deg)" : "" }} fontSize={35} onClick={() => setShow(!show)} />
            </div>
            {
                show ? <p className='text-black'>{content}</p> : ""
            }
        </>
    );
}
