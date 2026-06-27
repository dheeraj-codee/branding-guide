export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#03111F] text-white">
      
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        
        <div className="absolute left-[-120px] top-10 h-[300px] w-[300px] rounded-full bg-[#086ED0]/20 blur-3xl" />

        <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          
          <p className="text-sm uppercase tracking-[6px] text-[#FF6D00]">
            Privacy Policy
          </p>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Your Privacy
            <span className="text-[#086ED0]"> Matters </span>
            To Us
          </h1>

          <p className="mx-auto mt-10 max-w-[850px] text-xl leading-9 text-white/60">
            At Branding Guide, we value your trust and are committed
            to protecting your personal information and maintaining
            complete transparency regarding how your data is used.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1100px] px-6">
          
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16">
            
            <div className="space-y-14">
              
              <div>
                <h2 className="text-3xl font-black text-white">
                  Information We Collect
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  We may collect personal information such as your
                  name, email address, phone number, project details,
                  and other information you voluntarily provide through
                  our contact forms or communication channels.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-white">
                  How We Use Your Information
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Your information is used to provide our services,
                  communicate with you regarding projects, improve
                  user experience, and deliver professional support.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-white">
                  Data Security
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  We implement industry-standard security measures to
                  protect your information from unauthorized access,
                  misuse, or disclosure.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-white">
                  Cookies & Analytics
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Our website may use cookies and analytics tools to
                  improve functionality, analyze traffic, and enhance
                  user experience.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-white">
                  Policy Updates
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Branding Guide reserves the right to update or modify
                  this Privacy Policy at any time.
                </p>
              </div>

              {/* Contact Section */}
              <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#086ED0]/10 to-[#FF6D00]/10 p-8">
                
                <p className="text-sm uppercase tracking-[4px] text-[#FF6D00]">
                  Need Help?
                </p>

                <h2 className="mt-4 text-3xl font-black text-white">
                  Contact Branding Guide
                </h2>

                <p className="mt-5 max-w-[700px] text-lg leading-8 text-white/60">
                  If you have any questions regarding our policies,
                  payments, refunds, or services, feel free to
                  contact our support team anytime.
                </p>

                <div className="mt-8 grid gap-5 md:grid-cols-3">
                  
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[3px] text-[#086ED0]">
                      Email
                    </p>

                    <h3 className="mt-2 text-base font-semibold text-white">
                      support@brandingguide.com
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[3px] text-[#FF6D00]">
                      Phone
                    </p>

                    <h3 className="mt-2 text-base font-semibold text-white">
                      +91 98765 43210
                    </h3>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                    <p className="text-xs uppercase tracking-[3px] text-white/50">
                      Location
                    </p>

                    <h3 className="mt-2 text-base font-semibold text-white">
                      Kishangarh, Ajmer
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}