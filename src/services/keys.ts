export const pageCacheKey = (id: string) => 'pagecache#' + id;
export const usersKey = (userId: string) => 'user#' + userId;
export const sessionsKey = (sessionsId: string) => 'sessions#' + sessionsId;
export const itemsKey = (itemId: string) => 'items#' + itemId;
export const usernamesUniqueKey = () => 'usernames:unique';
export const userLikesKey = (userId: string) => 'users:likes#' + userId;
