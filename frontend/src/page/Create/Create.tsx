import { GoHomeButton } from "../../ui/GoHomeButton/GoHomeButton";
import { Form } from "../../components/Form/Form";

export function Create() {
  return (
    <section>
      <GoHomeButton />
      <div>
        <p>Crie um produto!</p>
        <Form />
      </div>
    </section>
  );
}
