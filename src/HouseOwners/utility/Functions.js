export const handleNumericInput = (event) => {
   const { value } = event.target;
   const numericValue = value.replace(/\D/g, ""); // Remove all non-numeric characters
   event.target.value = numericValue;
};
 
export const titleCase = (event) => { 
    const { value } = event.target;
    const titleCaseValue = value.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
    event.target.value = titleCaseValue;
}

export const required = {
    required: true,
    message: "This field is required",
  }
