import Button from "../../../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { ADD_UPDATE_FORM_DATA } from "../../../store/actionTypes";
export default function GetInTouch() {
  const { first_name, last_name, contact_number, email, project, description } =
    useSelector((store) => store.form);
  const dispatch = useDispatch();
  const updateFormData = (payload) => {
    dispatch({ type: ADD_UPDATE_FORM_DATA, payload });
  };
  function handleSubmit(event) {
    event.preventDefault();

    const emailBody = `
  Hello,%0A
  I'm looking for a service enquiry related to ${encodeURIComponent(
    project
  )}.%0A%0A
  ${encodeURIComponent(description)}%0A%0A
  ${encodeURIComponent(first_name)} ${encodeURIComponent(last_name)}%0A
  ${encodeURIComponent(contact_number)}%0A
  ${encodeURIComponent(email)}%0A
    `;

    const anchor = document.createElement("a");
    anchor.href = `mailto:yash.techtitudetribe@gmail.com?subject=Service%20Enquiry%20Related%20to%20${encodeURIComponent(
      project
    )}&body=${emailBody}`;
    anchor.click();
  }

  return (
    <section id="home-get-in-touch" className="flex flex-col lg:flex-row">
      <div className="relative  lg:w-2/4 bg-no-repeat min-h-[400px] p-4  lg:p-28 lg:py-40  text-secondary flex flex-col gap-5 justify-evenly">
        <p className="text-lg text-nowrap">Get In Touch</p>
        <h4 className="text-5xl text-nowrap">Got Any Inquiry?</h4>
        <p className=" text-lg">
          Have questions or need assistance? Reach out to us, and our team will
          be happy to help!
        </p>
        <div className="w-fit text-black xl:text-lg m-auto lg:m-0">
          <Button text="Download Brochure" />
        </div>
      </div>

      <div className="bg-secondary p-4  lg:w-2/4 lg:p-28 lg:pb-40">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:grid grid-cols-2 justify-between gap-4  md:gap-10"
        >
          <input
            type="text"
            placeholder="First Name"
            className="border border-primary p-2 pl-5  text-lg "
            required
            value={first_name}
            onChange={(e) => updateFormData({ first_name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="border border-primary p-2 pl-5  text-lg "
            required
            value={last_name}
            onChange={(e) => updateFormData({ last_name: e.target.value })}
          />
          <input
            type="number"
            maxLength={10}
            minLength={10}
            placeholder="Contact Number"
            className="border border-primary p-2 pl-5  text-lg "
            required
            value={contact_number}
            onChange={(e) => {
              if (e.target.value.length > 10) return;
              updateFormData({ contact_number: e.target.value });
            }}
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-primary p-2 pl-5  text-lg "
            required
            value={email}
            onChange={(e) => updateFormData({ email: e.target.value })}
          />
          <select
            required
            className="col-span-2 border border-primary p-2 pl-5  text-lg"
            value={project}
            onChange={(e) => updateFormData({ project: e.target.value })}
          >
            <option value="">Project Type</option>
            <option value="Home">Home</option>
            <option value="Business">Business</option>
            <option value="Renovation">Renovation</option>
          </select>
          <input
            type="text"
            placeholder="Description"
            className="col-span-2 row-span-4  border border-primary p-2 pl-5  text-lg"
            required
            value={description}
            onChange={(e) => updateFormData({ description: e.target.value })}
          />
          <div className="col-span-2 text-center">
            <Button text="Request Quote" />
          </div>
        </form>
      </div>
    </section>
  );
}
