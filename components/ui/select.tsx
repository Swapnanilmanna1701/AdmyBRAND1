import Button from "@/components/ui/button1";
import Input from "@/components/ui/input1";
import { cn } from "@/lib/utils";
import { Check, ChevronDown, Search, X } from "lucide-react";
import React, { useId, useState } from "react";

// Define the shape of each option
export interface SelectOption {
  value: string | number;
  label: string;
  description?: string;
  disabled?: boolean;
}

// Define the props for the Select component
export interface SelectProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onChange" | "value"
  > {
  options?: SelectOption[];
  value?: string | number | (string | number)[];
  defaultValue?: string | number | (string | number)[];
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  description?: string;
  error?: string;
  searchable?: boolean;
  clearable?: boolean;
  loading?: boolean;
  name?: string;
  onChange?: (value: any) => void;
  onOpenChange?: (isOpen: boolean) => void;
}

const Select = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      className,
      options = [],
      value,
      placeholder = "Select an option",
      multiple = false,
      disabled = false,
      required = false,
      label,
      description,
      error,
      searchable = false,
      clearable = false,
      loading = false,
      id,
      name,
      onChange,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const generatedId = useId();
    const selectId = id || generatedId;

    const filteredOptions =
      searchable && searchTerm
        ? options.filter(
            (option) =>
              option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
              option.value
                .toString()
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
          )
        : options;

    const getSelectedDisplay = (): string => {
      if (multiple) {
        const valArray = Array.isArray(value) ? value : [];
        if (valArray.length === 0) return placeholder;
        const selectedOptions = options.filter((opt) =>
          valArray.includes(opt.value)
        );
        if (selectedOptions.length === 0) return placeholder;
        if (selectedOptions.length === 1) return selectedOptions[0].label;
        return `${selectedOptions.length} items selected`;
      }
      const selectedOption = options.find((opt) => opt.value === value);
      return selectedOption ? selectedOption.label : placeholder;
    };

    const handleToggle = () => {
      if (disabled) return;
      const newIsOpen = !isOpen;
      setIsOpen(newIsOpen);
      onOpenChange?.(newIsOpen);
      if (!newIsOpen) setSearchTerm("");
    };

    const handleOptionSelect = (option: SelectOption) => {
      if (multiple) {
        const valArray = Array.isArray(value) ? value : [];
        const newValue = valArray.includes(option.value)
          ? valArray.filter((v) => v !== option.value)
          : [...valArray, option.value];
        onChange?.(newValue);
      } else {
        onChange?.(option.value);
        setIsOpen(false);
        onOpenChange?.(false);
      }
    };

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      onChange?.(multiple ? [] : undefined);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };

    const isSelected = (optionValue: string | number): boolean => {
      if (multiple) {
        return Array.isArray(value) && value.includes(optionValue);
      }
      return value === optionValue;
    };

    const hasValue = multiple
      ? Array.isArray(value) && value.length > 0
      : value !== undefined && value !== "";

    return (
      <div className={cn("relative w-full", className)}>
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2 block",
              error ? "text-destructive" : "text-foreground"
            )}
          >
            {label}
            {required && <span className="text-destructive ml-1">*</span>}
          </label>
        )}
        <div className="relative">
          <button
            ref={ref}
            id={selectId}
            type="button"
            className={cn(
              "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              error && "border-destructive focus:ring-destructive",
              !hasValue && "text-muted-foreground"
            )}
            onClick={handleToggle}
            disabled={disabled || loading}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            {...props}
          >
            <span className="truncate">{getSelectedDisplay()}</span>
            <div className="flex items-center gap-1">
              {loading && (
                <svg
                  className="animate-spin h-4 w-4 text-muted-foreground"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
              )}
              {clearable && hasValue && !loading && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-5 w-5"
                  onClick={handleClear}
                >
                  <X className="h-3 w-3" />
                </Button>
              )}
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform text-muted-foreground",
                  isOpen && "rotate-180"
                )}
              />
            </div>
          </button>

          {/* Hidden native select for form submission */}
          <select
            name={name}
            value={value || ""}
            onChange={() => {}} // Controlled by our custom logic
            className="sr-only"
            tabIndex={-1}
            multiple={multiple}
            required={required}
          >
            <option value="">Select...</option>
            {options?.map((option) => (
              <option key={option?.value} value={option?.value}>
                {option?.label}
              </option>
            ))}
          </select>

          {/* Dropdown */}
          {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-background border border-border rounded-md shadow-lg">
              {searchable && (
                <div className="p-2 border-b border-border">
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search..."
                      value={searchTerm}
                      onChange={handleSearchChange}
                      className="pl-8"
                    />
                  </div>
                </div>
              )}
              <div className="py-1 max-h-60 overflow-auto">
                {filteredOptions.length === 0 ? (
                  <div className="px-3 py-2 text-sm text-muted-foreground">
                    {searchTerm ? "No options found" : "No options available"}
                  </div>
                ) : (
                  filteredOptions.map((option) => (
                    <div
                      key={option.value}
                      className={cn(
                        "relative flex cursor-pointer select-none items-center rounded-sm px-3 py-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground",
                        isSelected(option.value) && "font-semibold",
                        option.disabled && "pointer-events-none opacity-50"
                      )}
                      onClick={() =>
                        !option.disabled && handleOptionSelect(option)
                      }
                    >
                      <span className="flex-grow">{option.label}</span>
                      {isSelected(option.value) && !multiple && (
                        <Check className="h-4 w-4 ml-2" />
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
        {description && !error && (
          <p className="text-sm text-muted-foreground mt-1.5">{description}</p>
        )}
        {error && <p className="text-sm text-destructive mt-1">{error}</p>}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
