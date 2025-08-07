import { HelpCircle, icons, LucideProps } from "lucide-react";
import React from "react";

// Define the props for the Icon component
interface IconProps extends LucideProps {
  name: keyof typeof icons;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "currentColor",
  className = "",
  strokeWidth = 2,
  ...props
}) => {
  const IconComponent = icons[name];

  if (!IconComponent) {
    // Fallback icon if the name is invalid
    return (
      <HelpCircle
        size={size}
        color="gray"
        strokeWidth={strokeWidth}
        className={className}
        {...props}
      />
    );
  }

  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={strokeWidth}
      className={className}
      {...props}
    />
  );
};

export default Icon;
