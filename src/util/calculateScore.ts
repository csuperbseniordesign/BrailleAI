interface Answers {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
    question8: string;
  }

export const calculateCulturalRelevanceScore = (answers: Answers) => {
    var score = 0
    const length = Object.keys(answers).length;
    for(const key in answers) {
       score += Number(answers[key as keyof Answers])
    }

    return score / length;
}