function calculateExamDate(examDate) {
  let examDatte = new Date(examDate);
  let today = new Date();

  // Difference in milliseconds
  let diffMs = examDatte - today;

  // Convert to days
  let diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return diffDays;
}

// Example usage
let examDate = calculateExamDate("2026-09-14");
console.log(`Number of days left for exam : ${examDate}`);
