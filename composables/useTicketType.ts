export const useTicketType = () => {
  return useState<string>("type", () => "all");
};
