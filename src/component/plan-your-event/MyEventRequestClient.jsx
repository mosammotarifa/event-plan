"use client";

import { useState } from "react";
import {
  Pencil,
  Trash2,
  X,
  Save,
  CalendarDays,
  Users,
  MapPin,
  Wallet,
  Sparkles,
  ClipboardList,
} from "lucide-react";

import { updateEventRequest, deleteEventRequest } from "@/lib/data";

const MyEventRequestsClient = ({ initialRequests }) => {
  //   const [requests, setRequests] = useState(
  //     (initialRequests || []).filter((request) => request && request._id),
  //   );
  console.log("Client Initial Requests:", initialRequests);

  const [requests, setRequests] = useState(() => {
    console.log("Requests before filter:", initialRequests);

    return Array.isArray(initialRequests)
      ? initialRequests.filter((request) => request !== null && request?._id)
      : [];
  });

  const [editingRequest, setEditingRequest] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    services: [],
    eventDate: "",
    guestCount: "",
    budget: "",
    location: "",
    message: "",
  });

  // EDIT REQUEST
  const handleEdit = (request) => {
    setEditingRequest(request);

    setFormData({
      fullName: request.fullName || "",
      email: request.email || "",
      phone: request.phone || "",
      eventType: request.eventType || "",
      services: request.services || [],
      eventDate: request.eventDate?.slice(0, 10) || "",
      guestCount: request.guestCount || "",
      budget: request.budget || "",
      location: request.location || "",
      message: request.message || "",
    });
  };

  // HANDLE INPUT
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // UPDATE REQUEST
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!editingRequest?._id) {
      console.error("No request selected for editing");
      return;
    }

    const result = await updateEventRequest(editingRequest._id, formData);

    setRequests(
      requests.map((request) =>
        request?._id === editingRequest._id
          ? { ...request, ...formData }
          : request,
      ),
    );

    setEditingRequest(null);
  };

  // DELETE REQUEST
  const handleDelete = async () => {
    await deleteEventRequest(deletingId);

    setRequests(requests.filter((request) => request._id !== deletingId));

    setDeletingId(null);
  };

  return (
    <section className="bg-[#FAF8F6] px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-semibold tracking-[0.2em] text-[#722F52]">
            <Sparkles size={17} />
            YOUR EVENT JOURNEY
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#29252B] md:text-4xl">
            My Event Requests
          </h2>
        </div>

        {/* EMPTY STATE */}
        {requests.length === 0 && (
          <div className="rounded-3xl border border-[#E9DDE3] bg-white px-6 py-16 text-center">
            <ClipboardList size={45} className="mx-auto text-[#722F52]" />
            <h3 className="mt-5 text-xl font-semibold text-[#29252B]">
              No Event Requests Yet
            </h3>
          </div>
        )}

        {/* REQUEST CARDS */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {requests.map((request) => (
            <div
              key={request._id}
              className="overflow-hidden rounded-2xl border border-[#E9DDE3] bg-white shadow-sm"
            >
              <div className="bg-[#722F52] p-5 text-white">
                <p className="text-xs tracking-widest text-white/70">
                  EVENT REQUEST
                </p>

                <h3 className="mt-2 text-xl font-semibold">
                  {request.eventType}
                </h3>

                <span className="mt-2 inline-block rounded-full bg-white/15 px-3 py-1 text-xs capitalize">
                  {request.status || "Pending"}
                </span>
              </div>

              <div className="space-y-4 p-5">
                <p className="flex items-center gap-3 text-sm text-gray-600">
                  <CalendarDays size={17} className="text-[#722F52]" />
                  {request.eventDate || "Date not decided"}
                </p>

                <p className="flex items-center gap-3 text-sm text-gray-600">
                  <Users size={17} className="text-[#722F52]" />
                  {request.guestCount || "Not decided"} Guests
                </p>

                <p className="flex items-center gap-3 text-sm text-gray-600">
                  <MapPin size={17} className="text-[#722F52]" />
                  {request.location || "Location not decided"}
                </p>

                <p className="flex items-center gap-3 text-sm text-gray-600">
                  <Wallet size={17} className="text-[#722F52]" />
                  {request.budget || "Budget not decided"}
                </p>

                <div className="border-t border-[#E9DDE3] pt-4">
                  <p className="mb-3 text-sm font-semibold text-[#29252B]">
                    Selected Services
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {request.services?.map((service) => (
                      <span
                        key={service}
                        className="rounded-full bg-[#FAF8F6] px-3 py-1.5 text-xs text-[#722F52]"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-[#E9DDE3] pt-4">
                  <p className="text-sm font-semibold text-[#29252B]">
                    {request.fullName}
                  </p>
                  <p className="text-xs text-gray-500">{request.email}</p>
                  <p className="text-xs text-gray-500">{request.phone}</p>
                </div>

                {request.message && (
                  <div className="border-t border-[#E9DDE3] pt-4">
                    <p className="mb-2 text-sm font-semibold">Your Message</p>
                    <p className="text-sm leading-6 text-gray-500">
                      {request.message}
                    </p>
                  </div>
                )}

                {/* EDIT & DELETE */}
                <div className="flex gap-3 border-t border-[#E9DDE3] pt-4">
                  <button
                    onClick={() => handleEdit(request)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-[#722F52] py-2.5 text-sm font-semibold text-[#722F52] hover:bg-[#722F52] hover:text-white"
                  >
                    <Pencil size={15} />
                    Edit
                  </button>

                  <button
                    onClick={() => setDeletingId(request._id)}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-500 hover:text-white"
                  >
                    <Trash2 size={15} />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EDIT FORM MODAL */}
      {editingRequest && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-semibold text-[#29252B]">
                Edit Event Request
              </h3>

              <button onClick={() => setEditingRequest(null)}>
                <X />
              </button>
            </div>

            <form onSubmit={handleUpdate} className="space-y-4">
              {[
                { label: "Full Name", name: "fullName" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone" },
                { label: "Event Date", name: "eventDate", type: "date" },
                { label: "Guest Count", name: "guestCount", type: "number" },
                { label: "Budget", name: "budget" },
                { label: "Location", name: "location" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="mb-2 block text-sm font-medium text-[#29252B]">
                    {field.label}
                  </label>

                  <input
                    required={["fullName", "email", "phone"].includes(
                      field.name,
                    )}
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#E9DDE3] px-4 py-3 outline-none focus:border-[#722F52]"
                  />
                </div>
              ))}

              {/* EVENT TYPE */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Event Type
                </label>

                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E9DDE3] px-4 py-3 outline-none"
                >
                  {[
                    "Wedding",
                    "Engagement",
                    "Birthday",
                    "Anniversary",
                    "Corporate Event",
                    "Private Party",
                    "Other",
                  ].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* SERVICES */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Selected Services
                </label>

                <input
                  name="services"
                  value={formData.services.join(", ")}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      services: e.target.value
                        .split(",")
                        .map((service) => service.trim())
                        .filter(Boolean),
                    })
                  }
                  className="w-full rounded-xl border border-[#E9DDE3] px-4 py-3 outline-none"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Your Message
                </label>

                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[#E9DDE3] px-4 py-3 outline-none focus:border-[#722F52]"
                />
              </div>

              <div className="flex gap-3 pt-3">
                <button
                  type="button"
                  onClick={() => setEditingRequest(null)}
                  className="flex-1 rounded-xl border border-[#E9DDE3] py-3"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#722F52] py-3 font-semibold text-white"
                >
                  <Save size={17} />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* DELETE CONFIRMATION */}
      {deletingId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-md rounded-3xl bg-white p-7 text-center">
            <Trash2 size={35} className="mx-auto text-red-500" />

            <h3 className="mt-5 text-xl font-semibold text-[#29252B]">
              Delete Event Request?
            </h3>

            <p className="mt-3 text-sm text-gray-500">
              Are you sure you want to delete this request? This action cannot
              be undone.
            </p>

            <div className="mt-7 flex gap-3">
              <button
                onClick={() => setDeletingId(null)}
                className="flex-1 rounded-xl border border-[#E9DDE3] py-3"
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                className="flex-1 rounded-xl bg-red-500 py-3 font-semibold text-white"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyEventRequestsClient;
