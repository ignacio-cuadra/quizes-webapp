import CodeMirror from "@uiw/react-codemirror";
import { useCallback, useState } from "react";
import { python } from "@codemirror/lang-python";

export default function PyCodeEditor({
  defaultValue,
  readOnly = false,
}: {
  defaultValue?: string;
  readOnly?: boolean;
}) {
  const [value, setValue] = useState(defaultValue);
  const onChange = useCallback((value: string) => {
    setValue(value);
  }, []);
  return (
    <CodeMirror
      value={value}
      height="200px"
      extensions={[python()]}
      onChange={onChange}
      readOnly={readOnly}
    />
  );
}
