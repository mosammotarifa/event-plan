import { jsxs } from "react/jsx-runtime";

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
export const servicesDatasId = async (servicesId) => {
  const res = await fetch(`http://localhost:5000/services/${servicesId}`);
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
export const addTestimonial = async (testimonialData) => {
  const res = await fetch("http://localhost:5000/testimonials", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(testimonialData),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to submit feedback");
  }

  return result;
};
export const howweworkDatas = async () => {
  const res = await fetch("http://localhost:5000/howwework");
  if (!res.ok) {
    throw new Error("failed to fetche the services dataa");
  }

  const data = await res.json();
  return data;
};
export const faqDatas = async () => {
  const res = await fetch("http://localhost:5000/faq");
  if (!res.ok) {
    throw new Error("failed to fetche the services dataa");
  }

  const data = await res.json();
  return data;
};
// POST: Submit a new event request
export const createEventRequest = async (formData) => {
  const res = await fetch("http://localhost:5000/event-requests", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to submit event request");
  }

  return result;
};

// GET: Fetch all event requests
export const getEventRequests = async () => {
  const res = await fetch("http://localhost:5000/event-requests");

  if (!res.ok) {
    throw new Error("Failed to fetch event requests");
  }

  const result = await res.json();

  return result;
};
export const updateEventRequest = async (id, updatedData) => {
  const res = await fetch(`http://localhost:5000/event-requests/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to update event request");
  }

  return result;
};

export const deleteEventRequest = async (id) => {
  const res = await fetch(`http://localhost:5000/event-requests/${id}`, {
    method: "DELETE",
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to delete event request");
  }

  return result;
};
// const fetchMeetings = async () => {
//   try {
//     setLoading(true);

//     const response = await fetch("http://localhost:5000/meetings");

//     if (!response.ok) {
//       throw new Error("Failed to fetch meetings");
//     }

//     const data = await response.json();

//     setMeetings(data);
//   } catch (error) {
//     setError(error.message);
//   } finally {
//     setLoading(false);
//   }
// };
