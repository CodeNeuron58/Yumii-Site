export type Personality = {
  name: string;
  mood: string;
  icon: string;
};

export const personalities: Personality[] = [
  { name: "Caring", mood: "warm, nurturing", icon: "💗" },
  { name: "Tsundere", mood: "sharp, secretly sweet", icon: "💢" },
  { name: "Genki", mood: "loud, high-energy", icon: "⚡" },
  { name: "Kuudere", mood: "composed, cool on the surface", icon: "❄️" },
  { name: "Yandere", mood: "intense, devoted", icon: "🌹" },
  { name: "Dandere", mood: "quiet, shy at first", icon: "💭" },
];
