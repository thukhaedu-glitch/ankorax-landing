import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const APP_URL = 'https://app.ankorax.com';

const FALLBACK = [
  { key: 'free', label: 'Free Trial', price: 0, popular: false, featureList: ['Core modules', 'Draft invoices & quotes', 'Basic dashboards'] },
  { key: 'starter', label: 'Starter', price: 49900, popular: false, featureList: ['Everything in Free', '100 documents / month', 'Standard support'] },
  { key: 'growth', label: 'Growth', price: 69900, popular: true, featureList: ['Full finance module', 'Bank reconciliation', '500 documents / month', 'Priority support'] },
  { key: 'business', label: 'Business', price: 89900, popular: false, featureList: ['Everything in Growth', 'Custom report builder', 'Audit logs', 'Dedicated lead'] },
];

const fmtMMK = (n) => (n === 0 ? 'Free' : Number(n).toLocaleString('en-US'));

export default function Pricing() {
  const [plans, setPlans] = useState(FALLBACK);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDoc(doc(db, 'config', 'plans'));
        if (snap.exists() && Array.isArray(snap.data().plans)) {
          const active = snap.data().plans.filter((p) => p.active !== false);
          if (active.length) setPlans(active);
        }
      } catch (e) {
        console.error("Error loading plans:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16, marginTop: 52, alignItems: 'stretch' }}>
      {plans.map((p) => (
        <div key={p.key} style={{
          border: p.popular ? '1.5px solid var(--ink)' : '1px solid var(--line-strong)',
          borderRadius: 14, background: p.popular ? 'var(--ink)' : 'var(--white)',
          color: p.popular ? 'var(--paper)' : 'var(--ink)',
          padding: '30px 26px', display: 'flex', flexDirection: 'column',
          position: 'relative', boxShadow: p.popular ? '0 24px 48px -28px rgba(20,33,61,0.5)' : 'none',
        }}>
          {p.popular && (
            <span style={{ position: 'absolute', top: -11, left: 26, background: 'var(--accent)', color: 'white', fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 6 }}>Most popular</span>
          )}
          <div style={{ fontWeight: 600, fontSize: 20 }}>{p.label}</div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 14 }}>
            <span style={{ fontWeight: 600, fontSize: 32 }}>{fmtMMK(p.price)}</span>
            {p.price > 0 && <span style={{ fontSize: 13, color: p.popular ? 'rgba(251,250,246,0.6)' : 'var(--text-3)' }}>MMK / mo</span>}
          </div>
          <div style={{ height: 1, background: p.popular ? 'rgba(251,250,246,0.15)' : 'var(--line)', margin: '22px 0' }} />
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 11, flex: 1, margin: 0, padding: 0 }}>
            {(p.featureList || []).map((f, i) => (
              <li key={i} style={{ display: 'flex', gap: 9, fontSize: 13.5, lineHeight: 1.45, color: p.popular ? 'rgba(251,250,246,0.85)' : 'var(--text-2)' }}>
                <span style={{ color: p.popular ? '#e8a87c' : 'var(--green)', flexShrink: 0, fontWeight: 700 }}>✓</span>{f}
              </li>
            ))}
          </ul>
          <a href={`${APP_URL}/signup`} className={p.popular ? 'btn btn-accent' : 'btn btn-ghost'} style={{ marginTop: 26, width: '100%', textAlign: 'center', textDecoration: 'none', display: 'block' }}>
            {p.price === 0 ? 'Start free' : `Choose ${p.label}`}
          </a>
        </div>
      ))}
      <p style={{ gridColumn: '1 / -1', textAlign: 'center', fontSize: 12, color: 'var(--text-3)', marginTop: 28 }}>
        {loading ? 'Loading current prices…' : 'Documents = invoices + quotations combined, per month.'}
      </p>
    </div>
  );
}
