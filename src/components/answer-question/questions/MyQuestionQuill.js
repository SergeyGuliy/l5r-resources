"use client";

import React, { forwardRef, useEffect, useLayoutEffect, useRef } from "react";

const Editor = forwardRef(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef(null);
    const defaultValueRef = useRef(defaultValue);
    const onTextChangeRef = useRef(onTextChange);
    const onSelectionChangeRef = useRef(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      ref.current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      const editorContainer = container.appendChild(
        container.ownerDocument.createElement("div")
      );

      // ql-container

      let quill;
      import("quill").then((module) => {
        const Quill = module.default;

        quill = new Quill(editorContainer, {
          theme: "snow",
          modules: { toolbar: true },
        });

        ref.current = quill;

        if (defaultValueRef.current) quill.setContents(defaultValueRef.current);

        quill.on("text-change", () =>
          onTextChangeRef.current?.(JSON.stringify(quill.getContents().ops))
        );

        quill.on("selection-change", (...args) => {
          console.log("selection-change");
          console.log(args);
          onSelectionChangeRef.current?.(...args);
        });
      });

      return () => {
        ref.current = null;
        container.innerHTML = "";
      };
    }, [ref]);

    return <div ref={containerRef}></div>;
  }
);

Editor.displayName = "Editor";

export function MyQuestionQuill({ value, onCustomUpdateValue }) {
  const quillRef = useRef();

  if (!Editor) return <div>Loading editor...</div>;

  return (
    <div>
      <Editor
        ref={quillRef}
        readOnly={false}
        defaultValue={value}
        onTextChange={onCustomUpdateValue}
      />
    </div>
  );
}
