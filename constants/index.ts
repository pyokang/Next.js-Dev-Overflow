export const themes = [
  { value: "light", label: "Light", icon: "/assets/icons/sun.svg" },
  { value: "dark", label: "Dark", icon: "/assets/icons/moon.svg" },
  { value: "system", label: "System", icon: "/assets/icons/computer.svg" },
] as const;

type TSidebarLink = { imageUrl: string; route: string; label: string };

export const sidebarLinks: ReadonlyArray<TSidebarLink> = [
  {
    imageUrl: "/assets/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imageUrl: "/assets/icons/users.svg",
    route: "/community",
    label: "Community",
  },
  {
    imageUrl: "/assets/icons/star.svg",
    route: "/collection",
    label: "Collections",
  },
  {
    imageUrl: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    imageUrl: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Tags",
  },
  {
    imageUrl: "/assets/icons/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imageUrl: "/assets/icons/question.svg",
    route: "/ask-question",
    label: "Ask a question",
  },
];
