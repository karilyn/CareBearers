import CaregiverListItem from "./CaregiverListItem";
import { action } from "@storybook/addon-actions";

const caregiver = {
  id: 1,
  first_name: "Sarah",
  last_name: "Peter",
  description: "Give me your children",
  photo_url: "https://picsum.photos/100/100"
};

export default {
  title: "Book/CaregiverListItem",
  component: CaregiverListItem,
}


export function Unselected(args) {
  return <CaregiverListItem {...args} />
}

Unselected.args = {
  id: caregiver.id,
  first_name: caregiver.first_name,
  last_name: caregiver.last_name,
  description: caregiver.description,
}

export function Selected(args) {
  return <CaregiverListItem {...args} />
}

Selected.args = {
    id: caregiver.id,
    first_name: caregiver.first_name,
    last_name: caregiver.last_name,
    description: caregiver.description,
    selected: true,
}

export function Clickable(args) {
  return <CaregiverListItem {...args} />
}
Clickable.args = {
  id: caregiver.id,
  first_name: caregiver.first_name,
  last_name: caregiver.last_name,
  description: caregiver.description,
  onClick: action("setCaregiver")(caregiver.id)
}