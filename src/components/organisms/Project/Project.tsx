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
let isTriggered: boolean = false;

export default function Project(props: ProjectProps) {
  const { title, description, tags, services, image, reverseOrder } = props;
  const initialXPosition = reverseOrder ? "-20%" : "20%";

  const ref = React.useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, { threshold: 1 });
  const isVisible = !isTriggered ? !!entry?.isIntersecting : true;

  const { opacity: pOpacity, transform } = useSpring({
    from: {
      transform: `translateX(${initialXPosition})`,
      opacity: 0,
    },
    to: {
      transform: isVisible
        ? "translateX(0%)"
        : `translateX(${initialXPosition})`,
      opacity: isVisible ? 1 : 0,
    },
    config: config.stiff,
  });

  const { scale, opacity } = useSpring({
    from: {
      scale: 0,
      opacity: 0,
    },
    to: {
      scale: isVisible ? 1 : 0,
      opacity: isVisible ? 1 : 0,
    },
    config: config.stiff,
  });

  const trail = useTrail(services.length, {
    from: {
      transform: "translateY(100px)",
      opacity: 0,
    },
    to: {
      transform: isVisible ? "translateY(0px)" : "translateY(100px)",
      opacity: isVisible ? 1 : 0,
    },
  });

  React.useEffect(() => {
    if (isVisible) {
      // ref.current?.scrollIntoView({ behavior: "smooth" });
      isTriggered = true;
    }
  }, [isVisible]);

  return (
    <Wrapper>
      <div className={classes.container} ref={ref}>
        <div
          className={clsx(
            classes.picture,
            reverseOrder ? classes.reversedOrder : null
          )}
        >
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
          <animated.p
            className={classes.project__description}
            style={{ transform, opacity: pOpacity }}
          >
            {/* Goodzone here should be link or attr */}
            {description}
          </animated.p>
          <div className={classes.project__services}>
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
