export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 sm:p-14 rounded-[2rem] border border-[#17343A]/10 shadow-[0_12px_24px_rgba(0,0,0,0.03)] text-[#3D585E]">
        <h1 className="text-3xl font-bold text-[#17343A] mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-sm leading-relaxed">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">1. Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services. This may include your name, email address, phone number, and any health/wellness goals you share.</p>
          
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">2. How We Use Your Information</h2>
          <p>We use personal information collected to facilitate account creation, fulfill and manage your orders, respond to user inquiries, send administrative information, and provide wellness evaluations (like the Body Scanner).</p>
          
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">3. Third-Party Sharing</h2>
          <p>As an independent distributor, some of your information may be shared with Herbalife Nutrition to process orders or manage your preferred member account, in accordance with their privacy policies. We do not sell your personal data to other third parties.</p>
          
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">4. Contact Us</h2>
          <p>If you have questions or comments about this notice, you may contact us at our Pembroke Pines location or via WhatsApp.</p>
        </div>
      </div>
    </div>
  );
}
