import Question from "./question.component";

export default function OpenendedQuestion({
  children,
}: {
  children: React.ReactNode;
  name?: string;
}) {
  return (
    <Question>
      <div className="mb-3 font-semibold">{children}</div>
      <div className="grid gap-3">
        <span className="block font-semibold">Respuesta</span>
        <textarea className="w-full min-h-7" />
      </div>
    </Question>
  );
}
