export default function RefundPolicyPage() {
  return (
    <main className="bg-[#03111F] text-white">
      
      {/* Hero */}
      <section className="relative overflow-hidden py-32">
        
        <div className="absolute left-[-120px] top-10 h-[300px] w-[300px] rounded-full bg-[#086ED0]/20 blur-3xl" />

        <div className="absolute bottom-0 right-[-100px] h-[300px] w-[300px] rounded-full bg-[#FF6D00]/20 blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-6 text-center">
          
          <p className="text-sm uppercase tracking-[6px] text-[#FF6D00]">
            Refund Policy
          </p>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Refund &
            <span className="text-[#086ED0]"> Cancellation </span>
          </h1>

          <p className="mx-auto mt-10 max-w-[850px] text-xl leading-9 text-white/60">
            This Refund Policy explains payment terms, cancellation
            conditions, and refund-related guidelines for all Branding
            Guide services and digital solutions.
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
                <h2 className="text-3xl font-black text-white">
                  No Refund Policy
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Branding Guide follows a strict No Refund Policy.
                  Once payment has been made for any service, design,
                  development, branding, or digital solution, it will
                  not be refunded under any circumstances.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black text-white">
                  Advance Payment Requirement
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Clients are required to pay 50% advance payment before
                  the project begins. This amount covers planning,
                  research, creative work, and project allocation and
                  is completely non-refundable.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black text-white">
                  Final Payment
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  The remaining 50% payment must be completed before
                  final delivery, deployment, or transfer of project
                  files, website access, or design assets.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black text-white">
                  Project Cancellation
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  If a client decides to cancel the project after work
                  has started, no refund will be issued for any payments
                  already made.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black text-white">
                  Revisions & Support
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Reasonable revisions are provided within the agreed
                  project scope. Additional features, redesign requests,
                  or out-of-scope work may require extra charges.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black text-white">
                  Payment Disputes
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Clients are encouraged to contact Branding Guide directly
                  before initiating payment disputes or chargebacks.
                </p>
              </div>

              {/* Section */}
              <div>
                <h2 className="text-3xl font-black text-white">
                  Policy Updates
                </h2>

                <p className="mt-6 text-lg leading-9 text-white/60">
                  Branding Guide reserves the right to modify or update
                  this Refund Policy at any time without prior notice.
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