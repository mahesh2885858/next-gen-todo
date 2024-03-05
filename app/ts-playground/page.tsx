"use client";

import Editor from "@monaco-editor/react";
import { useState } from "react";
export default function TsPlayGround() {
  const [code, setCode] = useState("console.log('mahesh')");
  const [Output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const runCode = async () => {
    if (isLoading) return;
    try {
      setIsLoading(true);
      const data = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: "typescript",
          version: "5.0.3",
          files: [
            {
              content: code,
            },
          ],
        }),
      });
      const res = await data.json();
      if (!data.ok) throw new Error(res);
      if (res.run.stderr.trim().length > 0) {
        setOutput(res.compile.stdout);
        return;
      }
      setOutput(res.run.stdout);
    } catch (err) {
      console.log({ err });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="flex w-full md:w-1/2  flex-col gap-2 ">
        <div className="flex w-full justify-around">
          <span className="p-2  ">Typescript Playground</span>
          <button
            onClick={runCode}
            className="border border-white text-white p-2 rounded"
          >
            {isLoading ? "Compiling.." : "Run"}
          </button>
        </div>
        <div className="overflow-hidden w-full rounded-md">
          <Editor
            defaultLanguage="typescript"
            height={"80vh"}
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
        </div>
      </div>
      <div className=" w-full md:w-1/2 p-2 flex flex-col">
        <div>Output:</div>
        <div className="p-4">{Output}</div>
      </div>
    </div>
  );
}
