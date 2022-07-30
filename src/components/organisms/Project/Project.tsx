import * as React from "react";
import type { ProjectProps } from "@/types/project";
import Image from "next/image";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import TagCmp from "@/components/atoms/Tag/Tag";
import List from "@/components/atoms/List/List";
import ListItem from "@/components/atoms/ListItem/ListItem";
import clsx from "clsx";
import { useSpring, useTrail, animated, config } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import classes from "./Project.module.scss";

const AnimatedImage = animated(Image);
const AnimatedListItem = animated(ListItem);

export default function Project(props: ProjectProps) {
  const { name, title, description, tags, services, image, reverseOrder } =
    props;
  const initialXPosition = reverseOrder ? "-20%" : "20%";

  const textRef = React.useRef<HTMLDivElement | null>(null);
  const textEntry = useIntersectionObserver(textRef, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const isTextVisible = !!textEntry?.isIntersecting;

  const serviceRef = React.useRef<HTMLDivElement | null>(null);
  const serviceEntry = useIntersectionObserver(serviceRef, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const isServiceVisible = !!serviceEntry?.isIntersecting;

  const imageRef = React.useRef<HTMLDivElement | null>(null);
  const imageEntry = useIntersectionObserver(imageRef, {
    threshold: 1,
    freezeOnceVisible: true,
  });
  const isImageVisible = !!imageEntry?.isIntersecting;

  const { opacity: pOpacity, transform } = useSpring({
    from: {
      transform: `translateX(${initialXPosition})`,
      opacity: 0,
    },
    to: {
      transform: isTextVisible
        ? "translateX(0%)"
        : `translateX(${initialXPosition})`,
      opacity: isTextVisible ? 1 : 0,
    },
    config: config.stiff,
  });

  const { scale, opacity } = useSpring({
    from: {
      scale: 0,
      opacity: 0,
    },
    to: {
      scale: isImageVisible ? 1 : 0,
      opacity: isImageVisible ? 1 : 0,
    },
    config: config.stiff,
  });

  const trail = useTrail(services.length, {
    from: {
      transform: "translateY(100px)",
      opacity: 0,
    },
    to: {
      transform: isServiceVisible ? "translateY(0px)" : "translateY(100px)",
      opacity: isServiceVisible ? 1 : 0,
    },
  });

  return (
    <Wrapper>
      <div
        className={clsx(
          classes.container,
          reverseOrder ? classes.reversedOrder : null
        )}
      >
        <div className={classes.picture} ref={imageRef}>
          <AnimatedImage
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            // layout="fill"
            style={{ scale, opacity }}
          />
        </div>
        <div className={classes.project}>
          <span className={clsx(classes.project__title, classes[name])}>
            {title}
          </span>
          {tags.map((tag) => (
            <TagCmp key={tag.text} color={tag.color}>
              <Image
                src={tag.image.src}
                alt={tag.image.alt}
                width={20}
                height={20}
              />
              <p>{tag.text}</p>
            </TagCmp>
          ))}
          <animated.p
            ref={textRef}
            className={classes.project__description}
            style={{ transform, opacity: pOpacity }}
          >
            {/* Goodzone here should be link or attr */}
            {description}
          </animated.p>
          <div className={classes.project__services} ref={serviceRef}>
            <h3>What I did?</h3>
            <List>
              {services.map((service, i) => (
                <AnimatedListItem
                  key={service.type}
                  className={classes.listItem}
                  style={trail[i]}
                >
                  <Image
                    src={service.image.src}
                    width={45}
                    height={45}
                    alt={service.image.alt}
                  />
                  {service.type === "admin" ? "Admin Panel" : "Website"}
                </AnimatedListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
