export const hideDataFromView = (type, data) => {
  if (localStorage.getItem(type) && data) {
    const d = JSON.parse(localStorage.getItem(type));
    d.push(...data);
    localStorage.setItem(type, JSON.stringify(d));
  }
};

export const filterHiddenData = (type, data) => {
  if (localStorage.getItem(type) && data) {
    const d = JSON.parse(localStorage.getItem(type));
    const dt = d.map((dv) => JSON.stringify(dv));
    data = data.filter((dd) => !dt.includes(JSON.stringify(dd)));
  }
  if (data) {
    localStorage.setItem(type, JSON.stringify(data));
  }
  return data;
};
