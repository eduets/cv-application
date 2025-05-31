export { EducationDetails };
import { useState } from "react";
import { EducationItem } from "./EducationItem.jsx";

function EducationDetails() {
  const [isEditing, setIsEditing] = useState(true);
  const [formList, setFormList] = useState([]);

  function handleAdd() {
    const newFormList = structuredClone(formList);
    newFormList.push({ schoolName: "", titleOfStudy: "", date: "" });
    setFormList(newFormList);
  }

  function handleSubmit(e) {
    const forms = e.target.parentElement.querySelectorAll("form");
    let areFormsValid = true;
    for (const form of forms) {
      if (!form.checkValidity()) {
        areFormsValid = false;
        form.reportValidity();
        break;
      }
    }
    if (!areFormsValid) {
      return;
    }
    const formsValues = [];
    for (const form of forms) {
      formsValues.push(Object.fromEntries(new FormData(form)));
    }
    setFormList(formsValues);
    setIsEditing(false);
  }

  function handleDelete(e, index) {
    const forms = e.target.parentElement.parentElement.querySelectorAll("form");
    const formsValues = [];
    let i = 0;
    for (const form of forms) {
      if (i !== index) {
        formsValues.push(Object.fromEntries(new FormData(form)));
      }
      i += 1;
    }
    setFormList(formsValues);
  }

  function handleEdit() {
    setIsEditing(true);
  }

  let result;
  if (isEditing) {
    const educationItems = [];
    let i = 0;

    for (const formItem of formList) {
      const targetIndex = i;
      educationItems.push(
        <EducationItem
          key={crypto.randomUUID()}
          isEditing={true}
          formValues={formItem}
          onDelete={(e) => {
            handleDelete(e, targetIndex);
          }}
        />
      );
      i += 1;
    }
    result = (
      <section>
        <button onClick={handleAdd}>Add</button>
        {educationItems}
        <button onClick={handleSubmit}>Submit</button>
      </section>
    );
  } else {
    const educationItems = [];
    for (const formItem of formList) {
      educationItems.push(
        <EducationItem
          key={crypto.randomUUID()}
          isEditing={false}
          formValues={formItem}
        />
      );
    }
    result = (
      <section>
        {educationItems}
        {<button onClick={handleEdit}>Edit</button>}
      </section>
    );
  }

  return (
    <>
      <h2>Education</h2>
      {result}
    </>
  );
}
