export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 sm:p-14 rounded-[2rem] border border-[#17343A]/10 shadow-[0_12px_24px_rgba(0,0,0,0.03)] text-[#3D585E]">
        <h1 className="text-3xl font-bold text-[#17343A] mb-8">Terms of Service</h1>
        <div className="space-y-6 text-sm leading-relaxed">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this website&apos;s particular services, you shall be subject to any posted guidelines or rules applicable to such services.</p>
          
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">2. Products and Services</h2>
          <p>Smart Snack Nutrition offers nutritional beverages and snacks. All products are subject to availability. We reserve the right to discontinue any product at any time.</p>
          
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">3. Herbalife Independent Distributor</h2>
          <p>This website is operated by an Independent Herbalife Distributor. It is not the official corporate website of Herbalife International of America, Inc.</p>
        </div>
      </div>
    </div>
  );
}
