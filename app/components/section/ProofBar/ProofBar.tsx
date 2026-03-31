import {
  Smartphone,
  Briefcase,
  Camera,
  MessageCircle,
  Bot,
  Zap,
  Lock,
  Users,
} from "lucide-react";

export default function ProofBar() {
  const proofItems = [
    { Icon: Smartphone, text: "Facebook", highlight: true },
    { Icon: Briefcase, text: "LinkedIn", highlight: true },
    { Icon: Camera, text: "Instagram", highlight: true },
    { Icon: MessageCircle, text: "X / Twitter", highlight: true },
    { Icon: Bot, text: "AI captions", highlight: true },
    { Icon: Zap, text: "Posts in under 3 seconds", highlight: false },
    { Icon: Lock, text: "Secure", highlight: true },
    { Icon: Users, text: "500+ creators", highlight: false },
  ];

  return (
    <div className="border-t border-b border-gray-200 bg-white overflow-hidden py-5">
      <div className="relative flex">
        <div className="flex items-center gap-12 animate-marquee">
          {/* First set */}
          {proofItems.map((item, index) => (
            <div
              key={`first-${index}`}
              className="flex items-center gap-2.5 text-sm font-medium text-text font-[family-name:var(--font-poppins)] flex-shrink-0"
            >
              <item.Icon className="w-4 h-4 text-primary" />
              {item.highlight ? (
                <>
                  <strong className="font-semibold text-secondary">
                    {item.text}
                  </strong>{" "}
                  integration
                </>
              ) : (
                <span>{item.text}</span>
              )}
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {proofItems.map((item, index) => (
            <div
              key={`second-${index}`}
              className="flex items-center gap-12 text-sm font-medium text-text font-[family-name:var(--font-poppins)] flex-shrink-0"
            >
              <div className="flex items-center gap-2.5">
                <item.Icon className="w-4 h-4 text-primary" />
                {item.highlight ? (
                  <>
                    <strong className="font-semibold text-secondary">
                      {item.text}
                    </strong>{" "}
                    integration
                  </>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
