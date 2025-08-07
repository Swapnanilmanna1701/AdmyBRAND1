"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"

const inputVariants = cva(
  "flex w-full rounded-xl border border-input bg-background px-4 py-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-input",
        error: "border-red-500 focus-visible:ring-red-500",
        success: "border-green-500 focus-visible:ring-green-500",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-4 text-sm",
        lg: "h-14 px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
)

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputVariants> {
  label?: string
  helperText?: string
  error?: string
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, type, label, helperText, error, icon, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)
    const isPassword = type === "password"
    const inputType = isPassword && showPassword ? "text" : type

    const inputVariant = error ? "error" : variant

    return (
      <div className="space-y-2">
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">{icon}</div>
          )}
          <input
            type={inputType}
            className={cn(
              inputVariants({ variant: inputVariant, size }),
              icon && "pl-10",
              isPassword && "pr-10",
              className,
            )}
            ref={ref}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          )}
        </div>
        {(helperText || error) && (
          <p className={cn("text-xs", error ? "text-red-500" : "text-muted-foreground")}>{error || helperText}</p>
        )}
      </div>
    )
  },
)
Input.displayName = "Input"

export { Input, inputVariants }
