import * as React from "react";
import Slider from "@/components/organisms/Slider/Slider";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import Title from "@/components/atoms/Title/Title";

export default function Clients() {
  return (
    <Wrapper>
      <div id="clients">
        <Title side="bottom">Clients</Title>
        <Slider />
      </div>
    </Wrapper>
  );
}
