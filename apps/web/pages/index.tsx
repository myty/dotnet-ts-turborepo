import { Button, ButtonSize } from "../../../packages/shelter-ui/atoms/button";
import { Card } from "../../../packages/shelter-ui/molecules/card";

export default function Web() {
  return (
    <div className="m-8">
      <h2 className="text-xl font-bold">Buttons</h2>
      <Button size={ButtonSize.Small} className="mr-2" />
      <Button className="mr-2" />
      <Button size={ButtonSize.Large} />
      <h2 className="mt-8 text-xl font-bold">Cards</h2>
      <div className="flex flex-wrap justify-center">
        {
          // Generate 8 cards
          Array.from({ length: 8 }).map((_, i) => (
            <Card className="m-2" key={i} title={`Card ${i + 1}`}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, urna eu tincidunt consectetur, nisi urna
                aliquet nunc, eget porttitor nisl nunc euismod nunc.
              </p>
            </Card>
          ))
        }
      </div>
    </div>
  );
}
