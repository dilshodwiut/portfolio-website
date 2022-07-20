import * as React from "react";
import dynamic from "next/dynamic";
import VSCode from "@/components/atoms/SVGs/Dev/VSCode";
import WebAssembly from "@/components/atoms/SVGs/Dev/WebAssembly";
import Npm from "@/components/atoms/SVGs/Dev/Npm";
import JavaScript from "@/components/atoms/SVGs/Dev/JavaScript";
import Chrome from "@/components/atoms/SVGs/Dev/Chrome";
import Css from "@/components/atoms/SVGs/Dev/Css";
import Html from "@/components/atoms/SVGs/Dev/Html";
import Sass from "@/components/atoms/SVGs/Dev/Sass";
import ReactIcon from "@/components/atoms/SVGs/Dev/React";
import Git from "@/components/atoms/SVGs/Dev/Git";
import GitLab from "@/components/atoms/SVGs/Dev/GitLab";
import GitHub from "@/components/atoms/SVGs/Dev/GitHub";
import I18next from "@/components/atoms/SVGs/Dev/I18next";
import Linux from "@/components/atoms/SVGs/Dev/Linux";
import Markdown from "@/components/atoms/SVGs/Dev/Markdown";
import Svg from "@/components/atoms/SVGs/Dev/Svg";
import Stackoverflow from "@/components/atoms/SVGs/Dev/Stackoverflow";
import Yarn from "@/components/atoms/SVGs/Dev/Yarn";
import Typescript from "@/components/atoms/SVGs/Dev/TypeScript";
import CodePen from "@/components/atoms/SVGs/Dev/CodePen";

export default function FloatingIcons() {
  const Float = dynamic(() => import("src/containers/Float/Float"), {
    ssr: false,
  });

  return (
    <Float>
      <VSCode />
      <WebAssembly />
      <Npm />
      <JavaScript />
      <Typescript />
      <Chrome />
      <Css />
      <Html />
      <Sass />
      <ReactIcon />
      <Git />
      <GitLab />
      <GitHub />
      <I18next />
      <Linux />
      <Markdown />
      <Svg />
      <Stackoverflow />
      <Yarn />
      <CodePen />
    </Float>
  );
}
