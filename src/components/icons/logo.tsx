import { BarChart3 } from 'lucide-react';

export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <BarChart3 className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold text-primary font-headline tracking-tight">
        InferenceROI
      </span>
    </div>
  );
}
