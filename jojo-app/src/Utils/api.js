export function getData() {
  fetch("https://jobapplicationsapi.azurewebsites.net/api/JobApplicantsAPI", {
    method: "GET", // default, so we can ignore
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
