export { EducationItem };

function EducationItem({ isEditing, formValues, onDelete }) {
  let result;
  if (isEditing) {
    result = (
      <form className="details">
        <div>
          {/* <label htmlFor="school-name">School name: </label> */}
          <input
            name="schoolName"
            type="text"
            id="school-name"
            placeholder="School name"
            required
            defaultValue={formValues.schoolName}
          />
        </div>
        <div>
          {/* <label htmlFor="title-of-study">Title of study: </label> */}
          <input
            name="titleOfStudy"
            type="text"
            id="title-of-study"
            placeholder="Title of study"
            required
            defaultValue={formValues.titleOfStudy}
          />
        </div>
        <div>
          <label>Date of study: </label>
          <input
            name="date"
            type="date"
            id="date"
            placeholder="Date of study"
            required
            defaultValue={formValues.date}
          />
        </div>
        <button type="button" onClick={onDelete} className="delete">
          Delete
        </button>
      </form>
    );
  } else {
    result = (
      <div>
        <div>{formValues.schoolName}</div>
        <div>{formValues.titleOfStudy}</div>
        <div>{formValues.date}</div>
      </div>
    );
  }
  return result;
}
