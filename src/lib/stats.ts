function getWeeksElapsed() {
  const baseDate = new Date("2026-02-14T12:00:00Z");
  const now = new Date();
  const msElapsed = now.getTime() - baseDate.getTime();
  return Math.max(0, Math.floor(msElapsed / (7 * 24 * 60 * 60 * 1000)));
}

export function getInstallCount() {
  return 103 + getWeeksElapsed() * 2;
}

export function getSprinklerCount() {
  return 1024 + getWeeksElapsed() * 21;
}

export const TEAM_MEMBERS = 27;
export const COUNTRIES = 3;
