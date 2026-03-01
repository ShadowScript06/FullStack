import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../redux/userSlice";
import { selectDevScore } from "../redux/userSelector";
import Loader from "../components/Loader";
;
import StatCard from "../components/StatCard";
import RepoCard from "../components/RepoCard";
import ErrorCard from "../components/Errorcard";

function Compare() {
  const [user1, setUser1] = useState("");
  const [user2, setUser2] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const dispatch = useDispatch();

  const users = useSelector((state) => state.user.users);

  const handleCompare = () => {
    if (!user1.trim() || !user2.trim()) return;

    const u1 = user1.trim().toLowerCase();
    const u2 = user2.trim().toLowerCase();

    dispatch(fetchUser(u1));
    dispatch(fetchUser(u2));

    setSubmitted(true);
  };

  const u1State = users[user1?.trim().toLowerCase()];
  const u2State = users[user2?.trim().toLowerCase()];

  const devScore1 = useSelector((state) =>
    selectDevScore(state, user1?.trim().toLowerCase())
  );

  const devScore2 = useSelector((state) =>
    selectDevScore(state, user2?.trim().toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">

      {/* Input Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl font-bold text-center mb-6">
          Compare Developers
        </h1>

        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Username 1"
            value={user1}
            onChange={(e) => setUser1(e.target.value)}
            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg"
          />

          <input
            type="text"
            placeholder="Username 2"
            value={user2}
            onChange={(e) => setUser2(e.target.value)}
            className="px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg"
          />

          <button
            onClick={handleCompare}
            className="bg-indigo-600 hover:bg-indigo-700 rounded-lg font-medium"
          >
            Compare
          </button>
        </div>
      </div>

      {/* Comparison Section */}
      {submitted && (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

          <CompareColumn
            state={u1State}
            devScore={devScore1}
          />

          <CompareColumn
            state={u2State}
            devScore={devScore2}
          />

        </div>
      )}
    </div>
  );
}

export default Compare;

function CompareColumn({ state, devScore }) {
  if (!state) return null;

  const { user, repos, loading, error } = state;

  if (loading) return <Loader />;

  if (error) return <ErrorCard message={error} />;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <div className="flex items-center gap-4 mb-6">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="font-bold text-lg">
            {user.name || user.login}
          </h2>
          <p className="text-slate-400 text-sm">@{user.login}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <StatCard title="Followers" value={user.followers} />
        <StatCard title="Repos" value={user.public_repos} />
        <StatCard title="Stars" value={
          repos.reduce((acc, r) => acc + r.stargazers_count, 0)
        } />
        <StatCard title="DevScore" value={devScore} highlight />
      </div>

      <div>
        <h3 className="mb-2 font-semibold">Top Repos</h3>
        <div className="space-y-3">
          {repos.slice(0, 3).map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}