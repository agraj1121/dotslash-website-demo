import { ComingSoon } from "@/components/coming-soon";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { bt?: string };
}) {
  const query = searchParams.bt?.trim();
  return (
    <ComingSoon
      title="BT ID Search"
      description={
        query
          ? `Search results for "${query}" aren't wired up yet — profile lookup by BT ID lands here soon.`
          : "Profile lookup by BT ID lands here soon."
      }
    />
  );
}
