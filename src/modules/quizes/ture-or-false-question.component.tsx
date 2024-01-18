import { v4 as uuid } from "uuid";
import Question from "./question.component";

export default function TrueOrFalseQuestion({
  children,
  name = "true-or-false-question-" + uuid(),
}: {
  children: React.ReactNode;
  name?: string;
}) {
  return (
    <Question>
      <p className="mb-2 font-semibold">{children}</p>
      <div className="flex gap-2">
        <label className="flex gap-1">
          <input type="radio" name={name} />
          <span>Verdadero</span>
        </label>
        <label className="flex gap-1">
          <input type="radio" name={name} />
          <span>Falso</span>
        </label>
      </div>
    </Question>
  );
}
