import axios from "axios";
import useSWR from "swr";

import { useApiHandler, fetcher } from "actions/index";

export const useGetSkills = () => useSWR("/api/skills", fetcher);

export const useGetSkillById = (id) => useSWR(id ? `/api/skills/${id}` : null, fetcher);

export const useCreateSkill = () => useApiHandler((data) => axios.post("/api/skills", data));

export const useUpdateSkill = () =>
  useApiHandler((id, data) => axios.patch(`/api/skills/${id}`, data));

export const useDeleteSkill = () => useApiHandler((id) => axios.delete(`/api/skills/${id}`));
