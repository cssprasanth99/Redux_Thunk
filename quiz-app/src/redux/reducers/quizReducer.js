const initialState = {
  questions: [],
  score: 0,
  clicked: [0, 1, 2, 3, 4],
};

export const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUIZ_SUCCESS":
      return { ...state, questions: action.payload };
    case "FETCH_QUIZ_FAIL":
      return { ...state, error: action.payload };
    case "SUBMIT_ANSWER": {
      const { q, ans } = action.payload;
      const correctIndex = state.questions.data[q].correctOptionIndex;
      const selectedIndex = action.payload.answer;
      const isCorrect = correctIndex == selectedIndex;
      return { ...state, score: isCorrect ? state.score + 1 : state.score };
    }
    default:
      return state;
  }
};
