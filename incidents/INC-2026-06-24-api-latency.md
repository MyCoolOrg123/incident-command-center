# INC-2026-06-24 API Latency

## Summary

API p95 latency rose from 220 ms to 1.8 s after the queue backoff change merged.
Error rate stayed below 1 percent, but Discord command interactions timed out for
roughly 18 percent of requests.

## Suspect changes

- `9f4a2c1` adjusted queue retry backoff.
- `52c8dd0` changed team-plan rate limit burst windows.
- `a81bb12` updated dashboard sampling intervals.

## Decision

Patch burst-window calculation first. Revert queue backoff only if p95 remains above
750 ms after the patch deploy.

## Patch proposal

Reduce the team burst window from 15 seconds to 10 seconds and watch p95 for 30 minutes.
