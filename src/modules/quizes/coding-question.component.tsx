import PyCodeEditor from "../../shared/elements/py-code-editor";
import Question from "./question.component";

export default function CodingQuestion({
  children,
  defaultValue = "",
}: {
  children?: React.ReactNode;
  defaultValue?: string;
}) {
  return (
    <Question>
      {children && <div className="font-semibold mb-2">{children}</div>}
      <PyCodeEditor defaultValue={defaultValue} />
    </Question>
  );
}
