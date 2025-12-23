import React from "react";

interface ProgressBarProps {
  value: number;
  max?: number;
  height?: string;
  bgColor?: string;
  trackColor?: string;
  rounded?: string;
  showLabel?: boolean;
  className?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  max = 100,
  height = "h-3",
  bgColor = "bg-blue-600",
  trackColor = "bg-gray-200",
  rounded = "rounded-full",
  showLabel = false,
  className = "",
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="mb-1 text-sm font-medium text-gray-700">
          {Math.round(percentage)}%
        </div>
      )}

      <div
        className={`w-full ${height} ${trackColor} ${rounded} overflow-hidden`}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        <div
          className={`${height} ${bgColor} ${rounded} transition-all duration-300 ease-in-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
