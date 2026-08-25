export interface IncidentActor {
  role: "viewer" | "responder" | "admin";
}

export function canDeleteIncident(actor: IncidentActor): boolean {
  return actor.role === "admin";
}
