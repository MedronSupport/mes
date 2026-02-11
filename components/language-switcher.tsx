"use client";

import { useLanguage } from "@/lib/language-context";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-1 bg-slate-800/50 rounded-lg p-1">
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setLanguage('tr')}
        className={`h-8 px-3 text-sm ${
          language === 'tr'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'text-slate-400 hover:text-white hover:bg-slate-700'
        }`}
      >
        TR
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => setLanguage('en')}
        className={`h-8 px-3 text-sm ${
          language === 'en'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'text-slate-400 hover:text-white hover:bg-slate-700'
        }`}
      >
        EN
      </Button>
    </div>
  );
}
