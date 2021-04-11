import { Tag } from "element-react/next"
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
      prop: "name",
      render: function(data){
        return <Tag>{data.name}</Tag>
      }
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
    }
  ]
