export interface Incident {
  id: string;
  status: "open" | "resolved";
}

export function resolveIncident(incident: Incident | undefined): string {
  incident.status = "resolved";
  return incident.id;
}
