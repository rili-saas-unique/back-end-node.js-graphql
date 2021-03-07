const utility = require("@ciro-maciel/utility/dist/utility.cjs");

module.exports = {
  create: (email) => {
    return {
      id: utility.math.guid(16, 16),
      type: "account",
      email,
      security: {
        twoFactor: false,
      },
      history: [],
      deletedIn: null,
      createdIn: new Date().getTime(),
    };
  },
};
