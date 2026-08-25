export interface Incident {
  id: string;
  status: "open" | "resolved";
}

export function resolveIncident(incident: Incident | undefined): string {
  if (!incident) {
    throw new Error("Cannot resolve an undefined incident");
  }

  incident.status = "resolved";
  return incident.id;
}
