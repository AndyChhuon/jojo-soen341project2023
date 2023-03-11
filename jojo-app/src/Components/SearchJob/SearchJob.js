import "./SearchJob.less";
export default function SearchJob(props) {
  return (
    <form>
      <div className="jobPostsSearch">
        <label htmlFor="keywordSearch" className="label-search">
          Search by Keywords
        </label>
        <input
          id="keywordSearch"
          className="searchBar"
          placeholder="Search.."
          onChange={props.onSearchChange}
        ></input>
        <label htmlFor="locationsSearch" className="label-search">
          Locations
        </label>
        <select name="locationsSearch" id="locationsSearch">
          <option value="" disabled selected>
            Select Location..
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <label htmlFor="categoriesSearch" className="label-search">
          Category
        </label>
        <select name="categoriesSearch" id="categoriesSearch">
          <option value="" disabled selected>
            Select Category..
          </option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>

        <label htmlFor="categoriesSearch" className="label-search">
          Work Hours
        </label>
        <select name="categoriesSearch" id="categoriesSearch">
          <option value="" disabled selected>
            Select Work Hours..
          </option>
          <option value="volvo">Part Time</option>
          <option value="saab">Full Time</option>
          <option value="mercedes">Contract</option>
        </select>

        <label htmlFor="categoriesSearch" className="label-search">
          Work Type
        </label>
        <select name="categoriesSearch" id="categoriesSearch">
          <option value="" disabled selected>
            Select Work Type..
          </option>
          <option value="volvo">Hybrid</option>
          <option value="saab">Remote</option>
          <option value="mercedes">In Person</option>
        </select>

        <label className="label-search">Benefits</label>
        <div className="checkboxContainer">
          <input type="checkbox"></input>
          <label>Dental Care</label>
        </div>
        <div className="checkboxContainer">
          <input type="checkbox"></input>
          <label>Insurance</label>
        </div>
        <div className="checkboxContainer">
          <input type="checkbox"></input>
          <label>Paid Time Off</label>
        </div>
        <div className="checkboxContainer">
          <input type="checkbox"></input>
          <label>Pension</label>
        </div>
        <button className="submit-button" type="submit">
          Find The Job
        </button>
      </div>
    </form>
  );
}
