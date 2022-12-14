export const firstPage = 1;
export const defaultLimit = 10;

export function getPaginationInfo(page, limit = defaultLimit) {
  const startIndex = (page - 1) * limit;
  return {
    limit,
    skip: startIndex,
  };
}