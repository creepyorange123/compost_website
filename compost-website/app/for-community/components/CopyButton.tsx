"use client";

import { useState } from "react";
import styles from '../styles/Community.module.css';

export default function CopyButton ({ text } : { text: string }){

  const [copied, setCopied] = useState(false);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      return true;
    } catch (err) {
      console.error('Failed to copy:', err);
      return false;
    }
  };

  return (
    <button className= {styles.copyButton} onClick = {async () => {
      await copy(text)
    }}>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
};