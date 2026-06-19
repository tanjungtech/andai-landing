export interface AssessmentAnswers {
  problemScope: string;
  targetUsers: string;
  validationLevel: string;
  teamStatus: string;
  budgetStatus: string;
}

export interface LeadInfo {
  name: string;
  email: string;
  company: string;
}

export interface AssessmentResult {
  score: number;
  grade: 'Low' | 'Medium' | 'High' | 'Elite';
  summary: string;
  suggestedNextStep: string;
  detailedAnalysis: {
    category: string;
    status: 'good' | 'warning' | 'danger';
    feedback: string;
  }[];
}
