export interface CheckResult {
  url: string;
  veracity: 'real' | 'fake';
  confidence: number;
  threshold: number;
  extracted_at: string;
}