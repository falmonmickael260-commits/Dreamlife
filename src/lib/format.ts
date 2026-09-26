export const euros = (n: number) => `${n} €`;

/** « 2 h 30 », « 5 h », « 2 jours » — jamais « 150 min ». */
export function duration(hours: number): string {
  if (hours >= 24) {
    const days = Math.round(hours / 24);
    return days <= 1 ? '1 jour' : `${days} jours`;
  }
  const h = Math.floor(hours);
  const m = Math.round((hours - h) * 60);
  return m ? `${h} h ${m}` : `${h} h`;
}

export const initialsOf = (name: string) =>
  name
    .split(/[\s'’-]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('');
