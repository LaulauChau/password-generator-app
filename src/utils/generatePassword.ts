export function generatePassword(length: number, options: any) {
  const characters: { [key: string]: string } = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
  };

  let password = '';
  const possibleCharacters = Object.keys(options)
    .filter((option) => options[option])
    .map((option) => characters[option])
    .join('');

  for (let i = 0; i < length; i++) {
    password += possibleCharacters.charAt(
      Math.floor(Math.random() * possibleCharacters.length)
    );
  }

  return password;
}
