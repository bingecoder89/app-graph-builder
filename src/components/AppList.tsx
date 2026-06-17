import { useQuery } from "@tanstack/react-query";
import { getApplications } from "../api/applications.js";

import { IoIosBulb } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiRuby } from "react-icons/di";
import { FaGolang } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useStore } from "../store/useStore";

const icons = {
  golang: FaGolang,
  java: FaJava,
  python: FaPython,
  ruby: DiRuby,
  go: IoIosBulb,
};

function AppList() {
  const selectedAppId = useStore((state) => state.selectedAppId);
  const setSelectedAppId = useStore((state) => state.setSelectedAppId);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["applications"],
    queryFn: getApplications,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }
  return (
    <Select
      value={selectedAppId}
      onValueChange={(value) => {
        setSelectedAppId(value);
      }}
    >
      <SelectTrigger className="w-[85%] mb-2 max-sm:mx-auto max-sm:my-3">
        <SelectValue placeholder="Select an Application" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Applications</SelectLabel>
          {data?.map((application) => {
            const Icon = icons[application.type];
            return (
              <SelectItem value={application.id} key={application.id}>
                <Icon /> {application.name}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default AppList;
