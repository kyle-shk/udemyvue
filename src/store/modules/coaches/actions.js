export default {
  registerCoach(context, data) {
    const coachData = {
      id: context.rootGetters.userId, // index.js의 id
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    context.commit('registerCoach', coachData);
  },
};
