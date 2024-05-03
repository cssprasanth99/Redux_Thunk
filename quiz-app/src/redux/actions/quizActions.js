export const fetchQuiz = () => {
  return async (disptach) => {
    try {
      const res =
        await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz
        `);
      const data = await res.json();
      disptach({ type: "FETCH_QUIZ_SUCCESS", payload: data });
    } catch (error) {
      disptach({ type: "FETCH_QUIZ_FAIL", payload: error.message });
    }
  };
};

export const submitAnswer = (q, ans) => {
  return { type: "SUBMIT_ANSWER", payload: { q, ans } };
};
