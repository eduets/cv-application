export { WorkDetails };
import { useState } from "react";
import { WorkItem } from "./WorkItem.jsx";

function WorkDetails() {
  const [isEditing, setIsEditing] = useState(true);
  const [formList, setFormList] = useState([]);

  function handleAdd() {
    const newFormList = structuredClone(formList);
    newFormList.push({
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      dateFrom: "",
      dateUntil: "",
    });
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
    const workItems = [];
    let i = 0;

    for (const formItem of formList) {
      const targetIndex = i;
      workItems.push(
        <WorkItem
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
        {workItems}
        <button onClick={handleSubmit}>Submit</button>
      </section>
    );
  } else {
    const workItems = [];
    for (const formItem of formList) {
      workItems.push(
        <WorkItem
          key={crypto.randomUUID()}
          isEditing={false}
          formValues={formItem}
        />
      );
    }
    result = (
      <section>
        {workItems}
        {<button onClick={handleEdit}>Edit</button>}
      </section>
    );
  }

  return (
    <>
      <h2>Work Experience</h2>
      {result}
    </>
  );
}
