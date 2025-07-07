'use client';

import { useState } from "react";
import { CheckResult } from "@types";

export const useCheckFlow= () => {
  const [activeTab, setActiveTab] = useState<'check' | 'history' | 'info' | 'credits'>('check');
  const [results, setResults] = useState<CheckResult | null>(null);
  const [history, setHistory] = useState<CheckResult[]>([]);

  const handleResults = (data: CheckResult) => {
    setResults(data);
    setHistory(prev => [...prev, data]);
  };

  return {
    activeTab,
    setActiveTab,
    results,
    history,
    handleResults
  };
}
