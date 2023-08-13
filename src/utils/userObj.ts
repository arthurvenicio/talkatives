export function getStudentProperty(user: any, property: string) {
  return user.student[property];
}
export function getTeacherProperty(user: any, property: string) {
  return user.teacher[property];
}
