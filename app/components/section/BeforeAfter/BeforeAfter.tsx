import type { LucideIcon } from "lucide-react";
import {
  CheckCircle2,
  Clock3,
  RefreshCw,
  Sparkles,
  XCircle,
  Repeat2,
  Pencil,
  Timer,
  Upload,
  Zap,
  Bot,
  Rocket,
} from "lucide-react";
import { StatusPill } from "../../ui";

const beforeItems = [
  {
    Icon: Repeat2,
    text: "Upload the same content to multiple platforms manually",
  },
  {
    Icon: RefreshCw,
    text: "Switch apps, log in repeatedly, and navigate different UIs",
  },
  {
    Icon: Pencil,
    text: "Write captions from scratch every single time",
  },
  {
    Icon: Timer,
    text: "Spend 15–30 minutes per post",
  },
];

const afterItems = [
  {
    Icon: Upload,
    text: "Upload once — done",
  },
  {
    Icon: Zap,
    text: "One click sends your post to all selected channels",
  },
  {
    Icon: Bot,
    text: "AI writes the caption for you (or you write it — your choice)",
  },
  {
    Icon: Rocket,
    text: "Go live in under 3 seconds",
  },
];

function CompareCard({
  tone,
  title,
  items,
}: {
  tone: "before" | "after";
  title: string;
  items: { Icon: LucideIcon; text: string }[];
}) {
  const isBefore = tone === "before";

  return (
    <div
      className={`rounded-2xl border overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-default ${
        isBefore ? "border-rose-100" : "border-emerald-100"
      }`}
    >
      <div
        className={`flex items-center gap-2 px-5 py-3 border-b font-[family-name:var(--font-spline-sans)] font-bold text-sm sm:text-base ${
          isBefore
            ? "bg-rose-50 border-rose-100 text-rose-700"
            : "bg-emerald-50 border-emerald-100 text-emerald-700"
        }`}
      >
        {isBefore ? (
          <XCircle className="w-4 h-4" />
        ) : (
          <CheckCircle2 className="w-4 h-4" />
        )}
        {title}
      </div>

      <div className="p-5 space-y-3">
        {items.map((item) => (
          <div
            key={item.text}
            className="flex items-start gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0"
          >
            <span
              className={`flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center rounded-full ${
                isBefore
                  ? "bg-rose-100 text-rose-500"
                  : "bg-emerald-100 text-emerald-600"
              }`}
            >
              <item.Icon className="w-3 h-3" />
            </span>
            <p className="text-sm text-text font-[family-name:var(--font-poppins)] leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function BeforeAfter() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <StatusPill
            className="mb-3 uppercase tracking-wider"
            showIndicator={false}
          >
            Before vs After
          </StatusPill>
          <h2 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
            The difference is night and day.
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-text font-[family-name:var(--font-poppins)] font-light">
            Replace repetitive posting with a faster, cleaner workflow that
            helps you stay consistent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <CompareCard
            tone="before"
            title="Without OneClick"
            items={beforeItems}
          />
          <CompareCard tone="after" title="With OneClick" items={afterItems} />
        </div>

        <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white border border-primary/20 flex items-center justify-center text-primary">
              <Clock3 className="w-5 h-5" />
            </div>
            <p className="text-sm sm:text-base font-[family-name:var(--font-poppins)] text-secondary">
              Save up to <strong>2+ hours/week</strong> on social posting tasks.
            </p>
          </div>
          <div className="flex items-center gap-2 text-primary text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <RefreshCw className="w-4 h-4" />
            Less friction, more momentum
          </div>
        </div>
      </div>
    </section>
  );
}
