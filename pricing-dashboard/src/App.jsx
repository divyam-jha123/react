import "./App.css";
import check from "./assets/check.png";
export default function App() {
  return (
    <div className="min-h-screen py-12">               
      <h2 className="text-3xl font-bold text-center mb-10">Pricing</h2>
      <div className="flex justify-center gap-8 flex-wrap px-4">
        <PriceComponent planType={"Basic"} Price={20} />
        <PriceComponent planType={"Advanced"} Price={299} />
        <PriceComponent planType={"Enterprise"} Price={499} />
      </div>
    </div>
  );
}

const PriceComponent = ({ planType, Price }) => {

  const featuresOption = {
    Basic: [
      "Unlimited updates",
      "Git repository",
      "npm installations",
    ],
    Advanced: [
      "Unlimited updates",
      "Git repository",
      "npm installations",
      "Custom domain",
      "Priority support",
      "Analytics dashboard",
    ],
    Enterprise: [
      "Unlimited updates",
      "Git repository",
      "npm installations",
      "Custom domain",
      "Priority support",
      "Analytics dashboard",
      "Dedicated server",
      "24/7 phone support",
    ],
  };

  const features = featuresOption[planType] || []

  console.log(features);

  return (
    <div className="bg-white w-96 rounded-xl shadow-lg overflow-hidden shadow-lg hover:shadow-xl">
      <div className="text-center p-6">
        <p className="text-gray-700 font-semibold tracking-wide">{planType}</p>

        <div className="mt-4">
          <span className="text-4xl font-bold">${Price}</span>
          <span className="text-gray-500">/year</span>
        </div>

        <button className="mt-6 w-full bg-blue-200 text-blue-900 py-2 rounded-full font-medium hover:bg-blue-300 transition cursor-pointer">
          BUY
        </button>
      </div>

      <div className="border-t border-gray-200 mx-6"></div>

      {/* features */}

      <div className="p-6 space-y-4 text-gray-600">
        <p className="text-sm font-semibold text-gray-700 uppercase">
          What's included:
        </p>
        {features.map((feature, idx) => {
          return (
            <div key={idx } className="flex items-center gap-3">
              <img src={check} alt="check-img" className="h-4 w-4" />
              <p>{feature}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};
