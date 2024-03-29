import { userLikesKey } from "$services/keys";
import { client } from "$services/redis";

export const userLikesItem = async (itemId: string, userId: string) => {};

export const likedItems = async (userId: string) => {};

export const likeItem = async (itemId: string, userId: string) => {
    await client.sAdd(userLikesKey(userId),itemId);
};

export const unlikeItem = async (itemId: string, userId: string) => {
    await client.sRem(userLikesKey(userId),itemId);
};

export const commonLikedItems = async (userOneId: string, userTwoId: string) => {};
