export function getUserGender(user: any) {
  if (!user) return;
  if (user.student) {
    return user.student.gender.name;
  }

  if (user.teacher) {
    return user.teacher.gender.name;
  }
}
