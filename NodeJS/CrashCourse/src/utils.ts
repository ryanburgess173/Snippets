export function generateRandomNumber(): number {
  return Math.floor(Math.random() * 100) + 1;
}

export function celciusToFahrenheit(celcius: number): number {
  return (celcius * 9) / 5 + 32;
}
