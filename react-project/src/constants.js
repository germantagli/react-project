import ButtonComponent from "./components/shared-components/button-component/button-component"

export const ARRAY_COLUMS_USER_TABLE = [
    {
        label: "id",
        prop: "id",
        width: 60
    },
    {
      label: "Email",
      prop: "email",
      width: 180
    },
    {
      label: "Name",
      prop: "name"
    },
    {
      label: "Username",
      prop: "username"
    },
    {
        label: "Phone",
        prop: "phone"
    },
    {
        label: "Website",
        prop: "website"
    },
    {
      label: "Operations",
      render: function() {
        return (
          <span>
           <ButtonComponent plain={true} type="info" size="small" label="Edit" />
           <ButtonComponent type="danger" size="small" label="Delete" />
          </span>
        )
      }
    } 
  ]
