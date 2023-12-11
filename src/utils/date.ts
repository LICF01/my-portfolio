export const formatDate = (date: Date) => {
  return date.toLocaleString("en-US", { month: "long", year: "numeric" });
};
