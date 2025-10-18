"use client";
import { useEffect, useState } from "react";

export default function useTypewriter(words = [], {
  typingSpeed = 90,
  deletingSpeed = 45,
  delayBetweenWords = 1000,
} = {}) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words.length) return;

    const current = words[index % words.length];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText((t) => t.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }, deletingSpeed);
    } else {
      if (text === current) {
        timeout = setTimeout(() => setIsDeleting(true), delayBetweenWords);
      } else {
        timeout = setTimeout(() => {
          setText(current.slice(0, text.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, words, typingSpeed, deletingSpeed, delayBetweenWords]);

  return { text, index: index % words.length, isDeleting };
}
