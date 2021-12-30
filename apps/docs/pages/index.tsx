import { Input } from "@shelter/ui/atoms/input";

export default function Docs() {
  return (
    <div className="m-8 prose">
      <h1>Docs</h1>

      <h2>Inputs</h2>

      <h3>Normal Input</h3>
      <Input
        className="max-w-screen-sm"
        label="Normal Input"
        placeholder="Placeholder"
        type="text"
        value="normal input value"
      />

      <h3>Errored Input</h3>
      <Input
        className="max-w-screen-sm"
        errorMessage="This is a validation error message"
        label="Errored Input"
        placeholder="Placeholder"
        type="text"
        value="errored input value"
      />
    </div>
  );
}
