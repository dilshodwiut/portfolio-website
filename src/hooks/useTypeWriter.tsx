import * as React from "react";

type Mode = "typing" | "deleting" | "finished";

type Props = {
  words: string[];
  wait: number;
};

let currentWord = 0;
let currentLetter = 0;

export default function useTypeWriter({ words, wait }: Props) {
  const [mode, setMode] = React.useState<Mode>("typing");
  const [output, setOutput] = React.useState<string>("");

  React.useEffect(() => {
    let time;

    if (mode === "deleting") {
      time = wait / 10;
    } else if (mode === "typing") {
      time = wait / 5;
    } else {
      time = wait;
    }

    const timeout = getTimeout(() => {
      if (words[currentWord + 1]) {
        increment("word");
      } else {
        nullify("word");
      }
      setMode("typing");
      nullify("letter");
    }, wait);

    const call = (currWord: number, currLetter: number) => () => {
      if (mode === "typing") {
        if (currLetter === words[currWord].length) {
          nullify("letter");
          setMode("finished");
        } else {
          setOutput((prev) => `${prev}${words[currWord][currLetter]}`);
          increment("letter");
        }
      } else if (mode === "finished") {
        setTimeout(() => {
          setMode("deleting");
        }, wait);
      } else if (mode === "deleting") {
        if (output) {
          setOutput((prev) => prev.slice(0, -1));
        } else {
          timeout.start();
        }
      }
    };

    const interval = setInterval(call(currentWord, currentLetter), time);

    return () => {
      clearInterval(interval);
      timeout.stop();
    };
  }, [words, mode, wait, output]);

  return output;
}

function increment(part: "word" | "letter") {
  if (part === "word") {
    currentWord += 1;
  } else if (part === "letter") {
    currentLetter += 1;
  }
}

function nullify(part: "word" | "letter") {
  if (part === "word") {
    currentWord = 0;
  } else if (part === "letter") {
    currentLetter = 0;
  }
}

function getTimeout(cb: Function, time: number) {
  let timer: number;

  return {
    start: () => {
      if (!timer) {
        timer = setTimeout(cb, time);
      }
    },
    stop: () => {
      clearTimeout(timer);
    },
  };
}
