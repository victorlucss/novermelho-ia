
import * as React from "react"
import { Check } from "lucide-react"
import { cn } from "~/lib/utils"

const PREDEFINED_COLORS = [
  { name: "Blue", value: "#3B82F6" },
  { name: "Red", value: "#EF4444" },
  { name: "Green", value: "#22C55E" },
  { name: "Purple", value: "#8B5CF6" },
  { name: "Yellow", value: "#F59E0B" },
]

interface ColorSelectProps {
  value: string
  onChange: (value: string) => void
  customColor?: boolean
}

export function ColorSelect({
  value,
  onChange,
  customColor = true,
}: ColorSelectProps) {
  const [showCustom, setShowCustom] = React.useState(
    !PREDEFINED_COLORS.some(color => color.value === value)
  )

  const handleColorSelect = (colorValue: string) => {
    onChange(colorValue)
    setShowCustom(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        {PREDEFINED_COLORS.map((color) => (
          <button
            key={color.value}
            type="button"
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center transition-transform",
              value === color.value && "ring-2 ring-primary scale-110"
            )}
            style={{ backgroundColor: color.value }}
            onClick={() => handleColorSelect(color.value)}
            aria-label={`Select ${color.name} color`}
          >
            {value === color.value && (
              <Check className="h-4 w-4 text-white" />
            )}
          </button>
        ))}

        {customColor && (
          <button
            type="button"
            className={cn(
              "w-8 h-8 rounded-full bg-muted flex items-center justify-center text-xs font-medium",
              showCustom && "ring-2 ring-primary scale-110"
            )}
            onClick={() => setShowCustom(true)}
            aria-label="Custom color"
          >
            +
          </button>
        )}
      </div>

      {showCustom && customColor && (
        <div>
          <label className="text-sm font-medium">
            Custom color
            <input
              type="color"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="block w-full h-10 mt-1 rounded-md"
            />
          </label>
        </div>
      )}
    </div>
  )
}
