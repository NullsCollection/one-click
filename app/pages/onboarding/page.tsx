"use client";

import { useState } from "react";
import { CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { Button, StatusPill } from "../../components/ui";

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
      "n8n is an automation platform we use to power your posting workflow",
  },
  {
    id: "has_inhouse_tech",
    question: "Do you have in-house tech support?",
    description:
      "This helps us understand your technical setup and support needs",
  },
];

export default function OnboardingPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showScheduling, setShowScheduling] = useState(false);

  const handleAnswer = (questionId: string, answer: boolean) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);

    // Move to next question or show scheduling
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // All questions answered, show scheduling
      setShowScheduling(true);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setShowScheduling(false);
    }
  };

  if (showScheduling) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5 flex items-center justify-center px-4 py-12">
        {/* Background decoration */}
        <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-radial from-purple-400/10 to-transparent pointer-events-none" />

        <div className="relative w-full max-w-3xl">
          {/* Header */}
          <div className="text-center mb-8">
            <StatusPill
              className="mb-4 flex w-fit mx-auto"
              showIndicator={false}
            >
              Final Step
            </StatusPill>
            <h1 className="font-[family-name:var(--font-spline-sans)] text-4xl font-bold text-secondary mb-3">
              Let's schedule your setup call
            </h1>
            <p className="text-text font-[family-name:var(--font-poppins)] text-lg max-w-2xl mx-auto">
              Book a time that works for you. We'll get everything configured
              and have you posting in no time.
            </p>
          </div>

          {/* Answers Summary */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-6 mb-6">
            <h3 className="font-[family-name:var(--font-spline-sans)] text-lg font-bold text-secondary mb-4">
              Your Setup Profile
            </h3>
            <div className="space-y-3">
              {questions.map((q) => (
                <div
                  key={q.id}
                  className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
                >
                  <span className="text-sm text-text font-[family-name:var(--font-poppins)]">
                    {q.question}
                  </span>
                  <span
                    className={`text-sm font-semibold font-[family-name:var(--font-poppins)] ${
                      answers[q.id] ? "text-green-600" : "text-orange-600"
                    }`}
                  >
                    {answers[q.id] ? "Yes" : "No"}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => {
                setShowScheduling(false);
                setCurrentStep(0);
              }}
              className="mt-4 text-sm text-primary hover:text-primary/80 font-[family-name:var(--font-poppins)] font-medium"
            >
              ← Change answers
            </button>
          </div>

          {/* Cal.com Embed */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-100 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-spline-sans)] text-lg font-bold text-secondary">
                    Schedule Your Setup Call
                  </h3>
                  <p className="text-sm text-text font-[family-name:var(--font-poppins)]">
                    Pick a time that works best for you
                  </p>
                </div>
              </div>
            </div>

            {/* Cal.com iframe placeholder */}
            <div className="p-6 min-h-[600px] bg-white">
              <div className="w-full h-[550px] border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                  <p className="text-text font-[family-name:var(--font-poppins)] text-sm mb-2">
                    Cal.com scheduling widget will be embedded here
                  </p>
                  <p className="text-text/60 font-[family-name:var(--font-poppins)] text-xs max-w-md">
                    Replace this placeholder with your Cal.com embed code
                  </p>
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200 max-w-md mx-auto">
                    <code className="text-xs text-secondary font-mono">
                      {`<Cal calLink="your-username/setup-call" />`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skip Option */}
          <div className="mt-6 text-center">
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className="text-sm text-text hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
            >
              Skip for now, I'll schedule later →
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-primary/5 flex items-center justify-center px-4 py-12">
      {/* Background decoration */}
      <div className="absolute top-20 right-[-100px] w-[500px] h-[500px] bg-gradient-radial from-primary/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[400px] h-[400px] bg-gradient-radial from-purple-400/10 to-transparent pointer-events-none" />

      <div className="relative w-full max-w-2xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-text font-[family-name:var(--font-poppins)]">
              Question {currentStep + 1} of {questions.length}
            </span>
            <span className="text-sm text-text font-[family-name:var(--font-poppins)]">
              {Math.round(((currentStep + 1) / questions.length) * 100)}%
              complete
            </span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{
                width: `${((currentStep + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xl p-8 mb-6">
          <div className="text-center mb-8">
            <h1 className="font-[family-name:var(--font-spline-sans)] text-3xl font-bold text-secondary mb-3">
              {currentQuestion.question}
            </h1>
            <p className="text-text font-[family-name:var(--font-poppins)] text-base max-w-xl mx-auto">
              {currentQuestion.description}
            </p>
          </div>

          {/* Answer Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => handleAnswer(currentQuestion.id, true)}
              className="group relative p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-200"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-green-100 group-hover:bg-green-200 flex items-center justify-center transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-green-600" />
                </div>
                <span className="font-[family-name:var(--font-spline-sans)] text-xl font-bold text-secondary">
                  Yes
                </span>
              </div>
            </button>

            <button
              onClick={() => handleAnswer(currentQuestion.id, false)}
              className="group relative p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-primary/5 transition-all duration-200"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-orange-100 group-hover:bg-orange-200 flex items-center justify-center transition-colors">
                  <div className="w-6 h-6 rounded-full border-3 border-orange-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-0.5 bg-orange-600 rotate-45" />
                    </div>
                  </div>
                </div>
                <span className="font-[family-name:var(--font-spline-sans)] text-xl font-bold text-secondary">
                  No
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          {currentStep > 0 ? (
            <button
              onClick={goBack}
              className="text-sm text-text hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
            >
              ← Previous question
            </button>
          ) : (
            <div />
          )}

          <a
            href="/"
            className="text-sm text-text hover:text-secondary font-[family-name:var(--font-poppins)] transition-colors"
          >
            Skip onboarding
          </a>
        </div>
      </div>
    </div>
  );
}
