export interface RateLimitPlan {
  name: "free" | "team" | "enterprise";
  requestsPerMinute: number;
  burstWindowSeconds: number;
}

export const plans: Record<RateLimitPlan["name"], RateLimitPlan> = {
  free: { name: "free", requestsPerMinute: 60, burstWindowSeconds: 10 },
  team: { name: "team", requestsPerMinute: 600, burstWindowSeconds: 10 },
  enterprise: { name: "enterprise", requestsPerMinute: 3000, burstWindowSeconds: 30 },
};

export function allowedRequests(plan: RateLimitPlan, elapsedSeconds: number): number {
  const baseAllowance = Math.floor((plan.requestsPerMinute / 60) * elapsedSeconds);
  const burstAllowance = Math.ceil(plan.requestsPerMinute * (plan.burstWindowSeconds / 60));

  return Math.max(baseAllowance, burstAllowance);
}

export function shouldThrottle(plan: RateLimitPlan, elapsedSeconds: number, observed: number): boolean {
  return observed > allowedRequests(plan, elapsedSeconds);
}
