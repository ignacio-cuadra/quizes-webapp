import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function PyCode({ children }: { children: string }) {
  return (
    <SyntaxHighlighter language="python" style={docco}>
      {children}
    </SyntaxHighlighter>
  );
}
