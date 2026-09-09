# Queue Backoff Revert

Use only if p95 remains above 750 ms after the burst-window patch.
Revert the queue retry backoff change, deploy to one cell, and monitor
Discord interaction timeout rate for 15 minutes.
