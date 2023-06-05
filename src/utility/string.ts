export function validateString(value: string) {
  if (value == "" || value == undefined) {
    return false;
  }

  return true;
}
