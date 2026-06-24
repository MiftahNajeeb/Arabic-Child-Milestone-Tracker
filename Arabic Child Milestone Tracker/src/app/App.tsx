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

// ─── Onboarding ────────────────────────────────────────────────────────────────
function OnboardingScreen({ onNext }: { onNext: () => void }) {
  const features = [
    { Icon: Baby,         text: "أنشئ ملفًا شخصيًا لطفلك",           bg: "#FEF3C7", icon: "#F59E0B" },
    { Icon: CheckCircle2, text: "تتبع مراحل نمو طفلك",               bg: "#E0F7F4", icon: "#10B981" },
    { Icon: Lightbulb,    text: "احصل على نصائح وأنشطة مفيدة",       bg: "#EDE9FE", icon: "#8B5CF6" },
    { Icon: Bell,         text: "اضبط تذكيرات للمواعيد والتطعيمات", bg: "#FEE2E2", icon: "#F43F5E" },
  ];

  return (
    <div className="flex flex-col min-h-full px-6 py-10 gap-8 relative overflow-hidden bg-gradient-to-b from-[#EEF7FF] to-[#F5EEFF]">
      <div className="absolute top-0 left-0 w-56 h-56 rounded-full opacity-30 pointer-events-none"
        style={{ background: "#7DD3C0", transform: "translate(-40%,-40%)" }} />
      <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-25 pointer-events-none"
        style={{ background: "#C4B5FD", transform: "translate(35%,-35%)" }} />
      <div className="absolute bottom-0 left-1/2 w-64 h-64 rounded-full opacity-20 pointer-events-none"
        style={{ background: "#FCA5A5", transform: "translate(-50%,40%)" }} />

      {/* Logo */}
      <div className="flex flex-col items-center gap-4 pt-6 relative z-10">
        <div className="w-24 h-24 rounded-[2rem] flex items-center justify-center shadow-xl"
          style={{ background: "linear-gradient(135deg,#3B82F6,#7C3AED)" }}>
          <Baby className="w-12 h-12 text-white" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-black text-center leading-snug" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>
            متتبع مراحل نمو الطفل
          </h1>
          <p className="text-lg font-bold mt-2" style={{ color: "#6366F1", fontFamily: "Cairo,sans-serif" }}>
            لأن كل مرحلة تهم
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-3 relative z-10">
        {features.map(({ Icon, text, bg, icon }, i) => (
          <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border"
            style={{ flexDirection: "row-reverse", borderColor: "rgba(99,102,241,0.08)", boxShadow: "0 2px 12px rgba(99,102,241,0.07)" }}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: bg }}>
              <Icon className="w-5 h-5" style={{ color: icon }} />
            </div>
            <p className="text-right flex-1 font-semibold text-sm" style={{ color: "#374151", fontFamily: "Cairo,sans-serif" }}>
              {text}
            </p>
          </div>
        ))}
      </div>

      <button onClick={onNext}
        className="w-full py-4 rounded-2xl text-white text-xl font-black tracking-wide shadow-lg active:scale-95 transition-transform relative z-10"
        style={{ background: "linear-gradient(to left,#3B82F6,#6366F1)", fontFamily: "Cairo,sans-serif", boxShadow: "0 8px 24px rgba(99,102,241,0.35)" }}>
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
    <div className="flex flex-col min-h-full bg-[#FDF8FF]">
      <div className="px-6 pt-10 pb-8" style={{ background: "linear-gradient(to left,#3B82F6,#6366F1)" }}>
        <h2 className="text-white text-2xl font-black text-right" style={{ fontFamily: "Cairo,sans-serif" }}>
          إضافة طفل جديد
        </h2>
        <p className="text-blue-100 text-sm text-right mt-1" style={{ fontFamily: "Cairo,sans-serif" }}>
          أدخل معلومات طفلك لنبدأ معك
        </p>
      </div>

      <div className="flex flex-col gap-5 px-5 py-6 overflow-y-auto">
        {/* Photo */}
        <div className="flex justify-center">
          <div className="relative cursor-pointer">
            <div className="w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-xl"
              style={{ background: "linear-gradient(135deg,#C4B5FD,#7DD3C0)" }}>
              <Camera className="w-8 h-8 text-white" />
            </div>
            <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full flex items-center justify-center border-2 border-white"
              style={{ background: "#3B82F6" }}>
              <Plus className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-2">
          <label className="text-right text-base font-bold" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>
            اسم الطفل
          </label>
          <input type="text" placeholder="أدخل اسم طفلك" dir="rtl"
            className="w-full py-3.5 px-4 rounded-2xl border-2 bg-white text-right text-sm focus:outline-none transition-colors placeholder:text-gray-300"
            style={{ borderColor: "rgba(99,102,241,0.2)", color: "#374151", fontFamily: "Cairo,sans-serif" }}
            onFocus={e => (e.target.style.borderColor = "#6366F1")}
            onBlur={e => (e.target.style.borderColor = "rgba(99,102,241,0.2)")} />
        </div>

        {/* DOB */}
        <div className="flex flex-col gap-2">
          <label className="text-right text-base font-bold" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>
            تاريخ الميلاد
          </label>
          <input type="date"
            className="w-full py-3.5 px-4 rounded-2xl border-2 bg-white text-sm focus:outline-none transition-colors"
            style={{ borderColor: "rgba(99,102,241,0.2)", color: "#374151", fontFamily: "Cairo,sans-serif" }}
            onFocus={e => (e.target.style.borderColor = "#6366F1")}
            onBlur={e => (e.target.style.borderColor = "rgba(99,102,241,0.2)")} />
        </div>

        {/* Premature */}
        <div className="flex flex-col gap-3">
          <label className="text-right text-base font-bold" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>
            هل وُلد طفلك مبكرًا؟
          </label>
          <div className="flex gap-3 flex-row-reverse">
            {[{ label: "نعم", val: true }, { label: "لا", val: false }].map(o => (
              <button key={String(o.val)} onClick={() => setPremature(o.val)}
                className="flex-1 py-3 rounded-2xl font-bold text-base transition-all"
                style={{
                  background: premature === o.val ? "#6366F1" : "white",
                  color: premature === o.val ? "white" : "#6B7280",
                  border: premature === o.val ? "none" : "2px solid #E5E7EB",
                  boxShadow: premature === o.val ? "0 4px 14px rgba(99,102,241,0.35)" : "none",
                  fontFamily: "Cairo,sans-serif",
                }}>
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-3">
          <label className="text-right text-base font-bold" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>
            الجنس
          </label>
          <div className="flex gap-3 flex-row-reverse">
            {[
              { label: "ولد", val: "boy" as const, active: "#3B82F6", shadow: "rgba(59,130,246,0.35)" },
              { label: "بنت", val: "girl" as const, active: "#F43F5E", shadow: "rgba(244,63,94,0.35)" },
            ].map(o => (
              <button key={o.val} onClick={() => setGender(o.val)}
                className="flex-1 py-3 rounded-2xl font-bold text-base transition-all flex items-center justify-center gap-2"
                style={{
                  background: gender === o.val ? o.active : "white",
                  color: gender === o.val ? "white" : "#6B7280",
                  border: gender === o.val ? "none" : "2px solid #E5E7EB",
                  boxShadow: gender === o.val ? `0 4px 14px ${o.shadow}` : "none",
                  fontFamily: "Cairo,sans-serif",
                }}>
                <User className="w-4 h-4" />
                {o.label}
              </button>
            ))}
          </div>
        </div>

        <button onClick={onNext}
          className="w-full py-4 rounded-2xl text-white text-lg font-black mt-2 active:scale-95 transition-transform"
          style={{ background: "linear-gradient(to left,#3B82F6,#6366F1)", fontFamily: "Cairo,sans-serif", boxShadow: "0 8px 24px rgba(99,102,241,0.3)" }}>
          حفظ الملف الشخصي
        </button>
      </div>
    </div>
  );
}

// ─── Profile / Home ─────────────────────────────────────────────────────────────
function ProfileScreen({ onNav }: { onNav: (s: Screen) => void }) {
  const ages = ["3م", "6م", "9م", "سنة", "15م", "18م", "2س"];
  const [activeAge, setActiveAge] = useState(4);

  const milestonePreview = [
    { Icon: MessageSquare, title: "يقول 10 كلمات أو أكثر",         cat: "لغة",      catBg: "#EDE9FE", iconColor: "#8B5CF6", done: false },
    { Icon: Activity,       title: "يمشي بشكل مستقل",               cat: "حركة",     catBg: "#E0F7F4", iconColor: "#10B981", done: true  },
    { Icon: Star,           title: "يُلوّح وداعًا عند المغادرة",    cat: "اجتماعي",  catBg: "#FEF3C7", iconColor: "#F59E0B", done: false },
  ];

  return (
    <div className="flex flex-col min-h-full" style={{ background: "#F5F3FF" }}>
      {/* Header */}
      <div className="px-6 pt-10 pb-16 relative overflow-hidden"
        style={{ background: "linear-gradient(to left,#6366F1,#3B82F6)" }}>
        <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-15 pointer-events-none" style={{ background: "white" }} />
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full opacity-10 pointer-events-none" style={{ background: "white" }} />
        <div className="flex items-center justify-between flex-row-reverse relative z-10">
          <div className="flex flex-col items-end gap-1">
            <h2 className="text-white text-xl font-black" style={{ fontFamily: "Cairo,sans-serif" }}>مرحباً بكِ</h2>
            <p className="text-blue-100 text-sm" style={{ fontFamily: "Cairo,sans-serif" }}>تابعي تقدم طفلك اليوم</p>
          </div>
          <button className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Child card */}
      <div className="mx-5 -mt-10 bg-white rounded-3xl p-5 relative z-10"
        style={{ boxShadow: "0 8px 32px rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.08)" }}>
        <div className="flex items-center gap-4 flex-row-reverse mb-4">
          <div className="w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white"
            style={{ background: "linear-gradient(135deg,#FCA5A5,#C4B5FD)", boxShadow: "0 4px 16px rgba(196,181,253,0.4)" }}>
            <User className="w-9 h-9 text-white" />
          </div>
          <div className="flex flex-col items-end gap-1.5 flex-1">
            <h3 className="text-xl font-black" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>يوسف أحمد</h3>
            <p className="font-bold text-sm" style={{ color: "#6366F1", fontFamily: "Cairo,sans-serif" }}>عمره 15 شهرًا</p>
            <div className="flex items-center gap-1.5 flex-row-reverse">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <p className="text-xs text-gray-400" style={{ fontFamily: "Cairo,sans-serif" }}>آخر تحديث: اليوم</p>
            </div>
          </div>
        </div>

        {/* Age timeline */}
        <div className="flex gap-2 overflow-x-auto pb-1 flex-row-reverse" style={{ scrollbarWidth: "none" }}>
          {ages.map((a, i) => (
            <button key={i} onClick={() => setActiveAge(i)}
              className="flex-shrink-0 px-3 py-1.5 rounded-xl text-sm font-bold transition-all"
              style={{
                background: activeAge === i ? "#6366F1" : "#F3F4F6",
                color: activeAge === i ? "white" : "#6B7280",
                boxShadow: activeAge === i ? "0 4px 12px rgba(99,102,241,0.3)" : "none",
                fontFamily: "Cairo,sans-serif",
              }}>
              {a}
            </button>
          ))}
        </div>
      </div>

      {/* Stat cards */}
      <div className="flex gap-3 mx-5 mt-4">
        <button onClick={() => onNav("milestones")}
          className="flex-1 bg-white rounded-2xl p-4 active:scale-95 transition-transform"
          style={{ boxShadow: "0 2px 12px rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.07)" }}>
          <CheckCircle2 className="w-7 h-7 mb-2" style={{ color: "#6366F1" }} />
          <p className="text-gray-400 text-xs text-right" style={{ fontFamily: "Cairo,sans-serif" }}>مراحل النمو</p>
          <p className="font-black text-lg text-right" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>3 / 15</p>
          <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: "#E9D5FF" }}>
            <div className="h-full rounded-full" style={{ width: "20%", background: "#6366F1" }} />
          </div>
        </button>
        <div className="flex-1 bg-white rounded-2xl p-4"
          style={{ boxShadow: "0 2px 12px rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.07)" }}>
          <Shield className="w-7 h-7 mb-2" style={{ color: "#10B981" }} />
          <p className="text-gray-400 text-xs text-right" style={{ fontFamily: "Cairo,sans-serif" }}>التطعيمات</p>
          <p className="font-black text-lg text-right" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>8 / 12</p>
          <div className="mt-2 h-1.5 rounded-full overflow-hidden" style={{ background: "#D1FAE5" }}>
            <div className="h-full rounded-full" style={{ width: "66%", background: "#10B981" }} />
          </div>
        </div>
      </div>

      {/* Milestone preview */}
      <div className="mx-5 mt-4 mb-4">
        <div className="flex items-center justify-between flex-row-reverse mb-3">
          <h3 className="font-black text-base" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>مراحل النمو القادمة</h3>
          <button onClick={() => onNav("milestones")} className="text-sm font-bold" style={{ color: "#6366F1", fontFamily: "Cairo,sans-serif" }}>
            عرض الكل
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {milestonePreview.map(({ Icon, title, cat, catBg, iconColor, done }, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-2xl flex-row-reverse"
              style={{ boxShadow: "0 1px 8px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.04)" }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: catBg }}>
                <Icon className="w-5 h-5" style={{ color: iconColor }} />
              </div>
              <div className="flex-1 flex flex-col items-end">
                <p className="font-semibold text-sm" style={{ color: "#374151", fontFamily: "Cairo,sans-serif" }}>{title}</p>
                <span className="text-xs text-gray-400" style={{ fontFamily: "Cairo,sans-serif" }}>{cat}</span>
              </div>
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: done ? "#D1FAE5" : "#F3F4F6" }}>
                {done
                  ? <Check className="w-3.5 h-3.5" style={{ color: "#10B981" }} />
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
    <div className="flex flex-col min-h-full" style={{ background: "#F5F3FF" }}>
      <div className="px-5 pt-10 pb-5" style={{ background: "linear-gradient(to left,#6366F1,#3B82F6)" }}>
        <div className="flex items-center justify-between flex-row-reverse mb-4">
          <h2 className="text-white text-xl font-black" style={{ fontFamily: "Cairo,sans-serif" }}>مراحل عمر 15 شهرًا</h2>
          <button onClick={onBack} className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
            <ChevronLeft className="w-5 h-5 text-white" style={{ transform: "scaleX(-1)" }} />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 flex-row-reverse" style={{ scrollbarWidth: "none" }}>
          {categories.map((c, i) => (
            <button key={i} onClick={() => setActiveCat(i)}
              className="flex-shrink-0 px-3.5 py-1.5 rounded-xl text-sm font-bold transition-all"
              style={{
                background: activeCat === i ? "white" : "rgba(255,255,255,0.2)",
                color: activeCat === i ? "#6366F1" : "white",
                fontFamily: "Cairo,sans-serif",
              }}>
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Progress */}
      <div className="mx-5 mt-4 p-4 bg-white rounded-2xl" style={{ boxShadow: "0 2px 12px rgba(99,102,241,0.08)" }}>
        <div className="flex items-center justify-between flex-row-reverse mb-2">
          <p className="font-bold text-sm" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>التقدم في هذه الفئة</p>
          <p className="font-black text-sm" style={{ color: "#6366F1", fontFamily: "Cairo,sans-serif" }}>{completedCount} / 4</p>
        </div>
        <div className="h-2 rounded-full overflow-hidden" style={{ background: "#E9D5FF" }}>
          <div className="h-full rounded-full transition-all"
            style={{ width: `${(completedCount / 4) * 100}%`, background: "linear-gradient(to left,#6366F1,#3B82F6)" }} />
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-4 mx-5 mt-4 pb-6">
        {milestones.map(({ Icon, title, desc }, i) => {
          const key = `${activeCat}-${i}`;
          return (
            <div key={i} className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
              <div className="h-32 flex items-center justify-center" style={{ background: cat.bg }}>
                <Icon className="w-16 h-16" style={{ color: cat.text, opacity: 0.7 }} strokeWidth={1.2} />
              </div>
              <div className="p-4">
                <span className="inline-block text-xs px-2.5 py-0.5 rounded-lg font-bold mb-2"
                  style={{ background: cat.bg, color: cat.text, fontFamily: "Cairo,sans-serif" }}>
                  {cat.name}
                </span>
                <h4 className="font-black text-base text-right mb-1" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>{title}</h4>
                <p className="text-sm text-right mb-4 leading-relaxed" style={{ color: "#6B7280", fontFamily: "Cairo,sans-serif" }}>{desc}</p>
                <div className="flex gap-2 flex-row-reverse">
                  {[
                    { k: "yes",    label: "نعم",          activeBg: "#10B981", inactBg: "#ECFDF5", inactText: "#059669" },
                    { k: "unsure", label: "لست متأكدًا",  activeBg: "#F59E0B", inactBg: "#FFFBEB", inactText: "#B45309" },
                    { k: "no",     label: "ليس بعد",      activeBg: "#F43F5E", inactBg: "#FFF1F2", inactText: "#BE123C" },
                  ].map(o => (
                    <button key={o.k} onClick={() => setAnswers(p => ({ ...p, [key]: o.k }))}
                      className="flex-1 py-2 rounded-xl text-xs font-bold transition-all"
                      style={{
                        background: answers[key] === o.k ? o.activeBg : o.inactBg,
                        color: answers[key] === o.k ? "white" : o.inactText,
                        fontFamily: "Cairo,sans-serif",
                      }}>
                      {o.label}
                    </button>
                  ))}
                </div>
                {answers[key] && (
                  <input type="text" placeholder="ملاحظات اختيارية..." dir="rtl"
                    className="mt-3 w-full py-2 px-3 rounded-xl text-sm text-right focus:outline-none transition-colors placeholder:text-gray-300"
                    style={{ background: "#F9FAFB", border: "1.5px solid #E5E7EB", color: "#374151", fontFamily: "Cairo,sans-serif" }}
                    onFocus={e => (e.target.style.borderColor = "#6366F1")}
                    onBlur={e => (e.target.style.borderColor = "#E5E7EB")} />
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
    { Icon: BookOpen,  title: "القراءة اليومية",    desc: "اقرأي لطفلك 15 دقيقة يوميًا — القراءة تنمّي مفرداته وتقوّي علاقتكما.",              tag: "لغة",     tagBg: "#EDE9FE", tagText: "#6D28D9", iconBg: "#EDE9FE", iconColor: "#8B5CF6", illBg: "#F5F3FF" },
    { Icon: Music,     title: "الأغاني والأناشيد",  desc: "الأغاني تساعد الطفل على تعلم الكلمات والإيقاع بطريقة ممتعة وطبيعية.",               tag: "اجتماعي", tagBg: "#FEF3C7", tagText: "#92400E", iconBg: "#FEF3C7", iconColor: "#F59E0B", illBg: "#FFFBEB" },
    { Icon: Target,    title: "ألعاب الإشارة",      desc: "علّمي طفلك الإشارة للأشياء التي يريدها — ذلك يحفّز التواصل اللفظي.",               tag: "إدراك",   tagBg: "#FEE2E2", tagText: "#BE123C", iconBg: "#FEE2E2", iconColor: "#F43F5E", illBg: "#FFF5F5" },
    { Icon: Activity,  title: "الحركة الحرة",       desc: "دعي طفلك يتحرك بحرية في مكان آمن لتطوير توازنه ومهاراته الحركية.",                  tag: "حركة",    tagBg: "#E0F7F4", tagText: "#047857", iconBg: "#E0F7F4", iconColor: "#10B981", illBg: "#F0FDF9" },
  ];

  return (
    <div className="flex flex-col min-h-full" style={{ background: "#F5F3FF" }}>
      <div className="px-5 pt-10 pb-8" style={{ background: "linear-gradient(to left,#F59E0B,#F97316)" }}>
        <h2 className="text-white text-2xl font-black text-right" style={{ fontFamily: "Cairo,sans-serif" }}>نصائح وأنشطة</h2>
        <p className="text-amber-100 text-sm text-right mt-1" style={{ fontFamily: "Cairo,sans-serif" }}>أنشطة مختارة لدعم نمو طفلك</p>
      </div>

      <div className="mx-5 -mt-4 bg-white rounded-2xl p-4 mb-4"
        style={{ boxShadow: "0 4px 20px rgba(245,158,11,0.15)", border: "1px solid rgba(245,158,11,0.1)" }}>
        <div className="flex items-start gap-3 flex-row-reverse">
          <Heart className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#F59E0B" }} />
          <p className="text-sm text-right leading-relaxed" style={{ color: "#374151", fontFamily: "Cairo,sans-serif" }}>
            كل طفل يتطور بإيقاعه الخاص. هذه الأنشطة ليست واجبات، بل أفكار ممتعة تقوّي علاقتك بطفلك وتدعم نموه الطبيعي.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 mx-5 pb-6">
        {tips.map(({ Icon, title, desc, tag, tagBg, tagText, iconColor, illBg }, i) => (
          <div key={i} className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
            <div className="h-28 flex items-center justify-center" style={{ background: illBg }}>
              <Icon className="w-14 h-14" style={{ color: iconColor, opacity: 0.65 }} strokeWidth={1.2} />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between flex-row-reverse mb-2">
                <h4 className="font-black text-base" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>{title}</h4>
                <span className="text-xs px-2.5 py-0.5 rounded-lg font-bold"
                  style={{ background: tagBg, color: tagText, fontFamily: "Cairo,sans-serif" }}>{tag}</span>
              </div>
              <p className="text-sm text-right mb-4 leading-relaxed" style={{ color: "#6B7280", fontFamily: "Cairo,sans-serif" }}>{desc}</p>
              <div className="flex gap-2 flex-row-reverse">
                <button
                  onClick={() => setFavorites(prev => { const n = new Set(prev); n.has(i) ? n.delete(i) : n.add(i); return n; })}
                  className="flex items-center gap-1.5 flex-row-reverse px-4 py-2 rounded-xl text-sm font-bold transition-all"
                  style={{
                    background: favorites.has(i) ? "#FFF1F2" : "#F9FAFB",
                    color: favorites.has(i) ? "#F43F5E" : "#6B7280",
                    fontFamily: "Cairo,sans-serif",
                  }}>
                  <Heart className="w-4 h-4" style={{ fill: favorites.has(i) ? "#F43F5E" : "none" }} />
                  المفضلة
                </button>
                <button className="flex items-center gap-1.5 flex-row-reverse px-4 py-2 rounded-xl text-sm font-bold"
                  style={{ background: "#EEF2FF", color: "#4338CA", fontFamily: "Cairo,sans-serif" }}>
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
  return (
    <div className="flex flex-col min-h-full" style={{ background: "#F5F3FF" }}>
      <div className="px-5 pt-10 pb-8" style={{ background: "linear-gradient(to left,#10B981,#3B82F6)" }}>
        <h2 className="text-white text-2xl font-black text-right" style={{ fontFamily: "Cairo,sans-serif" }}>الأدوات</h2>
        <p className="text-emerald-100 text-sm text-right mt-1" style={{ fontFamily: "Cairo,sans-serif" }}>كل ما تحتاجينه في مكان واحد</p>
      </div>

      <div className="flex flex-col gap-4 mx-5 mt-4 pb-6">
        {/* Vaccinations */}
        <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(16,185,129,0.1)" }}>
          <div className="p-4 flex items-center gap-3 flex-row-reverse" style={{ background: "linear-gradient(to left,#D1FAE5,#A7F3D0)" }}>
            <Syringe className="w-8 h-8 flex-shrink-0" style={{ color: "#065F46" }} />
            <div className="flex flex-col items-end">
              <h3 className="font-black text-base" style={{ color: "#065F46", fontFamily: "Cairo,sans-serif" }}>تتبع التطعيمات</h3>
              <p className="text-xs" style={{ color: "#047857", fontFamily: "Cairo,sans-serif" }}>جدول التطعيمات الكامل</p>
            </div>
          </div>
          <div className="p-4 flex gap-3 flex-row-reverse">
            {[
              { label: "مكتملة", count: "8",  bg: "#ECFDF5", text: "#059669" },
              { label: "قادمة",  count: "3",  bg: "#EFF6FF", text: "#2563EB" },
              { label: "متأخرة", count: "1",  bg: "#FFF1F2", text: "#BE123C" },
            ].map((s, i) => (
              <div key={i} className="flex-1 p-2.5 rounded-xl text-center" style={{ background: s.bg }}>
                <p className="font-black text-lg" style={{ color: s.text, fontFamily: "Cairo,sans-serif" }}>{s.count}</p>
                <p className="text-xs" style={{ color: s.text, fontFamily: "Cairo,sans-serif" }}>{s.label}</p>
              </div>
            ))}
          </div>
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 flex-row-reverse p-3 rounded-xl"
              style={{ background: "#FFFBEB", border: "1px solid #FDE68A" }}>
              <AlertTriangle className="w-4 h-4 flex-shrink-0" style={{ color: "#D97706" }} />
              <p className="text-xs text-right" style={{ color: "#92400E", fontFamily: "Cairo,sans-serif" }}>
                تطعيم الحصبة المركّبة — موعده هذا الأسبوع
              </p>
            </div>
          </div>
        </div>

        {/* Growth */}
        <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(59,130,246,0.1)" }}>
          <div className="p-4 flex items-center gap-3 flex-row-reverse" style={{ background: "linear-gradient(to left,#DBEAFE,#BFDBFE)" }}>
            <TrendingUp className="w-8 h-8 flex-shrink-0" style={{ color: "#1E3A8A" }} />
            <div className="flex flex-col items-end">
              <h3 className="font-black text-base" style={{ color: "#1E3A8A", fontFamily: "Cairo,sans-serif" }}>مراقبة النمو</h3>
              <p className="text-xs" style={{ color: "#2563EB", fontFamily: "Cairo,sans-serif" }}>الوزن والطول ومحيط الرأس</p>
            </div>
          </div>
          <div className="p-4">
            <div className="flex gap-3 mb-4 flex-row-reverse">
              {[
                { Icon: Scale,      label: "الوزن", value: "10.2 كغ" },
                { Icon: Activity,   label: "الطول", value: "78 سم"   },
                { Icon: ClipboardList, label: "الرأس",  value: "46 سم"   },
              ].map(({ Icon, label, value }, i) => (
                <div key={i} className="flex-1 rounded-xl p-2.5 text-center" style={{ background: "#F0F9FF" }}>
                  <Icon className="w-5 h-5 mx-auto mb-1" style={{ color: "#2563EB" }} />
                  <p className="font-black text-sm" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>{value}</p>
                  <p className="text-xs text-gray-400" style={{ fontFamily: "Cairo,sans-serif" }}>{label}</p>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="rounded-2xl p-3" style={{ background: "#F0F9FF" }}>
              <p className="text-xs font-bold text-right mb-3" style={{ color: "#374151", fontFamily: "Cairo,sans-serif" }}>
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
                      background: i === 4
                        ? "linear-gradient(to top,#3B82F6,#6366F1)"
                        : "linear-gradient(to top,#93C5FD,#A5B4FC)",
                      opacity: i === 4 ? 1 : 0.6,
                    }} />
                    <span className="text-[9px] text-gray-400" style={{ fontFamily: "Cairo,sans-serif" }}>{d.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Reminders */}
        <div className="bg-white rounded-3xl overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(99,102,241,0.1)" }}>
          <div className="p-4 flex items-center gap-3 flex-row-reverse" style={{ background: "linear-gradient(to left,#EDE9FE,#DDD6FE)" }}>
            <Bell className="w-8 h-8 flex-shrink-0" style={{ color: "#4C1D95" }} />
            <div className="flex flex-col items-end">
              <h3 className="font-black text-base" style={{ color: "#4C1D95", fontFamily: "Cairo,sans-serif" }}>التذكيرات</h3>
              <p className="text-xs" style={{ color: "#6D28D9", fontFamily: "Cairo,sans-serif" }}>المواعيد والتطعيمات القادمة</p>
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
                  <p className="font-semibold text-sm" style={{ color: r.text, fontFamily: "Cairo,sans-serif" }}>{r.label}</p>
                </div>
                <p className="text-xs opacity-70" style={{ color: r.text, fontFamily: "Cairo,sans-serif" }}>{r.date}</p>
              </div>
            ))}
            <button className="w-full py-3 rounded-xl mt-1 font-bold text-sm flex items-center justify-center gap-2 flex-row-reverse transition-all active:scale-95"
              style={{ border: "2px dashed #C4B5FD", color: "#6366F1", fontFamily: "Cairo,sans-serif" }}>
              <Plus className="w-4 h-4" />
              إضافة تذكير جديد
            </button>
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

  return (
    <div className="flex flex-col min-h-full" style={{ background: "#F5F3FF" }}>
      <div className="px-5 pt-10 pb-8" style={{ background: "linear-gradient(to left,#F43F5E,#F97316)" }}>
        <h2 className="text-white text-2xl font-black text-right" style={{ fontFamily: "Cairo,sans-serif" }}>ملخص التطور</h2>
        <p className="text-rose-100 text-sm text-right mt-1" style={{ fontFamily: "Cairo,sans-serif" }}>تقرير جاهز لمشاركته مع طبيبك</p>
      </div>

      {/* Reassurance */}
      <div className="mx-5 -mt-4 bg-white rounded-2xl p-4 mb-4"
        style={{ boxShadow: "0 4px 20px rgba(244,63,94,0.12)", border: "1px solid rgba(244,63,94,0.08)" }}>
        <div className="flex items-start gap-3 flex-row-reverse">
          <Heart className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: "#3B82F6", fill: "#EFF6FF" }} />
          <div className="flex flex-col items-end gap-1">
            <h3 className="font-black text-base" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>تصرف مبكرًا... الفرق كبير</h3>
            <p className="text-sm text-right leading-relaxed" style={{ color: "#6B7280", fontFamily: "Cairo,sans-serif" }}>
              الاكتشاف المبكر يمنح طفلك الدعم الذي يحتاجه في الوقت المناسب. لا تترددي في التحدث مع طبيبك.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="flex gap-3 mx-5 mb-4">
        {[
          { Icon: CheckCircle2,  label: "مكتملة",      count: "3",  bg: "#ECFDF5", border: "#A7F3D0", iconColor: "#10B981" },
          { Icon: Clock,         label: "غير مكتملة",  count: "12", bg: "#FFFBEB", border: "#FDE68A", iconColor: "#F59E0B" },
          { Icon: AlertTriangle, label: "مخاوف",       count: "1",  bg: "#FFF1F2", border: "#FCA5A5", iconColor: "#F43F5E" },
        ].map(({ Icon, label, count, bg, border, iconColor }, i) => (
          <div key={i} className="flex-1 p-3 rounded-2xl text-center" style={{ background: bg, border: `1.5px solid ${border}` }}>
            <Icon className="w-6 h-6 mx-auto mb-1" style={{ color: iconColor }} />
            <p className="font-black text-lg" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>{count}</p>
            <p className="text-xs text-gray-400" style={{ fontFamily: "Cairo,sans-serif" }}>{label}</p>
          </div>
        ))}
      </div>

      {/* Act Early */}
      <div className="mx-5 bg-white rounded-3xl mb-4 overflow-hidden" style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>
        <div className="p-4 rounded-t-3xl" style={{ background: "linear-gradient(to left,#FEF2F2,#FFF0E6)" }}>
          <div className="flex items-center gap-2 flex-row-reverse">
            <AlertTriangle className="w-6 h-6 flex-shrink-0" style={{ color: "#C2410C" }} />
            <h3 className="font-black text-base" style={{ color: "#9A3412", fontFamily: "Cairo,sans-serif" }}>علامات تستدعي التصرف المبكر</h3>
          </div>
          <p className="text-xs text-right mt-1" style={{ color: "#C2410C", fontFamily: "Cairo,sans-serif" }}>
            إذا لاحظتِ أيًا من هذه العلامات، تحدثي مع طبيبك فورًا
          </p>
        </div>
        <div className="p-4 flex flex-col gap-2.5">
          {concerns.map((c, i) => (
            <div key={i} className="flex items-center gap-3 p-3 rounded-xl flex-row-reverse"
              style={{ background: c.flagged ? "#FFF1F2" : "#F9FAFB" }}>
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: c.flagged ? "#F43F5E" : "#E5E7EB" }}>
                {c.flagged && <Check className="w-3 h-3 text-white" />}
              </div>
              <p className="text-sm flex-1 text-right font-semibold"
                style={{ color: c.flagged ? "#BE123C" : "#6B7280", fontFamily: "Cairo,sans-serif" }}>
                {c.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Share */}
      <div className="flex gap-3 mx-5 mb-4 flex-row-reverse">
        <button className="flex-1 py-3.5 rounded-2xl text-white font-black text-sm flex items-center justify-center gap-2 flex-row-reverse active:scale-95 transition-transform"
          style={{ background: "linear-gradient(to left,#6366F1,#3B82F6)", boxShadow: "0 6px 20px rgba(99,102,241,0.3)", fontFamily: "Cairo,sans-serif" }}>
          <Share2 className="w-4 h-4" />
          مشاركة مع الطبيب
        </button>
        <button className="flex-1 py-3.5 rounded-2xl font-black text-sm flex items-center justify-center gap-2 flex-row-reverse border-2 active:scale-95 transition-transform"
          style={{ borderColor: "#E5E7EB", color: "#374151", fontFamily: "Cairo,sans-serif" }}>
          <Printer className="w-4 h-4" />
          طباعة التقرير
        </button>
      </div>

      {/* Footer note */}
      <div className="mx-5 mb-6 p-4 rounded-2xl" style={{ background: "linear-gradient(to left,#EDE9FE,#E0F2FE)" }}>
        <div className="flex items-start gap-2 flex-row-reverse">
          <Star className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#6366F1" }} />
          <p className="text-sm text-right leading-relaxed font-semibold" style={{ color: "#4338CA", fontFamily: "Cairo,sans-serif" }}>
            تذكري: التصرف المبكر لا يعني أن هناك مشكلة حتمًا — بل هو أفضل هدية يمكنك تقديمها لطفلك.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Bottom Navigation ──────────────────────────────────────────────────────────
const NAV_TABS: { id: Screen; label: string; Icon: typeof Home }[] = [
  { id: "profile",    label: "الرئيسية", Icon: Home        },
  { id: "milestones", label: "الألعاب",  Icon: Gamepad2    },
  { id: "tools",      label: "الأدوات",  Icon: Wrench      },
  { id: "tips",       label: "النصائح",  Icon: Lightbulb   },
  { id: "summary",    label: "النمو",    Icon: TrendingUp  },
];

function BottomNav({ active, onNav }: { active: Screen; onNav: (s: Screen) => void }) {
  return (
    <div className="flex flex-row-reverse px-1 py-2"
      style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 -4px 20px rgba(99,102,241,0.06)" }}>
      {NAV_TABS.map(({ id, label, Icon }) => {
        const isActive = active === id;
        return (
          <button key={id} onClick={() => onNav(id)}
            className="flex-1 flex flex-col items-center gap-1 py-2 rounded-xl transition-all"
            style={{ background: isActive ? "#EEF2FF" : "transparent" }}>
            <Icon
              className="w-5 h-5 transition-colors"
              style={{ color: isActive ? "#6366F1" : "#9CA3AF" }}
              strokeWidth={isActive ? 2.2 : 1.8}
            />
            <span className="text-[10px] font-bold leading-none transition-colors"
              style={{ color: isActive ? "#6366F1" : "#9CA3AF", fontFamily: "Cairo,sans-serif" }}>
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
      style={{ background: "linear-gradient(135deg,#E0F7F4 0%,#F5F3FF 50%,#FEF3C7 100%)", fontFamily: "Cairo,Noto Sans Arabic,sans-serif" }}
      dir="rtl">
      {/* Phone frame */}
      <div className="relative flex flex-col overflow-hidden"
        style={{
          width: 390, height: 844,
          borderRadius: "3rem",
          background: "#F5F3FF",
          boxShadow: "0 32px 80px rgba(99,102,241,0.2), 0 0 0 8px rgba(30,27,75,0.06)",
          border: "1px solid rgba(255,255,255,0.8)",
        }}>
        {/* Status bar */}
        <div className="flex-shrink-0 flex items-center justify-between px-7 py-3" style={{ zIndex: 10 }}>
          <div className="flex items-center gap-1 opacity-50">
            <div className="w-3 h-3 rounded-full border-2" style={{ borderColor: "#1E1B4B" }} />
            <div className="w-7 h-1.5 rounded-full" style={{ background: "#1E1B4B" }} />
          </div>
          <span className="text-xs font-bold opacity-60" style={{ color: "#1E1B4B", fontFamily: "Cairo,sans-serif" }}>9:41 AM</span>
          <div className="w-12 h-3 border rounded flex items-center px-0.5 opacity-50"
            style={{ borderColor: "#1E1B4B", borderRadius: 3 }}>
            <div className="h-full rounded-sm" style={{ width: "75%", background: "#1E1B4B" }} />
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
        <div className="flex-shrink-0 flex justify-center py-2" style={{ background: showNav ? "white" : "transparent" }}>
          <div className="w-24 h-1 rounded-full" style={{ background: "rgba(30,27,75,0.15)" }} />
        </div>
      </div>
    </div>
  );
}
