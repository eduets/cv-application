export { WorkItem };

function WorkItem({ isEditing, formValues, onDelete }) {
  let result;
  if (isEditing) {
    result = (
      <form className="details">
        <div>
          {/* <label htmlFor="company-name">Company name: </label> */}
          <input
            name="companyName"
            type="text"
            id="company-name"
            placeholder="Company name"
            required
            defaultValue={formValues.companyName}
          />
        </div>
        <div>
          {/* <label htmlFor="position-title">Position title: </label> */}
          <input
            name="positionTitle"
            type="text"
            id="position-title"
            placeholder="Position title"
            required
            defaultValue={formValues.positionTitle}
          />
        </div>
        <div>
          {/* <label htmlFor="responsibilities">Main responsibilities: </label> */}
          <textarea
            name="responsibilities"
            type="text"
            id="responsibilities"
            placeholder="Main responsibilities"
            required
            defaultValue={formValues.responsibilities}
          ></textarea>
        </div>
        <div>
          <label>From date: </label>
          <input
            name="dateFrom"
            type="date"
            id="date-from"
            placeholder="From date"
            required
            defaultValue={formValues.dateFrom}
          />
        </div>
        <div>
          <label>Until date: </label>
          <input
            name="dateUntil"
            type="date"
            id="date-until"
            placeholder="Until date"
            required
            defaultValue={formValues.dateUntil}
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
        <div>{formValues.companyName}</div>
        <div>{formValues.positionTitle}</div>
        <div>{formValues.responsibilities}</div>
        <div>{formValues.dateFrom}</div>
        <div>{formValues.dateUntil}</div>
      </div>
    );
  }
  return result;
}
