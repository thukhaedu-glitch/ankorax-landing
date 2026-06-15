// Feature detail data — slug + full content (3 languages)
export const FEATURES = [
  {
    slug: 'invoices-quotations',
    icon: 'ti-file-invoice',
    en: {
      title: 'Invoices & Quotations',
      tagline: 'Create, send, and track invoices and quotes — get paid faster.',
      sections: [
        ['Professional documents in minutes', 'Build branded invoices and quotations with line items, tax, discounts, and your terms. Save templates and reuse them across every client.'],
        ['Share and get paid', 'Send a public link or PDF. Clients can view without an account. Record payments as they arrive and watch the status update automatically.'],
        ['Quote to invoice in one tap', 'Won the job? Convert an accepted quotation into an invoice instantly — same line items, same totals, zero re-typing.'],
        ['Always know where you stand', 'Every document shows whether it is draft, sent, paid, or overdue, so nothing slips through the cracks.'],
      ],
    },
    my: {
      title: 'ပြေစာ & စျေးနှုန်းစာ',
      tagline: 'ပြေစာ/quote ဖန်တီး၊ ပို့၊ track — ပိုမြန်မြန် ငွေရ။',
      sections: [
        ['မိနစ်ပိုင်းအတွင်း professional စာရွက်စာတမ်း', 'Brand ပါသော ပြေစာ/quote ကို items၊ tax၊ discount နဲ့ ဖန်တီး။ Template သိမ်းပြီး client တိုင်းမှာ ပြန်သုံး။'],
        ['Share ပြီး ငွေရ', 'Public link/PDF ပို့။ Client က account မလိုဘဲ ကြည့်နိုင်။ ငွေရောက်ရင် မှတ်ပြီး status အလိုလို update။'],
        ['Quote ကို invoice တစ်ချက်နှိပ်', 'အလုပ်ရပြီလား? လက်ခံပြီး quote ကို invoice အဖြစ် ချက်ချင်း ပြောင်း — items တူ၊ ပြန်ရိုက်စရာ မလို။'],
        ['အခြေအနေ အမြဲသိ', 'စာရွက်တိုင်း — draft/sent/paid/overdue ပြ၊ ဘာမှ မလွတ်။'],
      ],
    },
    th: {
      title: 'ใบแจ้งหนี้ & ใบเสนอราคา',
      tagline: 'สร้าง ส่ง และติดตามใบแจ้งหนี้และใบเสนอราคา — รับเงินเร็วขึ้น',
      sections: [
        ['เอกสารมืออาชีพในไม่กี่นาที', 'สร้างใบแจ้งหนี้และใบเสนอราคาพร้อมแบรนด์ รายการ ภาษี ส่วนลด และเงื่อนไข บันทึกเทมเพลตและใช้ซ้ำกับลูกค้าทุกราย'],
        ['แชร์และรับเงิน', 'ส่งลิงก์สาธารณะหรือ PDF ลูกค้าดูได้โดยไม่ต้องมีบัญชี บันทึกการชำระเงินและสถานะอัปเดตอัตโนมัติ'],
        ['ใบเสนอราคาเป็นใบแจ้งหนี้ในคลิกเดียว', 'ได้งานแล้ว? แปลงใบเสนอราคาเป็นใบแจ้งหนี้ทันที รายการเดิม ไม่ต้องพิมพ์ใหม่'],
        ['รู้สถานะเสมอ', 'ทุกเอกสารแสดงสถานะ ร่าง/ส่งแล้ว/จ่ายแล้ว/เกินกำหนด ไม่มีอะไรหลุด'],
      ],
    },
  },
  {
    slug: 'finance',
    icon: 'ti-calculator',
    en: {
      title: 'Real double-entry finance',
      tagline: 'Proper accounting — chart of accounts, journals, reconciliation.',
      sections: [
        ['A real ledger, not a calculator', 'AnkoraX runs on true double-entry accounting. Every transaction posts to the right accounts, so your books always balance.'],
        ['Chart of accounts & journals', 'Organize assets, liabilities, income, and expenses. Post manual journal entries when you need fine control.'],
        ['Bank reconciliation', 'Match transactions against bank statements and catch discrepancies before they become problems.'],
        ['Bills & payables', 'Track what you owe to vendors and never miss a due date.'],
      ],
    },
    my: {
      title: 'စစ်မှန်သော double-entry စာရင်း',
      tagline: 'တကယ့် စာရင်းကိုင် — chart of accounts၊ journal၊ reconciliation။',
      sections: [
        ['တကယ့် ledger — calculator မဟုတ်', 'AnkoraX က true double-entry accounting သုံး။ Transaction တိုင်း မှန်ကန်တဲ့ account ကို post ဖြစ်လို့ စာရင်း အမြဲ ညီ။'],
        ['Chart of accounts & journal', 'Asset၊ liability၊ income၊ expense စီစဉ်။ လိုအပ်ရင် manual journal entry post။'],
        ['Bank reconciliation', 'Bank statement နဲ့ transaction တိုက်ဆိုင်ပြီး ကွဲလွဲမှု ကြိုတင် ဖမ်း။'],
        ['Bills & payables', 'Vendor ကို ပေးရန် ရှိတာ track၊ due date မလွတ်။'],
      ],
    },
    th: {
      title: 'บัญชีคู่ที่แท้จริง',
      tagline: 'ระบบบัญชีจริง — ผังบัญชี รายการบันทึก การกระทบยอด',
      sections: [
        ['บัญชีจริง ไม่ใช่เครื่องคิดเลข', 'AnkoraX ใช้ระบบบัญชีคู่ที่แท้จริง ทุกรายการลงบัญชีถูกต้อง บัญชีสมดุลเสมอ'],
        ['ผังบัญชีและรายการบันทึก', 'จัดระเบียบสินทรัพย์ หนี้สิน รายได้ และค่าใช้จ่าย ลงรายการบันทึกด้วยตนเองเมื่อต้องการ'],
        ['การกระทบยอดธนาคาร', 'จับคู่รายการกับใบแจ้งยอดธนาคารและตรวจจับความคลาดเคลื่อน'],
        ['บิลและเจ้าหนี้', 'ติดตามสิ่งที่ต้องจ่ายให้ผู้ขายและไม่พลาดกำหนด'],
      ],
    },
  },
  {
    slug: 'customers-projects',
    icon: 'ti-users',
    en: {
      title: 'Customers & projects',
      tagline: 'Every client and project in one connected place.',
      sections: [
        ['One home for every client', 'Store contacts, details, and history. See every invoice, quote, and payment linked to each customer.'],
        ['Organize by project', 'Group work into projects so you can track what was delivered and what was billed.'],
        ['Nothing gets lost', 'Because documents and payments link back to customers and projects, the full picture is always one click away.'],
      ],
    },
    my: {
      title: 'ဖောက်သည် & စီမံကိန်း',
      tagline: 'Client နဲ့ project အားလုံး တစ်နေရာတည်း ချိတ်ဆက်။',
      sections: [
        ['Client တိုင်းအတွက် အိမ်တစ်လုံး', 'Contact၊ details၊ history သိမ်း။ ဖောက်သည်တိုင်းနဲ့ ချိတ်ထားသော invoice/quote/payment အကုန် မြင်။'],
        ['Project အလိုက် စီစဉ်', 'အလုပ်ကို project အဖြစ် စုပြီး — ဘာ ပေးအပ်ပြီး၊ ဘာ bill လုပ်ပြီး track။'],
        ['ဘာမှ မပျောက်', 'Document/payment က customer/project နဲ့ ချိတ်ထားလို့ — ပုံရိပ်အပြည့် တစ်ချက်နှိပ်ရုံ။'],
      ],
    },
    th: {
      title: 'ลูกค้า & โปรเจกต์',
      tagline: 'ลูกค้าและโปรเจกต์ทุกรายในที่เดียวที่เชื่อมต่อกัน',
      sections: [
        ['บ้านเดียวสำหรับลูกค้าทุกราย', 'เก็บผู้ติดต่อ รายละเอียด และประวัติ ดูใบแจ้งหนี้ ใบเสนอราคา และการชำระเงินของลูกค้าแต่ละราย'],
        ['จัดระเบียบตามโปรเจกต์', 'จัดกลุ่มงานเป็นโปรเจกต์เพื่อติดตามสิ่งที่ส่งมอบและเรียกเก็บเงิน'],
        ['ไม่มีอะไรหาย', 'เอกสารและการชำระเงินเชื่อมโยงกับลูกค้าและโปรเจกต์ ภาพรวมอยู่ห่างเพียงคลิกเดียว'],
      ],
    },
  },
  {
    slug: 'reports',
    icon: 'ti-chart-bar',
    en: {
      title: 'Reports that explain themselves',
      tagline: 'See exactly where the business stands.',
      sections: [
        ['Income vs. expense at a glance', 'Clear charts show money in and money out across any period, so trends are obvious.'],
        ['Balances and statements', 'Generate the financial statements you need without exporting to a spreadsheet.'],
        ['Build your own', 'The custom report builder lets you slice the numbers the way your business actually thinks about them.'],
      ],
    },
    my: {
      title: 'နားလည်လွယ်သော Report',
      tagline: 'လုပ်ငန်း ဘယ်နေရာ ရောက်နေလဲ အတိအကျ မြင်။',
      sections: [
        ['ဝင်ငွေ vs အသုံးစရိတ် တစ်ချက်ကြည့်', 'ကာလတိုင်း ဝင်ငွေ/ထွက်ငွေ ရှင်းလင်းသော chart — trend မြင်သာ။'],
        ['Balance & statement', 'လိုအပ်သော financial statement ကို spreadsheet မလိုဘဲ ထုတ်။'],
        ['ကိုယ်ပိုင် ဆောက်', 'Custom report builder နဲ့ — လုပ်ငန်း စဉ်းစားပုံအတိုင်း number ခွဲ။'],
      ],
    },
    th: {
      title: 'รายงานที่เข้าใจง่าย',
      tagline: 'เห็นสถานะธุรกิจที่แท้จริง',
      sections: [
        ['รายรับเทียบรายจ่ายในพริบตา', 'กราฟชัดเจนแสดงเงินเข้าและออกในทุกช่วงเวลา เห็นแนวโน้มชัด'],
        ['ยอดคงเหลือและงบ', 'สร้างงบการเงินที่ต้องการโดยไม่ต้องส่งออกไปสเปรดชีต'],
        ['สร้างเอง', 'ตัวสร้างรายงานให้คุณแบ่งตัวเลขตามที่ธุรกิจคิดจริง'],
      ],
    },
  },
  {
    slug: 'team-roles',
    icon: 'ti-shield-check',
    en: {
      title: 'Your team, with roles',
      tagline: 'Invite your team with the right permissions.',
      sections: [
        ['Roles that fit', 'Add members as Owner, Admin, or Staff. Each role sees and does only what it should.'],
        ['Everything is logged', 'The audit log records who did what and when, so accountability is built in.'],
        ['Grows with you', 'Start solo and add the team as you grow — your plan controls how many members you can invite.'],
      ],
    },
    my: {
      title: 'သင့် team — role အလိုက်',
      tagline: 'မှန်ကန်သော permission နဲ့ team ဖိတ်ခေါ်။',
      sections: [
        ['ကိုက်ညီသော role', 'Owner၊ Admin၊ Staff အဖြစ် member ထည့်။ Role တိုင်း သက်ဆိုင်ရာ ပဲ မြင်/လုပ်။'],
        ['အကုန် မှတ်တမ်းတင်', 'Audit log က — ဘယ်သူ ဘာ ဘယ်အချိန် လုပ်လဲ မှတ်၊ accountability ပါပြီးသား။'],
        ['သင်နဲ့အတူ ကြီးထွား', 'တစ်ယောက်တည်း စ၊ ကြီးလာရင် team ထည့်။ Plan က member ဘယ်နှစ်ယောက် ဖိတ်နိုင် ထိန်း။'],
      ],
    },
    th: {
      title: 'ทีมของคุณ พร้อมสิทธิ์',
      tagline: 'เชิญทีมด้วยสิทธิ์ที่เหมาะสม',
      sections: [
        ['บทบาทที่เหมาะสม', 'เพิ่มสมาชิกเป็นเจ้าของ ผู้ดูแล หรือพนักงาน แต่ละบทบาทเห็นและทำเฉพาะที่ควร'],
        ['บันทึกทุกอย่าง', 'บันทึกการตรวจสอบว่าใครทำอะไรเมื่อไหร่ มีความรับผิดชอบในตัว'],
        ['เติบโตไปกับคุณ', 'เริ่มคนเดียวและเพิ่มทีมเมื่อโต แผนควบคุมจำนวนสมาชิกที่เชิญได้'],
      ],
    },
  },
  {
    slug: 'verifiable-documents',
    icon: 'ti-qrcode',
    en: {
      title: 'Verifiable documents',
      tagline: 'Every document can be verified by QR code.',
      sections: [
        ['Built-in trust', 'Every invoice and receipt carries a unique QR code linked to a verification page.'],
        ['Instant confirmation', 'Clients scan the code and instantly see that the document is genuine and unaltered.'],
        ['Protects your brand', 'Verifiable documents reduce disputes and fraud, and signal that you run a serious operation.'],
      ],
    },
    my: {
      title: 'စစ်ဆေးနိုင်သော စာရွက်စာတမ်း',
      tagline: 'စာရွက်တိုင်း QR code နဲ့ စစ်နိုင်။',
      sections: [
        ['Built-in trust', 'ပြေစာ/receipt တိုင်းမှာ verification page နဲ့ ချိတ်ထားသော unique QR code ပါ။'],
        ['ချက်ချင်း အတည်ပြု', 'Client က code scan ပြီး — စာရွက် စစ်မှန်ပြီး မပြင်ဆင်ထားကြောင်း ချက်ချင်း မြင်။'],
        ['Brand ကာကွယ်', 'စစ်ဆေးနိုင်သော စာရွက်က — အငြင်းပွားမှု/လိမ်လည်မှု လျော့စေပြီး၊ လုပ်ငန်း တည်ကြည်ကြောင်း ပြ။'],
      ],
    },
    th: {
      title: 'เอกสารที่ตรวจสอบได้',
      tagline: 'ทุกเอกสารตรวจสอบได้ด้วย QR code',
      sections: [
        ['ความน่าเชื่อถือในตัว', 'ใบแจ้งหนี้และใบเสร็จทุกใบมี QR code เฉพาะที่เชื่อมกับหน้าตรวจสอบ'],
        ['ยืนยันทันที', 'ลูกค้าสแกนโค้ดและเห็นทันทีว่าเอกสารเป็นของแท้และไม่ถูกแก้ไข'],
        ['ปกป้องแบรนด์', 'เอกสารที่ตรวจสอบได้ลดข้อพิพาทและการฉ้อโกง และแสดงว่าคุณดำเนินธุรกิจอย่างจริงจัง'],
      ],
    },
  },
]
