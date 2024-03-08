function evaluateGrade(totalMarks, isFinalExam) {
    const minScoreForAPlus = isFinalExam ? 90 : 89;
    
    return totalMarks >= minScoreForAPlus && totalMarks <= 100;
  }
  const studentTotalMarks1 = 92;
  const studentTotalMarks2 = 87;
  const isFinalExam1 = true;
  const isFinalExam2 = false;
  const result1 = evaluateGrade(studentTotalMarks1, isFinalExam1);
  const result2 = evaluateGrade(studentTotalMarks2, isFinalExam2);
  
  console.log(`Result 1: ${result1}`); // Should return true
  console.log(`Result 2: ${result2}`); // Should return false
  