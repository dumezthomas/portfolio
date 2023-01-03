import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url).then(async (res) => {
    try {
      const result = await res.json();
      if (res.status !== 200) throw result;
      return result;
    } catch (error) {
      return Promise.reject(error);
    }
  });

export const useGetPosts = () => useSWR("/api/posts", fetcher);

export const useGetPostById = (id) => useSWR(id ? `/api/posts/${id}` : null, fetcher);
