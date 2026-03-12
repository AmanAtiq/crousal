interface ProgressBarProps {
  completedSteps: number[];
}

export default function ProgressBar({ completedSteps }: ProgressBarProps) {
  const steps = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-center py-8 px-8">
      <div className="flex items-center w-full max-w-[520px]">
        {steps.map((step, i) => {
          const isCompleted = completedSteps.includes(step);

          return (
            <div key={step} className="flex items-center flex-1">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-inter font-bold text-base flex-shrink-0 transition-all duration-300"
                style={{
                  background: isCompleted ? "#C8A050" : "white",
                  border: isCompleted ? "2px solid #C8A050" : "2px solid #D6C9BA",
                  color: isCompleted ? "white" : "#4D3522",
                }}
              >
                {step}
              </div>
              {i < 4 && (
                <div
                  className="flex-1 h-0.5 transition-all duration-300"
                  style={{
                    background: isCompleted ? "#C8A050" : "#E0D6CC",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
