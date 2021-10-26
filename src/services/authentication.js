const authName = (name) => (
  name.length > 5 ? true : false
);

const authInitial = (initials) => {
  const isUpperCase = (str) => str === str.toUpperCase();

  if (isUpperCase(initials) && initials.length <= 3) return true;
  return false;
};

const authCountry = (country) => (
  country.length > 3 ? true : false
);


module.exports = { authName, authInitial, authCountry };
