export function isLiked(user, recipe) {
  if (recipe.likedBy.includes(user._id)) {
    return true;
  } else return false;
}
