export function createPerson(firstName: string, lastName: string) {
  return {
    firstName,
    lastName,
    fullName: `${firstName} ${lastName}`
  };
}

function logPerson(person: ReturnType<typeof createPerson>) {
  console.log("Person:", person.firstName, person.lastName, person.fullName);
}
