"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, Calendar, Zap, ChevronLeft } from "lucide-react";
import { StatusPill } from "../../components/ui";
import { cn } from "@/lib/utils";

type Question = {
  id: string;
  question: string;
  description: string;
};

const questions: Question[] = [
  {
    id: "has_n8n",
    question: "Do you have n8n?",
    description:
      "n8n is the automation platform we use to power your posting workflow.",
  },
  {
    id: "has_inhouse_tech",
    question: "Do you have in-house tech support?",
    description:
      "This helps us understand your technical setup and support needs.",
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showScheduling, setShowScheduling] = useState(false);

  const handleAnswer = (questionId: string, answer: boolean) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowScheduling(true);
    }
  };

  const goBack = () => {
    if (showScheduling) {
      setShowScheduling(false);
    } else if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const totalSteps = questions.length + 1;
  const activeStep = showScheduling ? questions.length : currentStep;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top bar */}
      <header className="border-b border-gray-100 px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-secondary font-[family-name:var(--font-spline-sans)] text-lg font-bold"
        >
          <span className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-white" />
          </span>
          OneClick
        </a>

        {/* Step dots */}
        <div className="flex items-center gap-1.5">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={cn(
                "rounded-full transition-all duration-300",
                i < activeStep
                  ? "w-2 h-2 bg-primary"
                  : i === activeStep
                    ? "w-6 h-2 bg-primary"
                    : "w-2 h-2 bg-gray-200"
              )}
            />
          ))}
        </div>

        <a
          href="/"
          className="text-xs text-gray-400 hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
        >
          Skip
        </a>
      </header>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        {showScheduling ? (
          <SchedulingView
            questions={questions}
            answers={answers}
            onBack={goBack}
            onChangeAnswers={() => {
              setShowScheduling(false);
              setCurrentStep(0);
            }}
          />
        ) : (
          <QuestionView
            question={questions[currentStep]}
            currentStep={currentStep}
            totalQuestions={questions.length}
            onAnswer={handleAnswer}
            onBack={goBack}
          />
        )}
      </main>
    </div>
  );
}

function QuestionView({
  question,
  currentStep,
  totalQuestions,
  onAnswer,
  onBack,
}: {
  question: Question;
  currentStep: number;
  totalQuestions: number;
  onAnswer: (id: string, answer: boolean) => void;
  onBack: () => void;
}) {
  return (
    <div className="w-full max-w-lg">
      <div className="text-center mb-10">
        <StatusPill className="mb-5 mx-auto w-fit" showIndicator={false}>
          Step {currentStep + 1} of {totalQuestions}
        </StatusPill>
        <h1 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-4 leading-tight">
          {question.question}
        </h1>
        <p className="text-text font-[family-name:var(--font-poppins)] text-base max-w-sm mx-auto">
          {question.description}
        </p>
      </div>

      {/* Answer options */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        <button
          onClick={() => onAnswer(question.id, true)}
          className="group p-7 rounded-2xl border-2 border-gray-200 hover:border-primary hover:bg-primary/[0.03] transition-all duration-200 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/15"
        >
          <div className="w-12 h-12 rounded-xl bg-green-50 group-hover:bg-green-100 flex items-center justify-center transition-colors mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-500" />
          </div>
          <div className="font-[family-name:var(--font-spline-sans)] text-2xl font-bold text-secondary mb-1">
            Yes
          </div>
          <div className="text-xs text-text/60 font-[family-name:var(--font-poppins)]">
            We've got it covered
          </div>
        </button>

        <button
          onClick={() => onAnswer(question.id, false)}
          className="group p-7 rounded-2xl border-2 border-gray-200 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-200"
        >
          <div className="w-12 h-12 rounded-xl bg-gray-100 group-hover:bg-gray-200 flex items-center justify-center transition-colors mb-4">
            <XCircle className="w-6 h-6 text-gray-400" />
          </div>
          <div className="font-[family-name:var(--font-spline-sans)] text-2xl font-bold text-secondary mb-1">
            No
          </div>
          <div className="text-xs text-text/60 font-[family-name:var(--font-poppins)]">
            We'll help you set it up
          </div>
        </button>
      </div>

      {currentStep > 0 && (
        <div className="text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm text-text hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous question
          </button>
        </div>
      )}
    </div>
  );
}

function SchedulingView({
  questions,
  answers,
  onBack,
  onChangeAnswers,
}: {
  questions: Question[];
  answers: Record<string, boolean>;
  onBack: () => void;
  onChangeAnswers: () => void;
}) {
  return (
    <div className="w-full max-w-2xl">
      <div className="text-center mb-8">
        <StatusPill className="mb-5 mx-auto w-fit" showIndicator={false}>
          Final Step
        </StatusPill>
        <h1 className="font-[family-name:var(--font-spline-sans)] text-4xl sm:text-5xl font-bold text-secondary mb-3 leading-tight">
          Book your setup call
        </h1>
        <p className="text-text font-[family-name:var(--font-poppins)] text-base max-w-md mx-auto">
          We'll get everything configured and have you live in under 30
          minutes.
        </p>
      </div>

      {/* Profile summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 mb-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-[family-name:var(--font-poppins)] text-xs font-semibold text-secondary uppercase tracking-wide">
            Your Setup Profile
          </h3>
          <button
            onClick={onChangeAnswers}
            className="text-xs text-primary hover:text-primary/80 font-[family-name:var(--font-poppins)] font-medium"
          >
            Edit answers
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {questions.map((q) => (
            <div
              key={q.id}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium font-[family-name:var(--font-poppins)] border",
                answers[q.id]
                  ? "bg-green-50 border-green-200 text-green-700"
                  : "bg-orange-50 border-orange-200 text-orange-700"
              )}
            >
              <span
                className={cn(
                  "w-1.5 h-1.5 rounded-full",
                  answers[q.id] ? "bg-green-500" : "bg-orange-400"
                )}
              />
              {q.question.replace("Do you have ", "").replace("?", "")}:{" "}
              <span className="font-semibold">
                {answers[q.id] ? "Yes" : "No"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Cal.com embed */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-100">
          <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <Calendar className="w-4 h-4 text-primary" />
          </div>
          <div>
            <div className="font-[family-name:var(--font-spline-sans)] font-bold text-secondary text-sm">
              Schedule Your Setup Call
            </div>
            <div className="text-xs text-text font-[family-name:var(--font-poppins)]">
              30 minutes · Free · Via Zoom or Google Meet
            </div>
          </div>
        </div>

        <div className="p-8 min-h-[380px] flex items-center justify-center">
          <div className="text-center w-full">
            <div className="w-16 h-16 rounded-2xl bg-primary/5 border-2 border-dashed border-primary/20 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7 text-primary/30" />
            </div>
            <p className="text-sm font-medium text-secondary font-[family-name:var(--font-poppins)] mb-1">
              Cal.com embed goes here
            </p>
            <p className="text-xs text-text/60 font-[family-name:var(--font-poppins)] mb-4 max-w-xs mx-auto">
              Replace with your Cal.com embed code
            </p>
            <code className="inline-block text-xs bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 font-mono text-secondary">
              {'<Cal calLink="your-username/setup-call" />'}
            </code>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-sm text-text hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Back
        </button>
        <button
          onClick={() => (window.location.href = "/dashboard")}
          className="text-sm text-text/60 hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
        >
          Skip, I'll schedule later →
        </button>
      </div>
    </div>
  );
}
