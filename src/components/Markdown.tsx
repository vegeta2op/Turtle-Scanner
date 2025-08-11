"use client";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="text-sm">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          table: (props) => (
            <div className="overflow-x-auto">
              <table
                className="w-full border-collapse text-left rounded-md overflow-hidden"
                {...props}
              />
            </div>
          ),
          thead: (props) => <thead className="bg-foreground/10" {...props} />,
          th: (props) => (
            <th className="border-b border-foreground/20 px-3 py-2 font-medium" {...props} />
          ),
          td: (props) => (
            <td className="border-b border-foreground/10 px-3 py-2 align-top" {...props} />
          ),
          p: (props) => <p className="mb-2 leading-6" {...props} />,
          ul: (props) => <ul className="list-disc pl-5 space-y-1" {...props} />,
          ol: (props) => <ol className="list-decimal pl-5 space-y-1" {...props} />,
          code: (props) => {
            const { className, children } = props as any;
            const isInline = !String(className || "").includes("language-") && !/\n/.test(String(children));
            if (isInline) {
              return (
                <code className="px-1.5 py-0.5 rounded bg-foreground/10" {...(props as any)}>
                  {children}
                </code>
              );
            }
            return (
              <pre className="p-3 rounded-md bg-foreground/10 overflow-x-auto">
                <code className={className as string}>{children}</code>
              </pre>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 