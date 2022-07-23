import type { Image } from "@/types/image";

type Company = {
  name: string;
  url: string;
};

export type Stats = {
  id: string;
  name: string;
  icon: Image;
  totalNumber: number;
  companies: Company[];
};
