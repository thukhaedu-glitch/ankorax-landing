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

  useEffect(() => {
    setPlans(fallbackPlans);
  }, []);

  return (
    <div className="pricing-wrapper">
      <div className="pricing-grid">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}
          >
            {plan.popular && <div className="pricing-badge">Most Popular</div>}

            <div className="pricing-header">
              <h3>{plan.name}</h3>

              <div className="pricing-price">
                {plan.price}
                {plan.period && <span>{plan.period}</span>}
              </div>

              <p>{plan.description}</p>
            </div>

            <ul className="pricing-features">
              {plan.features.map((feature) => (
                <li key={feature}>
                  <span>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`pricing-btn ${plan.popular ? "pricing-btn-primary" : ""}`}
              type="button"
            >
              {plan.cta}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
