import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { STRINGS } from '../strings.js'

const APP_URL = 'https://app.ankorax.com'

const FALLBACK = [
  { key: 'free', label: 'Free Trial', price: 0, popular: false, featureList: ['Core modules', 'Draft invoices & quotes', 'Basic dashboards'] },
  { key: 'starter', label: 'Starter', price: 49900, popular: false, featureList: ['Everything in Free', '100 documents / month', 'Standard support'] },
  { key: 'growth', label: 'Growth', price: 69900, popular: true, featureList: ['Full finance module', 'Bank reconciliation', '500 documents / month', 'Priority support'] },
  { key: 'business', label: 'Business', price: 89900, popular: false, featureList: ['Everything in Growth', 'Custom report builder', 'Audit logs', 'Dedicated lead'] },
]

const fmtNum = (n) => Number(n).toLocaleString('en-US')

export default function Pricing() {
  const [plans, setPlans] = useState(FALLBACK)
  const [loading, setLoading] = useState(true)
  const [lang, setLang] = useState('en')

  useEffect(() => {
    try { const l = localStorage.getItem('lang'); if (l) setLang(l) } catch (e) {}
    const onLang = () => { try { const l = localStorage.getItem('lang'); if (l) setLang(l) } catch (e) {} }
    window.addEventListener('storage', onLang)
    const interval = setInterval(onLang, 400)

    const load = async () => {
      try {
        const snap = await getDoc(doc(db, 'config', 'plans'))
        if (snap.exists() && Array.isArray(snap.data().plans)) {
          const active = snap.data().plans.filter(p => p.active !== false)
          if (active.length) setPlans(active)
        }
      } catch (e) {}
      setLoading(false)
    }
    load()
    return () => { window.removeEventListener('storage', onLang); clearInterval(interval) }
  }, [])

  const t = (STRINGS[lang] || STRINGS.en).pricing
  const popularLabel = { en: 'Most popular', my: 'လူကြိုက်များ', th: 'ยอดนิยม' }[lang] || 'Most popular'

  return (
    <>
      <div className="price-grid">
        {plans.map((p) => {
          const popular = p.popular
          return (
            <div key={p.key} className={popular ? 'price-card pop' : 'price-card'}>
              {popular && <span className="price-badge">★ {popularLabel}</span>}
              <div className="price-name">{p.label}</div>
              <div className="price-amt">
                <span className="price-num">{p.price === 0 ? t.free : fmtNum(p.price)}</span>
                {p.price > 0 && <span className="price-unit">{t.perMonth}</span>}
              </div>
              <div className="price-line"></div>
              <ul className="price-feats">
                {(p.featureList || []).map((f, i) => (
                  <li key={i}><span className="tick">✓</span>{f}</li>
                ))}
              </ul>
              <a href={`${APP_URL}/signup`} className={popular ? 'btn btn-primary' : 'btn btn-ghost'} style={{ marginTop: 24, width: '100%' }}>
                {p.price === 0 ? t.startFree : `${t.choose} ${p.label}`}
              </a>
            </div>
          )
        })}
      </div>
      <p className="price-note">{loading ? t.loading : t.note}</p>
    </>
  )
}
