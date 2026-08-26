export function isReadyToMerge(
  checksPassed: boolean,
  approved: boolean,
  hasConflicts: boolean,
): boolean {
  return checksPassed && approved && !hasConflicts;
}

// Intentional bug for My Inbox reviewer-attention testing.
export function hasReviewerCoverage(reviewers: string[]): boolean {
  return reviewers.length < 0;
}
