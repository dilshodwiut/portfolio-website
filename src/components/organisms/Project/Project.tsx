import * as React from "react";
import type { ProjectProps } from "@/types/project";
import Image from "next/image";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import TagCmp from "@/components/atoms/Tag/Tag";
import List from "@/components/atoms/List/List";
import ListItem from "@/components/atoms/ListItem/ListItem";
import clsx from "clsx";
import classes from "./Project.module.scss";

export default function Project(props: ProjectProps) {
  const { title, description, tags, services, image, reverseOrder } = props;

  return (
    <Wrapper>
      <div className={classes.container}>
        <div
          className={clsx(
            classes.picture,
            reverseOrder ? classes.reversedOrder : null
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            // layout="fill"
          />
        </div>
        <div className={classes.project}>
          <span className={classes.project__title}>{title}</span>
          {tags.map((tag) => (
            <TagCmp key={tag.text} color={tag.color}>
              <Image
                src={tag.image.src}
                alt={tag.image.alt}
                width={20}
                height={20}
              />
              {tag.text}
            </TagCmp>
          ))}
          <p className={classes.project__description}>
            {/* Goodzone here should be link or attr */}
            {description}
          </p>
          <div className={classes.project__services}>
            <h3>What I did?</h3>
            <List>
              {services.map((service, i) => (
                <ListItem key={service.type} className={classes.listItem}>
                  <Image
                    src={service.image.src}
                    width={45}
                    height={45}
                    alt={service.image.alt}
                  />
                  {service.type === "admin" ? "Admin Panel" : "Website"}
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
