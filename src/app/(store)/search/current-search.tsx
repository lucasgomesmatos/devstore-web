"use client";
import { useSearchParams } from "next/navigation";

export default function CurrentSearch() {
  const search = useSearchParams();
  const query = search.get("q");

  return (
    <p className="text-sm">
      Resultados para: <span className="font-semibold">{query}</span>{" "}
    </p>
  );
}
