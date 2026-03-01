import { createSelector } from "reselect";

const selectUserState = (state, username) =>
  state.user.users[username];

export const selectDevScore = createSelector(
  [selectUserState],
  (userState) => {
    if (!userState || !userState.user) return 0;

    const { user, repos } = userState;

    const totalStars = repos.reduce(
      (acc, repo) => acc + repo.stargazers_count,
      0
    );

    return (
      user.followers * 2 +
      user.public_repos * 3 +
      totalStars * 5
    );
  }
);