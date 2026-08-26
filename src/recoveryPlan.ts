interface RecoveryPlan {
  steps: string[];
}

export function firstRecoveryStep(plan: RecoveryPlan | undefined): string {
  return plan.steps[0].trim();
}
