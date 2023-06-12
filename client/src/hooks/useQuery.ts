import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

export default function useQuery() {
    const [searchParams] = useSearchParams();

    const params = useMemo(() => {
        console.log("recaclulating params");
        return {
            roomId: searchParams.get("roomId") || "",
            pid: searchParams.get("pid") || "",
        };
    }, [searchParams]);

    return params;
}
