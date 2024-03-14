import Email from "./Email";
import Github from "./Github";
import AddContactPage from "./Phone";

/* house the components used to contact me */
export default function Contact(): JSX.Element {
  return (
    <div className="flex justify-center py-4">
      <Github />
      <Email />
      <AddContactPage />
    </div>
  );
}
