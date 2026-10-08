export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-[#FDF9F3] pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-10 sm:p-14 rounded-[2rem] border border-[#17343A]/10 shadow-[0_12px_24px_rgba(0,0,0,0.03)] text-[#3D585E]">
        <h1 className="text-3xl font-bold text-[#17343A] mb-8">Legal Disclaimer</h1>
        <div className="space-y-6 text-sm leading-relaxed">
          <p>Last Updated: {new Date().toLocaleDateString()}</p>
          
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">Health & Nutrition Disclaimer</h2>
          <p>The information provided on this website, including dietary suggestions, body scanner results, and product recommendations, is for informational purposes only. It is not intended to diagnose, treat, cure, or prevent any disease. Always consult your physician or other qualified health provider with any questions you may have regarding a medical condition.</p>
          
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">Herbalife Income & Weight Loss Disclaimer</h2>
          <p>Consumers who use Herbalife Formula 1 twice per day as part of a healthy lifestyle can generally expect to lose around 0.5 to 1 pound per week. Participants in a 12-week single-blind study used Formula 1 twice per day (once as a meal and once as a snack) with a reduced-calorie diet and a goal of 30 minutes of exercise per day. Participants followed either a high-protein diet or a standard-protein diet. Participants in both groups lost about 8.5 pounds.</p>
          <p>Income applicable to the individuals (or examples) depicted and not average. For average financial performance data, see the Statement of Average Gross Compensation Paid by Herbalife at Herbalife.com.</p>
          
          <h2 className="text-xl font-bold text-[#17343A] mt-8 mb-4">Independent Distributor</h2>
          <p>This website is owned and operated by an Independent Herbalife Distributor, not Herbalife International of America, Inc.</p>
        </div>
      </div>
    </div>
  );
}
