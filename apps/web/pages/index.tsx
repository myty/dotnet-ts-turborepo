import { ImageCard, ImageHeight } from "@monorepo/ui/molecules/card";
import { getTenantsData } from "@monorepo/data";
import { useQuery } from "react-query";

export default function Web() {
  const { data, isLoading } = useQuery("AllForecasts", getTenantsData);

  return (
    <div className="m-8">
      <h2 className="mt-8 text-xl font-bold">Tenants</h2>
      <div className="flex flex-wrap gap-4 justify-left">
        {isLoading
          ? null
          : data.map((tenant) => (
              <ImageCard
                key={tenant.id}
                title={tenant.name}
                imageHeight={ImageHeight.Base}
                imageUrl={tenant.imageUrl}
              >
                <p>{tenant.description}</p>
              </ImageCard>
            ))}
      </div>
    </div>
  );
}
