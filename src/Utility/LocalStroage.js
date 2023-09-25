const getDonate = () => {
  const storedDonate = localStorage.getItem("donate-id");
  if (storedDonate) {
    return JSON.parse(storedDonate);
  }
  return [];
};
const saveDonate = (id) => {
  const storedDonateId = getDonate();
  const exist = storedDonateId.find((donateId) => donateId === id);
  if (!exist) {
    storedDonateId.push(id);
  }
  localStorage.setItem("donate-id", JSON.stringify(storedDonateId));
};

export { getDonate, saveDonate };
