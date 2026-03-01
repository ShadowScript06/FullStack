import { motion } from "framer-motion"

function RepoCard({ repo }) {
  return (
    <motion.a
      href={repo.html_url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -4 }}
      className="block bg-slate-800 p-5 rounded-xl shadow-lg hover:bg-slate-700 transition"
    >
      <h3 className="font-semibold text-lg">{repo.name}</h3>
      <p className="text-sm text-slate-400 mt-2 line-clamp-2">
        {repo.description || "No description"}
      </p>

      <div className="flex justify-between text-sm mt-4 text-slate-400">
        <span>⭐ {repo.stargazers_count}</span>
        <span>{repo.language || "Unknown"}</span>
      </div>
    </motion.a>
  )
}

export default RepoCard