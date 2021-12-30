import { Input } from "@shelter/ui/atoms/input";

export default function Docs() {
  return (
    <div className="prose m-8">
      <h1>Docs</h1>

      <h2>Inputs</h2>

      <h3>Errored Input</h3>
      <Input
        className="w-max-sm"
        label="Label"
        type="text"
        placeholder="Placeholder"
        errorMessage="This is a validation error message"
      />
    </div>
  );
}
