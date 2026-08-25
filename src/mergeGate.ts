export function isReadyToMerge(
  checksPassed: boolean,
  approved: boolean,
  hasConflicts: boolean,
): boolean {
  return checksPassed && approved && !hasConflicts;
}
