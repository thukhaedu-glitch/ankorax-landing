import { useEffect, useState } from "react";

const fallbackPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "Free",
    description: "Perfect for freelancers and new businesses.",
    features: [
      "Up to 50 invoices",
      "Basic quotations",
      "Expense tracking",
      "Dashboard overview",
      "Email support",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    id: "business",
    name: "Business",
    price: "$9",
    period: "/month",
    description: "For growing SMEs that need more control.",
    features: [
      "Unlimited invoices",
      "Unlimited quotations",
      "Advanced reports",
      "Client management",
      "Expense management",
      "Team members",
      "Priority support",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: "Custom",
    description: "For larger organizations and teams.",
    features: [
      "Everything in Business",
      "Custom roles & permissions",
      "Multi-branch support",
      "Dedicated onboarding",
      "Custom integrations",
      "Account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [plans, setPlans] = useState(fallbackPlans);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPricing = async () => {
      try {
        setLoading(true);

        // Firebase pricing fetch
        // Keep your existing Firebase code here if already connected.
        // Example:
        //
        // const snapshot = await getDocs(collection(db, "pricing"));
        // const data = snapshot.docs.map(doc => ({
        //   id: doc.id,
        //   ...doc.data()
        // }));
        //
        // if(data.length) setPlans(data);

      } catch (error) {
        console.log("Using fallback pricing", error);
      } finally {
        setLoading(false);
      }
    };

    loadPricing();
  }, []);

  return (
    <section className="pricing-wrapper">
      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`pricing-card ${
              plan.popular ? "pricing-card-popular" : ""
            }`}
          >
            {plan.popular && (
              <div className="pricing-badge">
                Most Popular
              </div>
            )}

            <div className="pricing-header">
              <h3>{plan.name}</h3>

              <div className="pricing-price">
                {plan.price}
                {plan.period && (
                  <span>{plan.period}</span>
                )}
              </div>

              <p>{plan.description}</p>
            </div>

            <ul className="pricing-features">
              {plan.features.map((feature, index) => (
                <li key={index}>
                  ✓ {feature}
                </li>
              ))}
            </ul>

            <button
              className={
                plan.popular
                  ? "pricing-btn pricing-btn-primary"
                  : "pricing-btn"
              }
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>

      {loading && (
        <div className="pricing-loading">
          Loading pricing...
        </div>
      )}
    </section>
  );
}
