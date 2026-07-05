export type Personality = {
  name: string;
  mood: string;
  /** The colour her orb takes in this mood. */
  tint: string;
};

export const personalities: Personality[] = [
  { name: "Caring", mood: "warm, nurturing", tint: "#ff9ecb" },
  { name: "Tsundere", mood: "sharp, secretly sweet", tint: "#ff6b6b" },
  { name: "Genki", mood: "loud, high-energy", tint: "#ffe066" },
  { name: "Kuudere", mood: "composed, cool", tint: "#7cc7ff" },
  { name: "Yandere", mood: "intense, devoted", tint: "#c77dff" },
  { name: "Dandere", mood: "quiet, shy at first", tint: "#9df0c8" },
];
