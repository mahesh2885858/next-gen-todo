"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";
export default function TsPlayGround() {
  const [code, setCode] = useState("console.log('mahesh')");
  return (
    <div className="flex w-full">
      <Editor
        defaultLanguage="typescript"
        height={"90vh"}
        className="w-1/2"
        language="typescript"
        theme="vs-dark"
        options={{
          bracketPairColorization: {
            enabled: true,
          },
          cursorSmoothCaretAnimation: "on",
          padding: {
            top: 10,
          },
        }}
        onChange={(value, event) => {
          if (!value) return;
          setCode(value as string);
        }}
      />
      <div className="w-1/2 p-2">mahesh</div>
    </div>
  );
}
