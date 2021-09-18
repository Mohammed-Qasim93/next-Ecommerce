import axios from "axios";
const baseUrl = process.env.BASE_URl;

export const getData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  const data = await res.json();
  return data;
};

export const postData = async (url, inputData, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
    body: JSON.stringify(inputData),
  });

  const data = await res.json();

  return data;
};

export const patchData = async (url, inputData, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
    body: JSON.stringify(inputData),
  });

  const data = await res.json();

  return data;
};

export const deleteData = async (url, token) => {
  const res = await fetch(`${baseUrl}/api/${url}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      // "Content-Type": "application/x-www-form-urlencoded",
      Authorization: token,
    },
  });

  const data = await res.json();

  return data;
};
