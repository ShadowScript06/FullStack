import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectDevScore } from "../redux/userSelector";
import { fetchUser } from "../redux/userSlice";
import { motion } from "framer-motion";
import StatCard from "../components/StatCard";
import RepoCard from "../components/RepoCard";
import Loader from "../components/Loader";
import ErrorCard from "../components/Errorcard";

function Profile() {
  const { username } = useParams();

  const dispatch = useDispatch();

 


  const userSlice = useSelector((state) => state.user);
const currentUserState = userSlice.users?.[username];

const user = currentUserState?.user;
const repos = currentUserState?.repos || [];
const loading = currentUserState?.loading;
const error = currentUserState?.error;

  const devScore = useSelector((state) =>
  selectDevScore(state, username)
);

  useEffect(() => {
    dispatch(fetchUser(username));
  }, [dispatch, username]);

  if (loading) return <Loader/>

  if (error) return <ErrorCard error={error}/>

  return (
    <motion.div
    className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-4 md:p-10"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4 }}
  >
    <div className="max-w-6xl mx-auto">

      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-slate-800/60 backdrop-blur-lg rounded-2xl p-6 shadow-xl">

        <img
          src={user?.avatar_url}
          alt={user?.login}
          className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-indigo-500 shadow-lg"
        />

        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">
            {user?.name || user?.login}
          </h1>
          <p className="text-slate-400 mt-1">@{user?.login}</p>

          <p className="mt-3 text-slate-300 text-sm md:text-base max-w-xl">
            {user?.bio || "No bio available."}
          </p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">

        <StatCard title="Followers" value={user?.followers} />
        <StatCard title="Following" value={user?.following} />
        <StatCard title="Public Repos" value={user?.public_repos} />
        <StatCard title="DevScore" value={devScore} highlight />

      </div>

      {/* Repo Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">Top Repositories</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {repos.slice(0, 4).map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>

    </div>
  </motion.div>
  );
}

export default Profile;
