export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;
    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas,
    };

    const response = await fetch(
      `https://test-ex-674aa-default-rtdb.firebaseio.com/coaches/${userId}.json`, // firebase에서는 .json붙어야함
      {
        method: 'PUT', // 1코치당 1개의 user가 되야하기때문에 put
        body: JSON.stringify(coachData),
      }
    );

    // const responseData = await response.json() -> vuex에서 처리하는부분이라 딱히 뭘 안해도될듯

    if (!response.ok) {
      // error...
    }

    context.commit('registerCoach', {
      ...coachData,
      id: userId,
    });
  },
};
