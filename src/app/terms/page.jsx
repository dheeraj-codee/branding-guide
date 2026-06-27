export default function TermsPage() {
  return (
    <main className="bg-[#03111F] text-white">
      
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        
        <div className="absolute left-[-120px] top-10 h-[300px] w-[300px] rounded-full bg-[#086ED0]/20 blur-3xl" />

        <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          
          <p className="text-sm uppercase tracking-[6px] text-[#FF6D00]">
            Terms of Service
          </p>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Terms &
            <span className="text-[#086ED0]"> Conditions </span>
          </h1>

          <p className="mx-auto mt-10 max-w-[850px] text-xl leading-9 text-white/60">
            These Terms of Service outline the rules, responsibilities,
            and conditions regarding the use of Branding Guide services.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="mx-auto max-w-[1100px] px-6">
          
          <div className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-xl md:p-16">
            
            <div className="space-y-14">
              
              {/* Section */}
              <div>
                <h2 className="text-3xl font-black">
                  Project Agreement
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  By working with Branding Guide, clients agree to
                  provide accurate project details, timely feedback,
                  and required content necessary for project completion.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black">
                  Payment Terms
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  We require 50% advance payment before starting any
                  project and the remaining 50% payment before final
                  website deployment or project delivery.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black">
                  Revisions & Changes
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Reasonable revisions are included within the agreed
                  project scope. Major design or functionality changes
                  requested after approval may result in additional charges.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black">
                  Support & Maintenance
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Branding Guide provides support for minor updates,
                  bug fixes, and basic assistance after project completion.
                  Major redesigns or additional development work are not
                  included in free support services.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black">
                  Project Timeline
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Project timelines may vary depending on project size,
                  complexity, and client response times. Delays in
                  providing content or approvals may affect delivery dates.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black">
                  Intellectual Property
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Final project ownership is transferred to the client
                  only after full payment has been completed. Branding
                  Guide reserves the right to showcase completed work
                  in portfolios or promotional materials.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black">
                  Limitation of Liability
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Branding Guide is not responsible for any indirect,
                  incidental, or business-related losses resulting from
                  the use of our services, websites, or digital assets.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black">
                  Changes To Terms
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  We reserve the right to update or modify these Terms
                  of Service at any time without prior notice.
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