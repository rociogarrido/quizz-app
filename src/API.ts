
export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard",
}

export const fetchQuizzQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    console.log(data);
    
    return data.results.map((question: any) => ({
        question: question.question,
        answer: question.correct_answer,
        option: question.incorrect_answers.concat(question.correct_answer),
    }));
};