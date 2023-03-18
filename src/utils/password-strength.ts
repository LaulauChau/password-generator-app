export function calculateStrengh(length: number, options: any) {
  // Minimum strength is 1
  // Maximum strength is 4

  let strength = 0;

  if (length >= 10) {
    strength++;
  }

  if (options.uppercase) {
    strength++;
  }

  if (options.numbers) {
    strength++;
  }

  if (options.symbols) {
    strength++;
  }

  return strength;
}

export function getStrengthColor(index: number, strength: number) {
  if (index >= strength) return 'border-almost-white';

  switch (strength) {
    case 1:
      return 'bg-red';
    case 2:
      return 'bg-orange';
    case 3:
      return 'bg-yellow';
    case 4 || 5:
      return 'bg-neon-green';
    default:
      return 'bg-red';
  }
}

export function getStrengthText(strength: number) {
  switch (strength) {
    case 1:
      return 'TOO WEAK!';
    case 2:
      return 'WEAK';
    case 3:
      return 'MEDIUM';
    case 4:
      return 'STRONG';
    default:
      return 'TOO WEAK!';
  }
}
