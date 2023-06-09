import CaregiverListItem from "./CaregiverListItem";
import { action } from "@storybook/addon-actions";

const caregiver = {
  id: 1,
  first_name: "Sarah",
  last_name: "Peter",
  description: "Give me your children",
};

export default {
  component: CaregiverListItem,
}

export const Unselected = {
  render: () =>
    <CaregiverListItem
      id={caregiver.id}
      first_name={caregiver.first_name}
      last_name={caregiver.last_name}
      description={caregiver.description}
    />,
};

export const Selected = {
  render: () =>
    <CaregiverListItem
      id={caregiver.id}
      first_name={caregiver.first_name}
      last_name={caregiver.last_name}
      description={caregiver.description}
      selected
    />,
}

export const Clickable = {
  render: () =>
    <CaregiverListItem
      first_name={caregiver.first_name}
      last_name={caregiver.last_name}
      setCaregiver={() => action("setCaregiver")(caregiver.id)}
    />
}

