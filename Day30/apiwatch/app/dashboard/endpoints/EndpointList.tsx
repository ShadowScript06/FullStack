"use client";
import { useEffect, useState } from "react";
import EndpointMetrics from "./EndpointMetrics";

interface Endpoint {
  id: string;
  name: string;
  url: string;
  isDown: boolean;
  checks: {
    id: string;
    endpointId: string;
    status: number;
    responseMs: number;
    createdAt: string;
  }[];
}

export default function EndpointsList() {
  const [endpoints, setEndpoints] = useState<Endpoint[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEndpoints = async () => {
      try {
        const res = await fetch("/api/endpoints");
        const data = await res.json();
        setEndpoints(data); // safe after fetch
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // safe to update loading after async
      }
    };

    setLoading(true); // okay to set before calling async
    fetchEndpoints();
  }, []);

  return loading ? (
    <>Loading ...</>
  ) : (
    <div className="mt-6">
      {endpoints.length === 0 ? (
        <p>No endpoints added yet.</p>
      ) : (
        <ul className="space-y-2">
          {endpoints.map((ep) => (
            <>
              <li key={ep.id} className="bg-white p-3 rounded shadow">
                <div className="flex justify-between">
                  <div>
                    <p className="font-bold">{ep.name}</p>
                    <p className="text-sm text-gray-500">{ep.url}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">
                      {ep.checks.length} checks
                    </span>
                  </div>
                </div>
              </li>
              <EndpointMetrics checks={ep.checks} />
              <p className="font-semibold">
                {ep.name}{" "}
                {ep.isDown && <span className="text-red-500 ml-2">● Down</span>}
              </p>
            </>
          ))}
        </ul>
      )}
    </div>
  );
}
