export const ControlType = {
   Text: "text",
   Number: "number",
   Money: "money",
   Password: "password",
   Select: "select",
   CheckBox: "checkbox",
   Radio: "radio",
   AutoComplete: "autocomplete",
   DateTime: "date",
   DateTimeUTC: "dateUTC",
   ReactSelect: "react-select",
   ReactSelectMultiple: "react-select-multiple",
   ReactSelectAsync: "react-select-async",
   DuplicateText: "DuplicateText",
   Email: "Email",
}
export class InputField {
   constructor(name, type, value, required, isReadOnly, isDefaultField, regex, selectConfig, duplicateConfig) {
      this.Name = name; // string
      this.Type = type; // ControlType
      this.Value = value; // any
      this.Required = required; // bool
      this.IsReadOnly = isReadOnly; // bool
      this.IsDefaultField = isDefaultField; // bool
      this.Regex = regex;
      this.SelectConfig = selectConfig ? selectConfig : {}; // object
      this.DuplicateConfig = duplicateConfig ? duplicateConfig : {};//{QueryString: null, ErrorMessage: null}
   }
}