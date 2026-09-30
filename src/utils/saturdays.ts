import { Language } from '../data/translations';

export interface SaturdayOption {
  value: string; // YYYY-MM-DD
  label: string;
}

export function getUpcomingSaturdays(lang: Language = 'te', count = 8): SaturdayOption[] {
  const saturdays: SaturdayOption[] = [];
  const today = new Date();
  const current = new Date(today);

  // Advance to upcoming Saturday (0 = Sun, ..., 6 = Sat)
  while (current.getDay() !== 6) {
    current.setDate(current.getDate() + 1);
  }

  const monthsEn = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthsTe = ['జనవరి', 'ఫిబ్రవరి', 'మార్చి', 'ఏప్రిల్', 'మే', 'జూన్', 'జూలై', 'ఆగస్టు', 'సెప్టెంబర్', 'అక్టోబర్', 'నవంబర్', 'డిసెంబర్'];

  for (let i = 0; i < count; i++) {
    const year = current.getFullYear();
    const monthIndex = current.getMonth();
    const dayNum = current.getDate();
    const padDay = String(dayNum).padStart(2, '0');
    const padMonth = String(monthIndex + 1).padStart(2, '0');
    const isoValue = `${year}-${padMonth}-${padDay}`;

    if (lang === 'te') {
      const monthStr = monthsTe[monthIndex];
      const label = `శనివారం, ${dayNum} ${monthStr} ${year}`;
      saturdays.push({ value: isoValue, label });
    } else {
      const monthStr = monthsEn[monthIndex];
      const label = `Saturday, ${dayNum} ${monthStr} ${year}`;
      saturdays.push({ value: isoValue, label });
    }

    current.setDate(current.getDate() + 7);
  }

  return saturdays;
}
