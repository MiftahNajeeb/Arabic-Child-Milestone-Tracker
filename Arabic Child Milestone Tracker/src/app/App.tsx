import { useState } from "react";
import {
  Plus, Camera, ChevronLeft, Check, Heart, Bell,
  Home, Wrench, Lightbulb, TrendingUp, Baby,
  CheckCircle2, BookOpen, Music, Activity, Shield,
  Share2, Printer, AlertTriangle, MessageSquare,
  PenLine, Mountain, Target, User, Gamepad2,
  Clock, Star, ClipboardList, Syringe, Scale,
} from "lucide-react";

type Screen = "onboarding" | "add-child" | "profile" | "milestones" | "tips" | "tools" | "summary";

const FONT_FAMILY = "Cairo,Noto Sans Arabic,sans-serif";
const COLORS = {
  appBg: "#eef5f8",
  phoneBg: "#f7fbfd",
  surface: "#fdfefe",
  surfaceMuted: "#edf5f9",
  border: "rgba(74, 151, 194, 0.14)",
  shadow: "rgba(43, 86, 116, 0.12)",
  textStrong: "#243041",
  textBody: "#4e5a69",
  textMuted: "#7a8390",
  primary: "#4a97c2",
  primaryStrong: "#356f95",
  primarySoft: "#e6f3fa",
  teal: "#67a79d",
  tealSoft: "#e8f4f1",
  amber: "#b78343",
  amberSoft: "#f4eadc",
  rose: "#b66774",
  roseSoft: "#f6e8eb",
  blue: "#5f88c8",
  blueSoft: "#eaf0fa",
  success: "#2f7a61",
  successSoft: "#e8f3ee",
  warning: "#a97529",
  warningSoft: "#fbf2e1",
  danger: "#b45064",
  dangerSoft: "#f9e9ed",
  white: "#ffffff",
};

// ─── Onboarding ────────────────────────────────────────────────────────────────
function OnboardingScreen({ onNext }: { onNext: () => void }) {
  const features = [
    { Icon: Baby, text: "ملف واضح لطفلك", icon: COLORS.amber },
    { Icon: CheckCircle2, text: "مراحل من شهرين إلى خمس سنوات", icon: COLORS.success },
    { Icon: Lightbulb, text: "نصائح وأنشطة مناسبة للعمر", icon: COLORS.primary },
  ];

  return (
    <div className="flex flex-col min-h-full px-6 py-7 gap-5 relative overflow-hidden justify-between" style={{ background: COLORS.phoneBg }}>
      <div className="absolute top-0 left-0 w-56 h-56 rounded-full opacity-30 pointer-events-none"
        style={{ background: COLORS.tealSoft, transform: "translate(-40%,-40%)" }} />
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-25 pointer-events-none"
        style={{ background: COLORS.primarySoft, transform: "translate(35%,-35%)" }} />
      <div className="absolute bottom-0 left-1/2 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{ background: COLORS.amberSoft, transform: "translate(-50%,40%)" }} />

      <div className="flex flex-col gap-5 relative z-10 flex-1 justify-center">
        {/* Logo */}
        <div className="flex flex-col items-center gap-3">
          <Baby className="w-14 h-14" style={{ color: COLORS.primaryStrong }} strokeWidth={1.8} />
          <div className="text-center">
            <h1 className="text-[1.75rem] font-black text-center leading-snug" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>
              متتبع مراحل نمو الطفل
            </h1>
            <p className="text-base font-bold mt-1.5" style={{ color: COLORS.primary, fontFamily: FONT_FAMILY }}>
              متابعة عربية واضحة لطفلك
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-col gap-2.5">
          {features.map(({ Icon, text, icon }, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-2xl border"
              style={{ flexDirection: "row-reverse", background: COLORS.surface, borderColor: COLORS.border, boxShadow: `0 8px 18px ${COLORS.shadow}` }}>
              <Icon className="w-5 h-5 flex-shrink-0" style={{ color: icon }} strokeWidth={2} />
              <p className="text-right flex-1 font-semibold text-sm" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>
                {text}
              </p>
            </div>
          ))}
        </div>

        <div className="px-2 py-1">
          <p className="text-center text-[13px] leading-relaxed" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>
            يساعدك على المتابعة المبكرة، ولا يغني عن التقييم الطبي عند الحاجة.
          </p>
        </div>
      </div>

      <button onClick={onNext}
        className="w-full py-4 rounded-2xl text-white text-xl font-black tracking-wide shadow-lg active:scale-95 transition-transform relative z-10 mt-3"
        style={{ background: COLORS.primary, fontFamily: FONT_FAMILY, boxShadow: "0 12px 28px rgba(64,84,108,0.28)" }}>
        ابدأ الآن
      </button>
    </div>
  );
}

// ─── Add Child ──────────────────────────────────────────────────────────────────
function AddChildScreen({ onNext }: { onNext: () => void }) {
  const [gender, setGender] = useState<"boy" | "girl" | null>(null);
  const [premature, setPremature] = useState<boolean | null>(null);

  return (
    <div className="flex flex-col min-h-full" style={{ background: COLORS.phoneBg }}>
      <div className="px-6 pt-10 pb-8" style={{ background: COLORS.primaryStrong }}>
        <h2 className="text-white text-2xl font-black text-right" style={{ fontFamily: FONT_FAMILY }}>
          إضافة طفل جديد
        </h2>
        <p className="text-sm text-right mt-1" style={{ color: "#d6dee6", fontFamily: FONT_FAMILY }}>
          أدخل معلومات طفلك لنبدأ معك
        </p>
      </div>

      <div className="flex flex-col gap-5 px-5 py-6 overflow-y-auto">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="flex items-center gap-3 flex-row-reverse rounded-2xl px-5 py-4 border"
            style={{ background: COLORS.surface, borderColor: COLORS.border }}>
            <Camera className="w-6 h-6" style={{ color: COLORS.primary }} />
            <div className="text-right">
              <p className="font-bold text-sm" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>إضافة صورة للطفل</p>
              <p className="text-xs" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>اختياري الآن، ويمكنك إضافتها لاحقًا</p>
            </div>
            <Plus className="w-4 h-4" style={{ color: COLORS.textMuted }} />
          </div>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-right text-base font-bold" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>
            اسم الطفل
          </label>
          <input type="text" placeholder="أدخل اسم طفلك" dir="rtl"
            className="w-full py-3.5 px-4 rounded-2xl border-2 bg-white text-right text-sm focus:outline-none transition-colors placeholder:text-gray-300"
            style={{ borderColor: COLORS.border, color: COLORS.textBody, fontFamily: FONT_FAMILY }}
            onFocus={e => (e.target.style.borderColor = COLORS.primary)}
            onBlur={e => (e.target.style.borderColor = COLORS.border)} />
        </div>

        {/* DOB */}
        <div className="flex flex-col gap-2">
          <label className="text-right text-base font-bold" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>
            تاريخ الميلاد
          </label>
          <input type="date"
            className="w-full py-3.5 px-4 rounded-2xl border-2 bg-white text-sm focus:outline-none transition-colors"
            style={{ borderColor: COLORS.border, color: COLORS.textBody, fontFamily: FONT_FAMILY }}
            onFocus={e => (e.target.style.borderColor = COLORS.primary)}
            onBlur={e => (e.target.style.borderColor = COLORS.border)} />
        </div>

        {/* Premature */}
        <div className="flex flex-col gap-3">
          <label className="text-right text-base font-bold" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>
            هل وُلد طفلك مبكرًا؟
          </label>
          <p className="text-right text-xs leading-relaxed" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>
            إذا وُلد قبل موعده، يمكن الاعتماد على العمر المصحح عند مراجعة المراحل خلال الفترة المبكرة من النمو.
          </p>
          <div className="flex gap-3 flex-row-reverse">
            {[{ label: "نعم", val: true }, { label: "لا", val: false }].map(o => (
              <button key={String(o.val)} onClick={() => setPremature(o.val)}
                className="flex-1 py-3 rounded-2xl font-bold text-base transition-all"
                style={{
                  background: premature === o.val ? COLORS.primary : COLORS.surface,
                  color: premature === o.val ? "white" : COLORS.textMuted,
                  border: premature === o.val ? "none" : `2px solid ${COLORS.border}`,
                  boxShadow: premature === o.val ? "0 8px 20px rgba(64,84,108,0.24)" : "none",
                  fontFamily: FONT_FAMILY,
                }}>
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-3">
          <label className="text-right text-base font-bold" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>
            الجنس
          </label>
          <div className="flex gap-3 flex-row-reverse">
            {[
              { label: "ولد", val: "boy" as const, active: COLORS.blue, shadow: "rgba(90,122,163,0.28)" },
              { label: "بنت", val: "girl" as const, active: COLORS.rose, shadow: "rgba(182,103,116,0.28)" },
            ].map(o => (
              <button key={o.val} onClick={() => setGender(o.val)}
                className="flex-1 py-3 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2"
                style={{
                  background: gender === o.val ? o.active : COLORS.surface,
                  color: gender === o.val ? "white" : COLORS.textMuted,
                  border: gender === o.val ? "none" : `2px solid ${COLORS.border}`,
                  boxShadow: gender === o.val ? `0 4px 14px ${o.shadow}` : "none",
                  fontFamily: FONT_FAMILY,
                }}>
                <User className="w-4 h-4" />
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={onNext}
          className="w-full py-4 rounded-2xl text-white text-lg font-black mt-2 active:scale-95 transition-transform"
          style={{ background: COLORS.primary, fontFamily: FONT_FAMILY, boxShadow: "0 12px 28px rgba(64,84,108,0.24)" }}>
          حفظ الملف الشخصي
        </button>
      </div>
    </div>
  );
}

// ─── Profile / Home ─────────────────────────────────────────────────────────────
function ProfileScreen({ onNav }: { onNav: (s: Screen) => void }) {
  const ages = ["2م", "4م", "6م", "9م", "12م", "15م", "18م", "24م", "30م", "3س", "4س", "5س"];
  const [activeAge, setActiveAge] = useState(5);

  const milestonePreview = [
    { Icon: MessageSquare, title: "يقول 10 كلمات أو أكثر", cat: "لغة", iconColor: COLORS.primary, done: false },
    { Icon: Activity, title: "يمشي بشكل مستقل", cat: "حركة", iconColor: COLORS.success, done: true },
    { Icon: Star, title: "يُلوّح وداعًا عند المغادرة", cat: "اجتماعي", iconColor: COLORS.amber, done: false },
  ];

  return (
    <div className="flex flex-col min-h-full" style={{ background: COLORS.phoneBg }}>
      {/* Header */}
      <div className="px-6 pt-10 pb-16 relative overflow-hidden"
        style={{ background: COLORS.primaryStrong }}>
        <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-15 pointer-events-none" style={{ background: "#dfe5eb" }} />
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10 pointer-events-none" style={{ background: "#eef2f5" }} />
        <div className="flex items-center justify-between flex-row-reverse relative z-10">
          <div className="flex flex-col items-end gap-1">
            <h2 className="text-white text-xl font-black" style={{ fontFamily: FONT_FAMILY }}>مرحباً بكِ</h2>
            <p className="text-sm" style={{ color: "#d6dee6", fontFamily: FONT_FAMILY }}>تابعي التقدم اليومي، واستعدي لما يلي من مراحل</p>
          </div>
          <button className="flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Child card */}
      <div className="mx-5 -mt-10 rounded-3xl p-5 relative z-10"
        style={{ background: COLORS.surface, boxShadow: "0 20px 40px rgba(36,48,65,0.1)", border: `1px solid ${COLORS.border}` }}>
        <div className="flex items-center gap-4 flex-row-reverse mb-4">
          <User className="w-9 h-9 flex-shrink-0" style={{ color: COLORS.primary }} />
          <div className="flex flex-col items-end gap-1.5 flex-1">
            <h3 className="text-xl font-black" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>يوسف أحمد</h3>
            <p className="font-bold text-sm" style={{ color: COLORS.primary, fontFamily: FONT_FAMILY }}>عمره 15 شهرًا</p>
            <div className="flex items-center gap-1.5 flex-row-reverse">
              <div className="w-2 h-2 rounded-full" style={{ background: COLORS.success }} />
              <p className="text-xs" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>آخر تحديث: اليوم</p>
            </div>
            <p className="text-xs" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>قوائم المتابعة متاحة من شهرين إلى خمس سنوات</p>
          </div>
        </div>

        {/* Age timeline */}
        <div className="flex gap-2 overflow-x-auto pb-1 flex-row-reverse" style={{ scrollbarWidth: "none" }}>
          {ages.map((a, i) => (
            <button key={i} onClick={() => setActiveAge(i)}
              className="flex-shrink-0 px-3 py-1.5 rounded-xl text-sm font-bold transition-all"
              style={{
                background: activeAge === i ? COLORS.primary : COLORS.surfaceMuted,
                color: activeAge === i ? "white" : COLORS.textMuted,
                boxShadow: activeAge === i ? "0 10px 18px rgba(64,84,108,0.18)" : "none",
                fontFamily: FONT_FAMILY,
              }}>
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div className="flex gap-3 mx-5 mt-4">
        <button onClick={() => onNav("milestones")}
          className="flex-1 rounded-2xl p-4 active:scale-95 transition-transform"
          style={{ background: COLORS.surface, boxShadow: `0 10px 24px ${COLORS.shadow}`, border: `1px solid ${COLORS.border}` }}>
          <CheckCircle2 className="w-7 h-7 mb-2" style={{ color: COLORS.primary }} />
          <p className="text-xs text-right" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>مراحل النمو</p>
          <p className="font-black text-lg text-right" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>3 / 15</p>
          <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: COLORS.primarySoft }}>
            <div className="h-full rounded-full" style={{ width: "20%", background: COLORS.primary }} />
          </div>
        </button>
        <div className="flex-1 rounded-2xl p-4"
          style={{ background: COLORS.surface, boxShadow: `0 10px 24px ${COLORS.shadow}`, border: `1px solid ${COLORS.border}` }}>
          <Shield className="w-7 h-7 mb-2" style={{ color: COLORS.success }} />
          <p className="text-xs text-right" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>التطعيمات</p>
          <p className="font-black text-lg text-right" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>8 / 12</p>
          <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: COLORS.successSoft }}>
            <div className="h-full rounded-full" style={{ width: "66%", background: COLORS.success }} />
          </div>
        </div>
      </div>

      {/* Milestone preview */}
      <div className="mx-5 mt-4 mb-4">
        <div className="flex items-center justify-between flex-row-reverse mb-3">
          <h3 className="font-black text-base" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>مراحل النمو القادمة</h3>
          <button onClick={() => onNav("milestones")} className="text-sm font-bold" style={{ color: COLORS.primary, fontFamily: FONT_FAMILY }}>
            عرض الكل
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {milestonePreview.map(({ Icon, title, cat, iconColor, done }, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-2xl flex-row-reverse"
              style={{ background: COLORS.surface, boxShadow: "0 8px 18px rgba(36,48,65,0.06)", border: `1px solid ${COLORS.border}` }}>
              <Icon className="w-5 h-5 flex-shrink-0" style={{ color: iconColor }} />
              <div className="flex-1 flex flex-col items-end">
                <p className="font-semibold text-sm" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>{title}</p>
                <span className="text-xs" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>{cat}</span>
              </div>
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: done ? COLORS.successSoft : COLORS.surfaceMuted }}>
                {done
                  ? <Check className="w-3.5 h-3.5" style={{ color: COLORS.success }} />
                  : <div className="w-2 h-2 rounded-full bg-gray-300" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Milestone Checklist ────────────────────────────────────────────────────────
function MilestonesScreen({ onBack }: { onBack: () => void }) {
  const categories = [
    { name: "حركة",         bg: "#E0F7F4", text: "#047857" },
    { name: "لغة",          bg: "#EDE9FE", text: "#6D28D9" },
    { name: "اجتماعي",      bg: "#FEF3C7", text: "#92400E" },
    { name: "إدراك",        bg: "#FEE2E2", text: "#BE123C" },
    { name: "تصرف مبكرًا", bg: "#FFF0E6", text: "#C2410C" },
  ];
  const [activeCat, setActiveCat] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const milestones = [
    { Icon: Activity,  title: "يمشي بشكل مستقل دون مساعدة",        desc: "يتحرك الطفل من مكان لآخر باستقلالية تامة" },
    { Icon: Mountain,  title: "يتسلق الأثاث أو الدرج بأمان",        desc: "يستطيع التسلق بتناسق ودون خوف" },
    { Icon: Target,    title: "يركل الكرة للأمام",                   desc: "يوجّه الكرة بقدمه بشكل متعمد" },
    { Icon: PenLine,   title: "يرسم خطوطًا بالقلم",                 desc: "يمسك القلم ويرسم خطوطًا عشوائية على الورق" },
  ];

  const cat = categories[activeCat];
  const completedCount = milestones.filter((_, i) => answers[`${activeCat}-${i}`] === "yes").length;

  return (
    <div className="flex flex-col min-h-full" style={{ background: COLORS.phoneBg }}>
      <div className="px-5 pt-10 pb-5" style={{ background: COLORS.primaryStrong }}>
        <div className="flex items-center justify-between flex-row-reverse mb-4">
          <h2 className="text-white text-xl font-black" style={{ fontFamily: FONT_FAMILY }}>مراحل عمر 15 شهرًا</h2>
          <button onClick={onBack} className="w-9 h-9 flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-white" style={{ transform: "scaleX(-1)" }} />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 flex-row-reverse" style={{ scrollbarWidth: "none" }}>
          {categories.map((c, i) => (
            <button key={i} onClick={() => setActiveCat(i)}
              className="flex-shrink-0 px-3.5 py-1.5 rounded-xl text-sm font-bold transition-all"
              style={{
                background: activeCat === i ? COLORS.surface : "rgba(255,255,255,0.18)",
                color: activeCat === i ? COLORS.primary : "white",
                fontFamily: FONT_FAMILY,
              }}>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-5 mt-4 rounded-2xl px-4 py-3" style={{ background: COLORS.surfaceMuted, border: `1px solid ${COLORS.border}` }}>
        <p className="text-right text-sm leading-relaxed" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>
          راقبي ما يفعله طفلك غالبًا في حياته اليومية. هذه القائمة للملاحظة المبكرة، وليست تشخيصًا طبيًا أو بديلًا عن الفحص النمائي المعياري.
        </p>
      </div>

      {/* Progress */}
      <div className="mx-5 mt-4 p-4 rounded-2xl" style={{ background: COLORS.surface, boxShadow: `0 10px 24px ${COLORS.shadow}` }}>
        <div className="flex items-center justify-between flex-row-reverse mb-2">
          <p className="font-bold text-sm" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>التقدم في هذه الفئة</p>
          <p className="font-black text-sm" style={{ color: COLORS.primary, fontFamily: FONT_FAMILY }}>{completedCount} / 4</p>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: COLORS.primarySoft }}>
          <div className="h-full rounded-full transition-all"
            style={{ width: `${(completedCount / 4) * 100}%`, background: COLORS.primary }} />
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 mx-5 mt-4 pb-6">
        {milestones.map(({ Icon, title, desc }, i) => {
          const key = `${activeCat}-${i}`;
          return (
            <div key={i} className="rounded-3xl overflow-hidden" style={{ background: COLORS.surface, boxShadow: "0 12px 24px rgba(36,48,65,0.08)" }}>
              <div className="p-4">
                <div className="flex items-center justify-between flex-row-reverse mb-3">
                  <span className="text-xs px-2.5 py-0.5 rounded-lg font-bold"
                    style={{ background: cat.bg, color: cat.text, fontFamily: FONT_FAMILY }}>
                    {cat.name}
                  </span>
                  <Icon className="w-5 h-5" style={{ color: cat.text }} strokeWidth={1.8} />
                </div>
                <h4 className="font-black text-base text-right mb-1" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>{title}</h4>
                <p className="text-sm text-right mb-4 leading-relaxed" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>{desc}</p>
                <p className="text-xs text-right mb-4" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>
                  اختاري الإجابة الأقرب لما تلاحظينه معظم الوقت.
                </p>
                <div className="flex gap-2 flex-row-reverse">
                  {[
                    { k: "yes", label: "نعم", activeBg: COLORS.success, inactBg: COLORS.successSoft, inactText: COLORS.success },
                    { k: "unsure", label: "لست متأكدًا", activeBg: COLORS.amber, inactBg: COLORS.warningSoft, inactText: COLORS.warning },
                    { k: "no", label: "ليس بعد", activeBg: COLORS.rose, inactBg: COLORS.dangerSoft, inactText: COLORS.danger },
                  ].map(o => (
                    <button key={o.k} onClick={() => setAnswers(p => ({ ...p, [key]: o.k }))}
                      className="flex-1 py-2 rounded-xl text-xs font-bold transition-all"
                      style={{
                        background: answers[key] === o.k ? o.activeBg : o.inactBg,
                        color: answers[key] === o.k ? "white" : o.inactText,
                        fontFamily: FONT_FAMILY,
                      }}>
                      {o.label}
                    </button>
                  ))}
                </div>
                {answers[key] && (
                  <input type="text" placeholder="ملاحظات اختيارية..." dir="rtl"
                    className="mt-3 w-full py-2 px-3 rounded-xl text-sm text-right focus:outline-none transition-colors placeholder:text-gray-300"
                    style={{ background: COLORS.surfaceMuted, border: `1.5px solid ${COLORS.border}`, color: COLORS.textBody, fontFamily: FONT_FAMILY }}
                    onFocus={e => (e.target.style.borderColor = COLORS.primary)}
                    onBlur={e => (e.target.style.borderColor = COLORS.border)} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ─── Tips & Activities ──────────────────────────────────────────────────────────
function TipsScreen() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());

  const tips = [
    { Icon: BookOpen, title: "القراءة اليومية", desc: "اقرأي لطفلك 15 دقيقة يوميًا، فالقراءة تنمّي مفرداته وتقوّي علاقتكما.", tag: "لغة", tagBg: COLORS.primarySoft, tagText: COLORS.primaryStrong, iconColor: COLORS.primary },
    { Icon: Music, title: "الأغاني والأناشيد", desc: "الأغاني تساعد الطفل على تعلم الكلمات والإيقاع بطريقة ممتعة وطبيعية.", tag: "اجتماعي", tagBg: COLORS.amberSoft, tagText: "#8c5c1e", iconColor: COLORS.amber },
    { Icon: Target, title: "ألعاب الإشارة", desc: "علّمي طفلك الإشارة للأشياء التي يريدها، فهذا يحفّز التواصل اللفظي.", tag: "إدراك", tagBg: COLORS.roseSoft, tagText: "#9d4454", iconColor: COLORS.rose },
    { Icon: Activity, title: "الحركة الحرة", desc: "دعي طفلك يتحرك بحرية في مكان آمن لتطوير توازنه ومهاراته الحركية.", tag: "حركة", tagBg: COLORS.tealSoft, tagText: "#2f685b", iconColor: COLORS.teal },
  ];

  return (
    <div className="flex flex-col min-h-full" style={{ background: COLORS.phoneBg }}>
      <div className="px-5 pt-10 pb-8" style={{ background: COLORS.amber }}>
        <h2 className="text-white text-2xl font-black text-right" style={{ fontFamily: FONT_FAMILY }}>نصائح وأنشطة</h2>
        <p className="text-sm text-right mt-1" style={{ color: "#fbefdc", fontFamily: FONT_FAMILY }}>أنشطة مختارة لدعم نمو طفلك</p>
      </div>

      <div className="mx-5 -mt-4 rounded-2xl p-4 mb-4"
        style={{ background: COLORS.surface, boxShadow: "0 16px 30px rgba(36,48,65,0.09)", border: `1px solid ${COLORS.border}` }}>
        <div className="flex items-start gap-3 flex-row-reverse">
          <Heart className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.amber }} />
          <p className="text-sm text-right leading-relaxed" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>
            كل طفل يتطور بإيقاعه الخاص. هذه الأنشطة ليست واجبات، بل أفكار ممتعة تقوّي علاقتك بطفلك وتدعم نموه الطبيعي.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mx-5 pb-6">
        {tips.map(({ Icon, title, desc, tag, tagBg, tagText, iconColor }, i) => (
          <div key={i} className="rounded-3xl overflow-hidden" style={{ background: COLORS.surface, boxShadow: "0 12px 24px rgba(36,48,65,0.08)" }}>
            <div className="p-4">
              <div className="flex items-center justify-between flex-row-reverse mb-2">
                <div className="flex items-center gap-2 flex-row-reverse">
                  <h4 className="font-black text-base" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>{title}</h4>
                  <Icon className="w-5 h-5" style={{ color: iconColor }} strokeWidth={1.8} />
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-lg font-bold"
                  style={{ background: tagBg, color: tagText, fontFamily: FONT_FAMILY }}>{tag}</span>
              </div>
              <p className="text-sm text-right mb-4 leading-relaxed" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>{desc}</p>
              <div className="flex gap-2 flex-row-reverse">
                <button
                  onClick={() => setFavorites(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; })}
                  className="flex items-center gap-1.5 flex-row-reverse px-4 py-2 rounded-xl text-sm font-bold transition-all"
                  style={{
                    background: favorites.has(i) ? COLORS.roseSoft : COLORS.surfaceMuted,
                    color: favorites.has(i) ? COLORS.rose : COLORS.textMuted,
                    fontFamily: FONT_FAMILY,
                  }}>
                  <Heart className="w-4 h-4" style={{ fill: favorites.has(i) ? COLORS.rose : "none" }} />
                  المفضلة
                </button>
                <button className="flex items-center gap-1.5 flex-row-reverse px-4 py-2 rounded-xl text-sm font-bold"
                  style={{ background: COLORS.primarySoft, color: COLORS.primaryStrong, fontFamily: FONT_FAMILY }}>
                  <Bell className="w-4 h-4" />
                  ذكّرني
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Tools ──────────────────────────────────────────────────────────────────────
function ToolsScreen() {
  const visitNotes = [
    "اسألي الطبيب عن المرحلة التالية المتوقعة",
    "شاركي الملخص أو الملاحظات التي سجلتها",
    "اسألي متى يلزم الفحص النمائي القادم",
  ];
  const familyResources = [
    "خطوات الحديث مع الطبيب عند وجود قلق",
    "متى تطلبين تقييمًا متخصصًا أو إحالة",
    "جهات دعم مبكر وخدمات الأسرة في منطقتك",
  ];

  return (
    <div className="flex flex-col min-h-full" style={{ background: COLORS.phoneBg }}>
      <div className="px-5 pt-10 pb-8" style={{ background: COLORS.teal }}>
        <h2 className="text-white text-2xl font-black text-right" style={{ fontFamily: FONT_FAMILY }}>الأدوات</h2>
        <p className="text-sm text-right mt-1" style={{ color: "#e2f0ec", fontFamily: FONT_FAMILY }}>كل ما تحتاجينه في مكان واحد</p>
      </div>

      <div className="flex flex-col gap-4 mx-5 mt-4 pb-6">
        {/* Vaccinations */}
        <div className="rounded-3xl overflow-hidden" style={{ background: COLORS.surface, boxShadow: "0 12px 24px rgba(36,48,65,0.08)" }}>
          <div className="p-4 flex items-center gap-3 flex-row-reverse" style={{ background: COLORS.tealSoft }}>
            <Syringe className="w-8 h-8 flex-shrink-0" style={{ color: "#2f685b" }} />
            <div className="flex flex-col items-end">
              <h3 className="font-black text-base" style={{ color: "#2f685b", fontFamily: FONT_FAMILY }}>تتبع التطعيمات</h3>
              <p className="text-xs" style={{ color: COLORS.teal, fontFamily: FONT_FAMILY }}>جدول التطعيمات الكامل</p>
            </div>
          </div>
          <div className="p-4 flex gap-3 flex-row-reverse">
            {[
              { label: "مكتملة", count: "8",  bg: "#ECFDF5", text: "#059669" },
              { label: "قادمة",  count: "3",  bg: "#EFF6FF", text: "#2563EB" },
              { label: "متأخرة", count: "1",  bg: "#FFF1F2", text: "#BE123C" },
            ].map((s, i) => (
              <div key={i} className="flex-1 p-2.5 rounded-xl text-center" style={{ background: s.bg }}>
                <p className="font-black text-lg" style={{ color: s.text, fontFamily: FONT_FAMILY }}>{s.count}</p>
                <p className="text-xs" style={{ color: s.text, fontFamily: FONT_FAMILY }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 flex-row-reverse p-3 rounded-xl"
              style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
              <AlertTriangle className="w-4 h-4 flex-shrink-0" style={{ color: "#D97706" }} />
              <p className="text-xs text-right" style={{ color: "#92400E", fontFamily: FONT_FAMILY }}>
                تطعيم الحصبة المركّبة، موعده هذا الأسبوع
              </p>
            </div>
          </div>
        </div>

        {/* Growth */}
        <div className="rounded-3xl overflow-hidden" style={{ background: COLORS.surface, boxShadow: "0 12px 24px rgba(36,48,65,0.08)" }}>
          <div className="p-4 flex items-center gap-3 flex-row-reverse" style={{ background: COLORS.blueSoft }}>
            <TrendingUp className="w-8 h-8 flex-shrink-0" style={{ color: "#355882" }} />
            <div className="flex flex-col items-end">
              <h3 className="font-black text-base" style={{ color: "#355882", fontFamily: FONT_FAMILY }}>مراقبة النمو</h3>
              <p className="text-xs" style={{ color: COLORS.blue, fontFamily: FONT_FAMILY }}>الوزن والطول ومحيط الرأس</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex gap-3 mb-4 flex-row-reverse">
              {[
                { Icon: Scale,      label: "الوزن", value: "10.2 كغ" },
                { Icon: Activity,   label: "الطول", value: "78 سم"   },
                { Icon: ClipboardList, label: "الرأس",  value: "46 سم"   },
              ].map(({ Icon, label, value }, i) => (
                <div key={i} className="flex-1 rounded-xl p-2.5 text-center" style={{ background: COLORS.blueSoft }}>
                  <Icon className="w-5 h-5 mx-auto mb-1" style={{ color: "#2563EB" }} />
                  <p className="font-black text-sm" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>{value}</p>
                  <p className="text-xs" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="rounded-2xl p-3" style={{ background: COLORS.blueSoft }}>
              <p className="text-xs font-bold text-right mb-3" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>
                منحنى الوزن (كغ)
              </p>
              <div className="flex items-end gap-2 h-16 flex-row-reverse">
                {[
                  { v: 7.2, label: "6م"  },
                  { v: 8.1, label: "9م"  },
                  { v: 9.0, label: "سنة" },
                  { v: 9.6, label: "12م" },
                  { v: 10.2, label: "15م" },
                ].map((d, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div className="w-full rounded-t-lg" style={{
                      height: `${((d.v - 6) / 5) * 52}px`,
                      background: i === 4 ? COLORS.primary : "#adc2df",
                      opacity: i === 4 ? 1 : 0.6,
                    }} />
                    <span className="text-[9px]" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reminders */}
        <div className="rounded-3xl overflow-hidden" style={{ background: COLORS.surface, boxShadow: "0 12px 24px rgba(36,48,65,0.08)" }}>
          <div className="p-4 flex items-center gap-3 flex-row-reverse" style={{ background: COLORS.primarySoft }}>
            <Bell className="w-8 h-8 flex-shrink-0" style={{ color: "#4b5683" }} />
            <div className="flex flex-col items-end">
              <h3 className="font-black text-base" style={{ color: "#4b5683", fontFamily: FONT_FAMILY }}>التذكيرات</h3>
              <p className="text-xs" style={{ color: COLORS.primary, fontFamily: FONT_FAMILY }}>المواعيد والتطعيمات القادمة</p>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2">
            {[
              { label: "زيارة طبيب الأطفال",   date: "2 يوليو 2026",  bg: "#EEF2FF", text: "#4338CA", dot: "#6366F1" },
              { label: "تطعيم الحصبة المركّبة", date: "5 يوليو 2026",  bg: "#FFFBEB", text: "#92400E", dot: "#F59E0B" },
              { label: "قياس الطول والوزن",     date: "10 يوليو 2026", bg: "#ECFDF5", text: "#065F46", dot: "#10B981" },
            ].map((r, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-xl flex-row-reverse" style={{ background: r.bg }}>
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-2 h-2 rounded-full" style={{ background: r.dot }} />
                  <p className="font-semibold text-sm" style={{ color: r.text, fontFamily: FONT_FAMILY }}>{r.label}</p>
                </div>
                <p className="text-xs opacity-70" style={{ color: r.text, fontFamily: FONT_FAMILY }}>{r.date}</p>
              </div>
            ))}
            <button className="w-full py-3 rounded-xl mt-1 font-bold text-sm flex items-center justify-center gap-2 flex-row-reverse transition-all active:scale-95"
              style={{ border: `2px dashed ${COLORS.primary}`, color: COLORS.primary, fontFamily: FONT_FAMILY }}>
              <Plus className="w-4 h-4" />
              إضافة تذكير جديد
            </button>
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden" style={{ background: COLORS.surface, boxShadow: "0 12px 24px rgba(36,48,65,0.08)" }}>
          <div className="p-4 flex items-center gap-3 flex-row-reverse" style={{ background: COLORS.amberSoft }}>
            <ClipboardList className="w-8 h-8 flex-shrink-0" style={{ color: "#8c5c1e" }} />
            <div className="flex flex-col items-end">
              <h3 className="font-black text-base" style={{ color: "#8c5c1e", fontFamily: FONT_FAMILY }}>ملخص زيارة الطبيب</h3>
              <p className="text-xs" style={{ color: COLORS.warning, fontFamily: FONT_FAMILY }}>أسئلة ونقاط مهمة للمراجعة القادمة</p>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2.5">
            {visitNotes.map((item, i) => (
              <div key={i} className="flex items-start gap-3 flex-row-reverse">
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: COLORS.warningSoft, color: COLORS.warning }}>
                  <span className="text-xs font-bold" style={{ fontFamily: FONT_FAMILY }}>{i + 1}</span>
                </div>
                <p className="text-sm text-right leading-relaxed" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl overflow-hidden" style={{ background: COLORS.surface, boxShadow: "0 12px 24px rgba(36,48,65,0.08)" }}>
          <div className="p-4 flex items-center gap-3 flex-row-reverse" style={{ background: COLORS.primarySoft }}>
            <BookOpen className="w-8 h-8 flex-shrink-0" style={{ color: COLORS.primaryStrong }} />
            <div className="flex flex-col items-end">
              <h3 className="font-black text-base" style={{ color: COLORS.primaryStrong, fontFamily: FONT_FAMILY }}>موارد للأسرة</h3>
              <p className="text-xs" style={{ color: COLORS.primary, fontFamily: FONT_FAMILY }}>مساعدة عملية عندما تحتاجين دعمًا إضافيًا</p>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2.5">
            {familyResources.map((item, i) => (
              <div key={i} className="flex items-start gap-3 flex-row-reverse">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
                <p className="text-sm text-right leading-relaxed" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Summary / Act Early ─────────────────────────────────────────────────────────
function SummaryScreen() {
  const concerns = [
    { text: "لا يمشي بشكل مستقل عند 18 شهرًا",   flagged: false },
    { text: "لا يقول أي كلمات بوضوح",              flagged: true  },
    { text: "لا يشير للأشياء التي يريدها",         flagged: false },
    { text: "لا يستجيب لاسمه عند النداء",          flagged: false },
    { text: "يفقد مهارات كان يمتلكها سابقًا",     flagged: false },
  ];
  const nextSteps = [
    "تحدثي مع طبيب الطفل واذكري ما لاحظته بدقة",
    "شاركي الملخص أو الملاحظات التي سجلتها داخل التطبيق",
    "اسألي عن الفحص النمائي المعياري إذا كانت لديكِ مخاوف",
    "اطلبي إحالة أو تقييمًا مبكرًا إذا استمرت المخاوف",
  ];

  return (
    <div className="flex flex-col min-h-full" style={{ background: COLORS.phoneBg }}>
      <div className="px-5 pt-10 pb-8" style={{ background: COLORS.rose }}>
        <h2 className="text-white text-2xl font-black text-right" style={{ fontFamily: FONT_FAMILY }}>ملخص التطور</h2>
        <p className="text-sm text-right mt-1" style={{ color: "#faebee", fontFamily: FONT_FAMILY }}>تقرير جاهز لمشاركته مع طبيبك</p>
      </div>

      {/* Reassurance */}
      <div className="mx-5 -mt-4 rounded-2xl p-4 mb-4"
        style={{ background: COLORS.surface, boxShadow: "0 16px 30px rgba(36,48,65,0.09)", border: `1px solid ${COLORS.border}` }}>
        <div className="flex items-start gap-3 flex-row-reverse">
          <Heart className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: COLORS.blue, fill: COLORS.blueSoft }} />
          <div className="flex flex-col items-end gap-1">
            <h3 className="font-black text-base" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>تصرف مبكرًا... الفرق كبير</h3>
            <p className="text-sm text-right leading-relaxed" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>
              الاكتشاف المبكر يمنح طفلك الدعم الذي يحتاجه في الوقت المناسب. لا تترددي في التحدث مع طبيبك.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-5 mb-4 rounded-2xl px-4 py-3" style={{ background: COLORS.surfaceMuted, border: `1px solid ${COLORS.border}` }}>
        <p className="text-right text-sm leading-relaxed" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>
          هذا الملخص يساعدك على تنظيم الملاحظات ومشاركتها، لكنه لا يحل محل الفحص النمائي المعياري أو التقييم السريري عند الحاجة.
        </p>
      </div>

      {/* Stats */}
      <div className="flex gap-3 mx-5 mb-4">
        {[
          { Icon: CheckCircle2,  label: "مكتملة",      count: "3",  bg: COLORS.successSoft, border: "#b9ddce", iconColor: COLORS.success },
          { Icon: Clock,         label: "غير مكتملة",  count: "12", bg: COLORS.warningSoft, border: "#ead8af", iconColor: COLORS.warning },
          { Icon: AlertTriangle, label: "مخاوف",       count: "1",  bg: COLORS.dangerSoft, border: "#e7bfca", iconColor: COLORS.danger },
        ].map(({ Icon, label, count, bg, border, iconColor }, i) => (
          <div key={i} className="flex-1 p-3 rounded-2xl text-center" style={{ background: bg, border: `1.5px solid ${border}` }}>
            <Icon className="w-6 h-6 mx-auto mb-1" style={{ color: iconColor }} />
            <p className="font-black text-lg" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>{count}</p>
            <p className="text-xs" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Act Early */}
      <div className="mx-5 rounded-3xl mb-4 overflow-hidden" style={{ background: COLORS.surface, boxShadow: "0 12px 24px rgba(36,48,65,0.08)" }}>
        <div className="p-4 rounded-t-3xl" style={{ background: COLORS.warningSoft }}>
          <div className="flex items-center gap-2 flex-row-reverse">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" style={{ color: "#C2410C" }} />
            <h3 className="font-black text-base" style={{ color: "#9A3412", fontFamily: FONT_FAMILY }}>علامات تستدعي التصرف المبكر</h3>
          </div>
          <p className="text-xs text-right mt-1" style={{ color: "#C2410C", fontFamily: FONT_FAMILY }}>
            إذا لاحظتِ أيًا من هذه العلامات، تحدثي مع طبيبك فورًا
          </p>
        </div>
        <div className="p-4 flex flex-col gap-2.5">
          {concerns.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl flex-row-reverse"
              style={{ background: c.flagged ? "#FFF1F2" : "#F9FAFB" }}>
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: c.flagged ? COLORS.danger : "#E5E7EB" }}>
                {c.flagged && <Check className="w-3 h-3 text-white" />}
              </div>
              <p className="text-sm flex-1 text-right font-semibold"
                style={{ color: c.flagged ? "#9d4454" : COLORS.textMuted, fontFamily: FONT_FAMILY }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-5 rounded-3xl mb-4 overflow-hidden" style={{ background: COLORS.surface, boxShadow: "0 12px 24px rgba(36,48,65,0.08)" }}>
        <div className="p-4 border-b" style={{ borderColor: COLORS.border }}>
          <h3 className="font-black text-base text-right" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>ماذا أفعل الآن؟</h3>
          <p className="text-sm text-right mt-1" style={{ color: COLORS.textMuted, fontFamily: FONT_FAMILY }}>
            خطوات عملية تساعدك على التصرف بهدوء ووضوح إذا كان لديكِ قلق.
          </p>
        </div>
        <div className="p-4 flex flex-col gap-3">
          {nextSteps.map((step, i) => (
            <div key={i} className="flex items-start gap-3 flex-row-reverse">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: COLORS.primarySoft, color: COLORS.primaryStrong }}>
                <span className="text-xs font-bold" style={{ fontFamily: FONT_FAMILY }}>{i + 1}</span>
              </div>
              <p className="text-sm text-right leading-relaxed" style={{ color: COLORS.textBody, fontFamily: FONT_FAMILY }}>{step}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Share */}
      <div className="flex gap-3 mx-5 mb-4 flex-row-reverse">
        <button className="flex-1 py-3.5 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 flex-row-reverse active:scale-95 transition-transform"
          style={{ background: COLORS.primary, boxShadow: "0 10px 22px rgba(64,84,108,0.22)", fontFamily: FONT_FAMILY }}>
          <Share2 className="w-4 h-4" />
          مشاركة مع الطبيب
        </button>
        <button className="flex-1 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 flex-row-reverse border-2 active:scale-95 transition-transform"
          style={{ borderColor: "#E5E7EB", color: COLORS.textBody, fontFamily: FONT_FAMILY }}>
          <Printer className="w-4 h-4" />
          طباعة التقرير
        </button>
      </div>

      {/* Footer note */}
      <div className="mx-5 mb-6 p-4 rounded-2xl" style={{ background: COLORS.primarySoft }}>
        <div className="flex items-start gap-2 flex-row-reverse">
          <Star className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: COLORS.primary }} />
          <p className="text-sm text-right leading-relaxed font-semibold" style={{ color: COLORS.primaryStrong, fontFamily: FONT_FAMILY }}>
            تذكري: التصرف المبكر لا يعني أن هناك مشكلة حتمًا، بل هو أفضل هدية يمكنك تقديمها لطفلك.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Bottom Navigation ──────────────────────────────────────────────────────────
const NAV_TABS: { id: Screen; label: string; Icon: typeof Home }[] = [
  { id: "profile",    label: "الرئيسية", Icon: Home        },
  { id: "milestones", label: "المراحل",   Icon: Gamepad2    },
  { id: "tools",      label: "الأدوات",  Icon: Wrench      },
  { id: "tips",       label: "النصائح",  Icon: Lightbulb   },
  { id: "summary",    label: "الملخص",   Icon: TrendingUp  },
];

function BottomNav({ active, onNav }: { active: Screen; onNav: (s: Screen) => void }) {
  return (
    <div className="flex flex-row-reverse px-1 py-2"
      style={{ background: COLORS.surface, borderTop: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 -4px 20px rgba(36,48,65,0.06)" }}>
      {NAV_TABS.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <button key={id} onClick={() => onNav(id)}
            className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all"
            style={{ background: "transparent" }}>
            <Icon
              className="w-5 h-5 transition-colors"
              style={{ color: isActive ? COLORS.primary : "#9CA3AF" }}
              strokeWidth={isActive ? 2.2 : 1.8}
            />
            <span className="text-[10px] font-bold leading-none transition-colors"
              style={{ color: isActive ? COLORS.primary : "#9CA3AF", fontFamily: FONT_FAMILY }}>
              {label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

// ─── App Shell ──────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState<Screen>("onboarding");
  const showNav = screen !== "onboarding" && screen !== "add-child";

  return (
    <div className="flex items-center justify-center min-h-screen"
      style={{ background: COLORS.appBg, fontFamily: FONT_FAMILY }}
      dir="rtl">
      {/* Phone frame */}
      <div className="relative flex flex-col overflow-hidden"
        style={{
          width: 390, height: 844,
          borderRadius: "2rem",
          background: COLORS.phoneBg,
          boxShadow: "0 32px 80px rgba(36,48,65,0.16), 0 0 0 8px rgba(36,48,65,0.05)",
          border: "1px solid rgba(255,255,255,0.8)",
        }}>
        {/* Status bar */}
        <div className="flex-shrink-0 flex items-center justify-between px-7 py-3" style={{ zIndex: 10 }}>
          <div className="flex items-center gap-1 opacity-50">
            <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: COLORS.textStrong }} />
            <div className="w-7 h-1.5 rounded-full" style={{ background: COLORS.textStrong }} />
          </div>
          <span className="text-xs font-bold opacity-60" style={{ color: COLORS.textStrong, fontFamily: FONT_FAMILY }}>9:41 AM</span>
          <div className="w-12 h-3 border rounded flex items-center px-0.5 opacity-50"
            style={{ borderColor: COLORS.textStrong, borderRadius: 3 }}>
            <div className="h-full rounded-sm" style={{ width: "75%", background: COLORS.textStrong }} />
          </div>
        </div>

        {/* Screen content */}
        <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          {screen === "onboarding"  && <OnboardingScreen onNext={() => setScreen("add-child")} />}
          {screen === "add-child"   && <AddChildScreen   onNext={() => setScreen("profile")} />}
          {screen === "profile"     && <ProfileScreen    onNav={setScreen} />}
          {screen === "milestones"  && <MilestonesScreen onBack={() => setScreen("profile")} />}
          {screen === "tips"        && <TipsScreen />}
          {screen === "tools"       && <ToolsScreen />}
          {screen === "summary"     && <SummaryScreen />}
        </div>

        {/* Bottom nav */}
        {showNav && (
          <div className="flex-shrink-0">
            <BottomNav active={screen} onNav={setScreen} />
          </div>
        )}

        {/* Home indicator */}
        <div className="flex-shrink-0 flex justify-center py-2" style={{ background: showNav ? COLORS.surface : "transparent" }}>
          <div className="w-24 h-1 rounded-full" style={{ background: "rgba(36,48,65,0.15)" }} />
        </div>
      </div>
    </div>
  );
}
