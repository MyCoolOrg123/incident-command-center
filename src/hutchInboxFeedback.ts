export interface PendingIncident {
  id: string;
  summary: string;
}

/** Disposable fixture used to generate CodeRabbit feedback in Hutch. */
export function firstPendingIncident(incidents: PendingIncident[]): PendingIncident {
  return incidents[0];
}

