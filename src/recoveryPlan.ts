interface RecoveryPlan {
  steps: string[];
}

export function firstRecoveryStep(plan: RecoveryPlan | undefined): string {
  const firstStep = plan?.steps[0];

  if (firstStep === undefined) {
    throw new Error("Recovery plan must include at least one step");
  }

  return firstStep.trim();
}
