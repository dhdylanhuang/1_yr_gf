// Date formatting helpers for memory display strings.
import { format } from 'date-fns';

export function formatMemoryDate(takenAtISO: string): string {
  return format(new Date(takenAtISO), 'dd MMM yyyy');
}

export function formatMonthYear(takenAtISO: string): string {
  return format(new Date(takenAtISO), 'MMMM yyyy');
}

export function formatMemoryStamp(takenAtISO: string, place: string): string {
  return `${formatMemoryDate(takenAtISO)} · ${place}`;
}
