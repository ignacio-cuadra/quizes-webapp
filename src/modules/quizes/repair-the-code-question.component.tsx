import PyCodeEditor from "../../shared/elements/py-code-editor";
import Question from "./question.component";

export default function RepairTheCodeQuestion({
  children,
  defaultValue = "",
}: {
  children?: React.ReactNode;
  defaultValue?: string;
}) {
  return (
    <Question>
      {children && <div className="font-semibold">{children}</div>}
      <div className="grid grid-cols-2 gap-5">
        <div>
          <span className="block mb-2 font-semibold">Original</span>
          <PyCodeEditor defaultValue={defaultValue} readOnly={true} />
        </div>
        <div>
          <span className="block mb-2 font-semibold">Editable</span>
          <PyCodeEditor defaultValue={defaultValue} />
        </div>
      </div>
    </Question>
  );
}
