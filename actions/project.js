import axios from "axios";
import useSWR from "swr";

import { useApiHandler, fetcher } from "@/actions/index";

export const useGetProjectById = (id) => useSWR(id ? `/api/projects/${id}` : null, fetcher);

export const useCreateProject = () => useApiHandler((data) => axios.post("/api/projects", data));

export const useUpdateProject = () =>
  useApiHandler((id, data) => axios.patch(`/api/projects/${id}`, data));

export const useDeleteProject = () => useApiHandler((id) => axios.delete(`/api/projects/${id}`));
