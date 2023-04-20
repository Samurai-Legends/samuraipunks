export type ValueType = {
  value: string;
  label: string;
  disabled?: boolean;
}

export const unitTypes: ValueType[] = [
  {value: 'archer', label: 'Archer'},
  {value: 'onnaMushaArcher', label: 'Onna Musha Archer'},
  {value: 'artisan', label: 'Artisan', disabled: true},
  {value: 'ashigaruArcher', label: 'Ashigaru Archer'},
  {value: 'ashigaruSpearman', label: 'Ashigaru Spearman'},
  {value: 'blacksmith', label: 'Blacksmith'},
  {value: 'carpenter', label: 'Carpenter'},
  {value: 'farmer', label: 'Farmer'},
  {value: 'fisherman', label: 'Fisherman'},
  {value: 'geisha', label: 'Geisha'},
  {value: 'general', label: 'General'},
  {value: 'imperialWarlord', label: 'Imperial Warlord'},
  {value: 'hatamoto', label: 'Hatamoto'},
  {value: 'laborer', label: 'Laborer', disabled: true},
  {value: 'monk', label: 'Monk'},
  {value: 'malevolentMonk', label: 'Malevolent Monk'},
  {value: 'mystic', label: 'Mystic'},
  {value: 'ninja', label: 'Ninja'},
  {value: 'kunoichi', label: 'Kunoichi Ninja'},
  {value: 'runner', label: 'Runner'},
  {value: 'samurai', label: 'Samurai'},
  {value: 'limitedEdition', label: 'Corrupt/Divine Samurai'},
  {value: 'wokouPirate', label: 'Wokou Pirate'},
];