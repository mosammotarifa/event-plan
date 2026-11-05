export const achievenmentsDatas = async () => {
  const res = await fetch("http://localhost:5000/achievements");
  if (!res.ok) {
    throw new Error("faild to fetched the achievenments data");
  }
  const data = await res.json();
  return data;
};
export const eventsDatas = async () => {
  const res = await fetch("http://localhost:5000/events");
  if (!res.ok) {
    throw new Error("failed to fetched data form the enents.");
  }
  const data = await res.json();
  return data;
};
export const servicesDatas = async () => {
  const res = await fetch("http://localhost:5000/services");
  if (!res.ok) {
    throw new Error("failed to fetche the services dataa");
  }
  const data = await res.json();
  return data;
};
export const reasonsDatas = async () => {
  const res = await fetch("http://localhost:5000/reasons");
  if (!res.ok) {
    throw new Error("failed to fetche the services dataa");
  }

  const data = await res.json();
  return data;
};
 export const testimonialsDatas = async () => {
  const res = await fetch("http://localhost:5000/testimonials");
  if (!res.ok) {
    throw new Error("failed to fetche the services dataa");
  }

  const data = await res.json();
  return data;
};
 export const howweworkDatas = async () => {
  const res = await fetch("http://localhost:5000/howwework");
  if (!res.ok) {
    throw new Error("failed to fetche the services dataa");
  }

  const data = await res.json();
  return data;
};
