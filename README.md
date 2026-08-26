# Incident Command Center

Incident Command Center contains the runbooks and service code used during API
incidents, including alert correlation, rate-limit policy, and rollback guidance.

## What lives here

- `runbooks/incident-response.md` defines severity, roles, and rollback rules.
- `incidents/` stores incident notes and follow-up decisions.
- `src/rateLimiter.ts` implements plan-specific request limits.
- `src/alertCorrelator.ts` ranks recent changes against active alerts.

## Operating notes

1. Open an incident thread when customer-visible degradation lasts 15 minutes.
2. Prefer a feature flag or small patch when the risky path is isolated.
3. Use a revert when error rate is above 5 percent and shared middleware changed.

## Weekly random words

- 2026-07-15: lantern
