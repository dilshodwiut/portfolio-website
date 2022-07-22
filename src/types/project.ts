type Image = { src: string; alt: string };
type ServiceType = "website" | "admin";
type Service = { type: ServiceType; image: Image };
type Tag = { text: string; color: string; image: Image };

export type Project = {
  name: string;
  image: Image;
  title: Image | string;
  description: string;
  services: Service[];
  tags: Tag[];
};
