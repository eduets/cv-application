export { PersonalDetails };
import { useState } from "react";

function PersonalDetails() {
  const [isEditing, setIsEditing] = useState(true);
  const [formValues, setFormValues] = useState(null);

  function handleSubmit(e) {
    const form = e.target;
    e.preventDefault();
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setFormValues(Object.fromEntries(new FormData(form)));
    setIsEditing(false);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  let result;
  if (isEditing) {
    const fullNameValue = formValues === null ? "" : formValues.fullName;
    const emailValue = formValues === null ? "" : formValues.email;
    const phoneValue = formValues === null ? "" : formValues.phone;
    result = (
      <section>
        <form onSubmit={handleSubmit}>
          <div>
            {/* <label htmlFor="full-name">Full name: </label> */}
            <input
              name="fullName"
              type="text"
              id="full-name"
              placeholder="Full name"
              autoComplete="name"
              required
              defaultValue={fullNameValue}
            />
          </div>
          <div>
            {/* <label htmlFor="email">E-Mail: </label> */}
            <input
              name="email"
              type="email"
              id="email"
              placeholder="E-Mail"
              autoComplete="email"
              required
              defaultValue={emailValue}
            />
          </div>
          <div>
            {/* <label htmlFor="phone">Phone number: </label> */}
            <input
              name="phone"
              type="tel"
              id="phone"
              placeholder="Phone number"
              autoComplete="tel"
              required
              defaultValue={phoneValue}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  } else {
    result = (
      <section>
        <div>{formValues.fullName}</div>
        <div>{formValues.email}</div>
        <div>{formValues.phone}</div>
        <button onClick={handleEdit}>Edit</button>
      </section>
    );
  }

  return (
    <>
      <h2>Personal Details</h2>
      {result}
    </>
  );
}
