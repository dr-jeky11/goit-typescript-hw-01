export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

type RoleUser = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: RoleUser = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
