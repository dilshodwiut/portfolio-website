import * as React from "react";

type Image = { src: string; alt: string };
type ServiceType = "website" | "admin";
type Service = { type: ServiceType; image: Image };
type Tag = { text: string; color: string; image: Image };

export type Project = {
  id: string;
  name: string;
  image: Image;
  title: Image | string;
  description: string;
  services: Service[];
  tags: Tag[];
};

export type ProjectProps = {
  reverseOrder?: boolean;
  image: Image;
  title: React.ReactNode | string;
  description: string;
  services: Service[];
  tags: Tag[];
};
