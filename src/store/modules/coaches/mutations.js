export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  // local이랑 firebase data구별
  setCoaches(state, payload) {
    state.coaches = payload;
  },
};
